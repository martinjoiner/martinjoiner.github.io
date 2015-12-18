
// Draw the map -------------------------------------------------------- //
// --------------------------------------------------------------------- //

L.mapbox.accessToken = 'pk.eyJ1IjoibWFydGluam9pbmVyIiwiYSI6ImNpaTh0Z2U0YzAwa3R0am0zbG91eXNjbGsifQ.qHn0qCslolUYqah6LM8OPw';
var map = L.mapbox.map('map', 'mapbox.streets')
          .setView([51.4505481,-2.6002987], 15);






// Draw polylines to show the routes ----------------------------------- //
// --------------------------------------------------------------------- //

// Prints a polyline for each leg of a route
function showRouteOnMap( route ){

	var polyline_options = {
	    color: route.color
	};

    var polylines = [],
        cnt = 0;
    for( var leg in route.legs ){
        // Add a polyline for each
        polylines[cnt] = L.polyline(route.legs[leg].line, polyline_options).addTo(map);
        cnt++;
    }

}




// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //

function processRoutes(){
	var keys = Object.keys( routes ),
		key;
	for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
		processLegs( routes[key].legs );
		showRouteOnMap( routes[key] );
	}

}
processRoutes();


// Iterates over all the legs in a route making latlngs and totalling distance
function processLegs( legs ){
    var keys = Object.keys( legs ),
        key;
    for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
        processLeg(legs[key]);
    }
}


function processLeg( leg ){
    var totalDistance = 0;
    var line = [];
    for( var i = 0, iLimit = leg.points.length; i < iLimit; i++ ){
        addLatlngToPoint(leg.points[i]);
        // Add the latlng to the line
        line.push( leg.points[i].latlng );
        // Set the distance to this point, for the previous point
        if( i > 0 ){
            leg.points[i-1].distanceToNext = leg.points[i-1].latlng.distanceTo( leg.points[i].latlng );
            totalDistance += leg.points[i-1].distanceToNext;
        }
    }
    leg.totalDistance = totalDistance;
    // Save the line ready to make a polyline later
    leg.line = line;
}

// Takes a point object and adorns it with a glorious latlng object
function addLatlngToPoint( point ){
    point.latlng = L.latLng(point.lat, point.lng);
}





// Marker -------------------------------------------------------------- //
// --------------------------------------------------------------------- //

// Create a marker and add it to the map.
for( var i = 0, iLimit = boats.length; i < iLimit; i++ ){
    boat = boats[i];
    if( typeof boat.schedule !== 'undefined' ){
        boat.marker = L.marker([51.4505481,-2.6002987], {
        	icon: L.mapbox.marker.icon({
        		'marker-color': '#f86767',
        		'marker-symbol': 'ferry',
        		'marker-size': 'large'
        	})
        }).addTo(map);
    }
}


// Create a counter with a value of 0.
var j = 0;
// Minutes go from 0 - 1440 (1 day)
var minute = 0;

tick();
function tick(){

	//var jLimit = routes.west.legs.cumberland.points.length;
    
	//marker.setLatLng( routes.west.legs.cumberland.points[j].latlng );

	// Move to the next point of the line
    // until `j` reaches the length of the array.
    // if (++j < jLimit){
    	
    // } else {
    // 	j = 0;
    // }

    incMinute();

    renderBoatLocations();

    setTimeout(tick, 100);

}

function incMinute(){

    if( timescale > 0 ){
        // We are going up
        if( minute < 1440 ){
            minute = minute + timescale;
        } else {
            minute = 0;
        }
    } else {
        // We are going down
        if( minute < 0  ){
            minute = 1440;
        } else {
            minute = minute + timescale;
        }
    }

    displayTime( Math.floor(minute / 60), minute % 60 );
}




// Clock --------------------------------------------------------------- //
// --------------------------------------------------------------------- //

var gameTime = new Date();

// 1 = Realtime, 2 = Double speed, et cetera
// 1000 means a day will take 1.44 minutes 
var timescale = 1; 

elemTimeSlider = document.getElementById('timeSlider');
elemTimeInput = document.getElementById('TimeInput');

elemTimeSlider.addEventListener("input", function(){
	elemTimeInput.value = timescale = parseInt(this.value);
});

elemTimeInput.addEventListener("keyup", function(){
    if( this.value > 24 ){
        elemTimeSlider.value = timescale = parseInt(this.value) = 1000;
    } else if( this.value < -24 ){ 
        elemTimeSlider.value = timescale = this.value = -24;
    } else {
        elemTimeSlider.value = timescale = parseInt(this.value);
    }
});

function displayTime( hour, minute ){

    document.getElementById('numerictime').textContent = numAs2Digits(hour) + ':' + numAs2Digits(minute);

    if( hour > 12 ){
        hour = hour - 12;
    }

    var minuteHandDegrees = ( minute / 60 ) * 360;
    document.getElementById('minuteHand').style.transform = 'rotate( ' + minuteHandDegrees + 'deg )';

    var hourHandDegrees = ( ( ( hour * 60 ) + minute ) / 720 ) * 360;
    document.getElementById('hourHand').style.transform = 'rotate( ' + hourHandDegrees + 'deg )';
}

function numAs2Digits( num ){
    var strNum = num.toString();
    if( num < 10 ){
        strNum = '0' + strNum;
    }
    return strNum;
}




function renderBoatLocations(){
    var boat,
        currentLeg;
    // Loop over boats querying where they should be
    for( var i = 0, iLimit = boats.length; i < iLimit; i++ ){
        boat = boats[i];
        if( typeof boat.schedule !== 'undefined' ){
            currentLeg = whereShouldYouBeNow( boat.schedule );
            if( typeof routes[boat.route].legs[currentLeg.stop] !== 'undefined' ){
                boat.marker.setLatLng( routes[boat.route].legs[currentLeg.stop].points[0].latlng );
            }
        }
    }
}

function whereShouldYouBeNow( schedule ){
    var stop,
        previousStopTime,
        returnStop;
    for( var i = 0, iLimit = schedule.length; i < iLimit; i++ ){
        stop = schedule[i];
        if( aIsLaterThanB( convertToMins(stop.time), minute ) ){
            return stop;
        }
    }
    return stop;
}

// Take a time in the form of hh:mm and returns integer minutes
function convertToMins( strTime ){
    var parts = strTime.split(':');
    return ( parseInt(parts[0]) * 60 ) + parseInt(parts[1]);
}

// Compares 2 numbers
function aIsLaterThanB( firstMin, secondMin ){
    return firstMin > secondMin ? true : false;
}
