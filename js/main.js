
// Draw the map -------------------------------------------------------- //
// --------------------------------------------------------------------- //

L.mapbox.accessToken = 'pk.eyJ1IjoibWFydGluam9pbmVyIiwiYSI6ImNpaTh0Z2U0YzAwa3R0am0zbG91eXNjbGsifQ.qHn0qCslolUYqah6LM8OPw';
var map = L.mapbox.map('map', 'mapbox.streets')
          .setView([51.4505481,-2.6002987], 15);








// ------------------------ Class definitions -------------------------- //
// --------------------------------------------------------------------- //

function Route( routeData ){

    this.total_travel_time_mins = routeData.total_travel_time_mins;
    this.name = routeData.route_name;
    this.color = routeData.color;
    this.legs = routeData.legs;

    this.legKeys = Object.keys( this.legs );

    // Method to display route on map
    this.showOnMap = (function(){

        var polyline_options = {
            color: this.color
        };

        var polylines = [],
            legKey,
            cnt = 0;
        // Iterate over each leg 
        for( legKey in this.legs ){
            // Add a polyline for each
            polylines[cnt] = L.polyline(this.legs[legKey].line, polyline_options).addTo(map);
            cnt++;
        }
    });

    // Takes a start time and returns positions and times
    this.calculateTimedPositions = (function( start_time ){
        var curMins = convertTimeToMins(start_time);
        var timedPositions = [];

        // Iterate over legs
        this.legKeys.forEach( function(legKey){
            var leg = this.legs[legKey];
            timedPositions = timedPositions.concat( leg.calculateTimedPositions(curMins) );
            curMins += leg.travel_time_mins;
        }, this);

        return timedPositions;
    });
}



function Leg( legData ){
    this.line = legData.line;
    this.points = legData.points;
    this.stop_name = legData.stop_name;
    this.total_distance = legData.total_distance;
    this.travel_time_mins = legData.travel_time_mins;
    this.travel_time_seconds = legData.travel_time_mins * 60;

    // Iterate over points, setting their travel time in seconds
    for( var i = 0, iLimit = this.points.length, point; i < iLimit; i++ ){
        point = this.points[i];
        point.setSecondsToNext( this.total_distance, this.travel_time_seconds);
    }

    // Takes a start time and returns positions and times
    this.calculateTimedPositions = (function( start_minutes ){

        var curSeconds = start_minutes * 60,
            timedPositions = [];

        for( var i = 0, iLimit = this.points.length, thisPoint; i < iLimit; i++ ){
            thisPoint = this.points[i];
            timedPositions.push( { latlng: thisPoint.latlng, time_seconds: curSeconds } );
            curSeconds += thisPoint.seconds_to_next;
        }
        return timedPositions;
    });
}



function Point( pointData ){
    this.lat = pointData.lat;
    this.lng = pointData.lng;
    this.distance_to_next = pointData.distance_to_next;

    this.setSecondsToNext = (function( leg_total_distance, leg_travel_time_seconds){

        if( typeof leg_total_distance === 'undefined' ){
            leg_total_distance = 12;
        }
        this.seconds_to_next = ( this.distance_to_next / leg_total_distance ) * leg_travel_time_seconds;
    });

    // Adorns this point with a glorious latlng object
    this.latlng = L.latLng(this.lat, this.lng);

}



function Boat( boatData ){

    this.name = boatData.boat_name;
    this.color = boatData.color;
    this._marker;
    this.schedule = boatData.schedule;

    this.timedPositions = [];

    // Calculate all the timedPositions based on it's schedule
    if( Array.isArray(this.schedule) ){
        this.schedule.forEach( function(sched){
            route = routes[ sched.route ];
            this.timedPositions = route.calculateTimedPositions( sched.start_time );
        }, this);
    }

    // Setter method to create MapBox marker object
    this.setMarker = (function(){

        this._marker = L.marker([51.4505481,-2.6002987], {
            icon: L.mapbox.marker.icon({
                'marker-color': this.color,
                'marker-symbol': 'ferry',
                'marker-size': 'large'
                
            }),
            'title': this.name
        }).addTo(map);

        
    });


    this.whereShouldYouBeNow = (function(){
        var stop,
            previousStopTime,
            returnStop;
        for( var i = 0, iLimit = this.timedPositions.length; i < iLimit; i++ ){
            timedPosition = this.timedPositions[i];
            if( timedPosition.time_seconds > window.currentSecond ){
                this._marker.setLatLng( timedPosition.latlng )
                return true;
            }
        }
        return false;
    });


}



// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //


// Packs out the routes data with calculated figures that are helpful (eg. length of a section)
function processRoutes(){
	var keys = Object.keys( routes ),
		key;
	for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
        routes[key] = processRoute( routes[key] );

        // Show Route On Map
        routes[key].showOnMap();
	}
}
processRoutes();


// Give a route a total_travel_time_mins value
function processRoute( route ){
    route.total_travel_time_mins = processLegs( route.legs );
    
    return new Route( route );
}


// Iterates over all the legs in a route making latlngs and totalling distance
function processLegs( legs ){
    var keys = Object.keys( legs ),
        key,
        totalTravelTimeMins = 0;
    for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
        processLeg(legs[key]);

        legs[key] = new Leg( legs[key] );

        totalTravelTimeMins += legs[key].travel_time_mins;
    }
    return totalTravelTimeMins;
}


// 
function processLeg( leg ){
    var total_distance = 0;
    var line = [];

    // Iterate over all the points
    for( var i = 0, iLimit = leg.points.length; i < iLimit; i++ ){

        // Convert the element to a Point object
        leg.points[i] = new Point(leg.points[i]);

        // Add the latlng to the line
        line.push( leg.points[i].latlng );

        // Set the distance to this point, for the previous point
        if( i > 0 ){
            leg.points[i-1].distance_to_next = leg.points[i-1].latlng.distanceTo( leg.points[i].latlng );

            total_distance += leg.points[i-1].distance_to_next;
        }

    }
    leg.total_distance = total_distance;

    // Save the line ready to make a polyline later
    leg.line = line;

}




function processBoats(){
    var keys = Object.keys( boats ),
        key;
    for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
        boats[key] = processBoat( boats[key] );
    }
}
processBoats();

function processBoat( boat ){
    return new Boat(boat);
}




// Marker -------------------------------------------------------------- //
// --------------------------------------------------------------------- //

// Create a marker and add it to the map.
for( var i = 0, iLimit = boats.length; i < iLimit; i++ ){
    boat = boats[i];
    if( typeof boat.schedule !== 'undefined' ){

        boat.setMarker();

    }
}


// Create a counter with a value of 0.
var j = 0;



// 1 = Realtime, 2 = Double speed, et cetera
// 1000 means a day will take 1.44 minutes 
var timescale = 1; 

var currentdate = new Date(); 

window.currentMinute = ( currentdate.getHours() * 60 ) + currentdate.getMinutes();
window.currentSecond = window.currentMinute * 60;


// Set as an equasion to avoid "magic numbers"
window.secondInADay = 24 * 60 * 60;


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
tick();


// Increments the global time by 1 minute
function incMinute(){

    if( timescale > 0 ){
        // We are going up
        if( window.currentSecond < window.secondInADay ){
            window.currentSecond += timescale * 15;
        } else {
            window.currentSecond = 0;
        }
    } else {
        // We are going down
        if( window.currentSecond < 0  ){
            window.currentSecond = window.secondInADay;
        } else {
            window.currentSecond += timescale * 15;
        }
    }

    window.currentMinute = Math.round( window.currentSecond / 60 );

    displayTime( Math.floor(window.currentMinute / 60 ), window.currentMinute % 60, window.currentSecond % 60 );
}




// Clock --------------------------------------------------------------- //
// --------------------------------------------------------------------- //




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

function displayTime( hour, minute, second ){

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
            currentLeg = boat.whereShouldYouBeNow();
        }
    }
}


// Take a time in the form of hh:mm and returns integer minutes from midnight
function convertTimeToMins( strTime ){
    var parts = strTime.split(':');
    return ( parseInt(parts[0]) * 60 ) + parseInt(parts[1]);
}

// Compares 2 numbers
function aIsLaterThanB( firstMin, secondMin ){
    return firstMin > secondMin ? true : false;
}
