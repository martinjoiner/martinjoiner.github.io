
// Draw the map -------------------------------------------------------- //
// --------------------------------------------------------------------- //

L.mapbox.accessToken = 'pk.eyJ1IjoibWFydGluam9pbmVyIiwiYSI6ImNpaTh0Z2U0YzAwa3R0am0zbG91eXNjbGsifQ.qHn0qCslolUYqah6LM8OPw';
var map = L.mapbox.map('map', 'mapbox.streets')
          .setView([51.4505481,-2.6002987], 15);








// ------------------------ Class definitions -------------------------- //
// --------------------------------------------------------------------- //

/**
 * Route class 
 * @param {object} Raw JSON data defined
 * @constructor
 */
function Route( routeData ){

    this.total_travel_time_mins = routeData.total_travel_time_mins;
    this.total_distance = routeData.total_distance;
    this.name = routeData.route_name;
    this.color = routeData.color;
    this.legs = routeData.legs;

    this.legKeys = Object.keys( this.legs );

}


/**
 * (Public method of Route objects)
 * Display route on map
 */
Route.prototype.showOnMap = function(){

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
}


/**
 * (Public method of Route objects)
 * Calculates all the timed positions on legs based on a start_time
 * @param {string} start_time A time in for format of 'HH:MM' 
 * @return {array} Many objects representing positions and times
 */
Route.prototype.calculateTimedPositions = function( start_time ){
    var curMins = convertTimeToMins(start_time);
    var timedPositions = [];

    // Iterate over legs
    this.legKeys.forEach( function(legKey){
        var leg = this.legs[legKey];
        timedPositions = timedPositions.concat( leg.calculateTimedPositions(curMins) );
        curMins += leg.travel_time_mins;
    }, this);

    return timedPositions;
}


/**
 * Leg class
 * @param {object} legData Raw JSON data
 * @constructor
 */
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

        this.points.forEach( function(thisPoint){
            timedPositions.push( { latlng: thisPoint.latlng, time_seconds: curSeconds } );
            curSeconds += thisPoint.seconds_to_next;
        }, this);
        return timedPositions;
    });
}



/**
 * Point class
 * @param {object} Containing lat, lng, distance_to_next
 * @constructor
 */
function Point( pointData ){

    // Adorns this point with a glorious latlng object
    this.latlng = L.latLng(pointData.lat, pointData.lng);

    this.distance_to_next = pointData.distance_to_next;

    this.setSecondsToNext = (function( leg_total_distance, leg_travel_time_seconds){

        this.seconds_to_next = ( this.distance_to_next / leg_total_distance ) * leg_travel_time_seconds;
    });

}


/**
 * Boat class
 * @param {object} boatData Raw JSON data containing boat_name, color, schedule
 * @constructor
 */
function Boat( boatData ){

    this.name = boatData.boat_name;
    this.color = boatData.color;
    this.schedule = boatData.schedule;

    this.timedPositions = [];

    // Calculate all the timedPositions based on it's schedule
    if( Array.isArray(this.schedule) ){
        this.schedule.forEach( function(sched){
            route = routes[ sched.route ];
            this.timedPositions = this.timedPositions.concat( route.calculateTimedPositions( sched.start_time ) );
        }, this);
    }

    // Create MapBox marker object
    this._marker = L.marker([51.4505481,-2.6002987], {
        icon: L.mapbox.marker.icon({
            'marker-color': this.color,
            'marker-symbol': 'ferry',
            'marker-size': 'large'
            
        })
    }).bindPopup(this.name).addTo(map);
    


    // Updates the marker on the map
    this.whereShouldYouBeNow = (function(){

        if( typeof this.schedule === 'undefined' ){
            return false;
        } 
        var stop,
            timedPosition,
            previousStopTime,
            returnStop;
        // Iterate over all the timedPositions that we know this boat needs to be in
        for( var i = 0, iLimit = this.timedPositions.length; i < iLimit; i++ ){
            timedPosition = this.timedPositions[i];

            // Return the first timedPosition that's in the future 
            // TODO: This needs to be a lot more intelligent and should return waiting times and if it should actually be some distance between this point and the next
            if( timedPosition.time_seconds > window.currentSecond && ( timedPosition.time_seconds - window.currentSecond < 240 ) ){
                this._marker.setLatLng( timedPosition.latlng ).setOpacity(1);
                return true;
            }
        }
        // The boat is not scheduled to be out, hide the marker
        this._marker.setOpacity(0);
        return false;
    });

}

// End of class definitions




// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //


/**
 * Initialises the supplied routes JSON to be objects of type Route
 * Packs out the routes data with calculated figures that are helpful (eg. length of a section)
 * then hands them to the constructor
 */
(function(){
    if( typeof routes === 'undefined' ){
        return console.error('routes data is undefined. Have you loaded route.js?');
    }
	var keys = Object.keys( routes ),
		key;
	for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
        routes[key] = processRoute( routes[key] );

        // Show Route On Map
        routes[key].showOnMap();
	}
})();


/**
 * Give a route a total_travel_time_mins value
 *
 */
function processRoute( route ){

    var keys = Object.keys( route.legs ),
        key,
        totalTravelTimeMins = 0,
        total_distance = 0;

    // Iterate over the array of legs, converting each to an instances of Leg class
    for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
        processLeg(route.legs[key]);

        route.legs[key] = new Leg( route.legs[key] );

        totalTravelTimeMins += route.legs[key].travel_time_mins;
        total_distance += route.legs[key].total_distance;
    }


    route.total_travel_time_mins = totalTravelTimeMins;
    route.total_distance = total_distance;
    
    return new Route( route );
}





/**
 * Processes a single leg, turning it's points into instances of Point class 
 * Also, produced a line and totals the distance
 * @param {object} leg
 */
function processLeg( leg ){
    var total_distance = 0,
        line = [];

    // Iterate over array of points, converting to an object, and building a line (an array of latlngs) while we're at it
    for( var i = 0, iLimit = leg.points.length; i < iLimit; i++ ){

        // Convert the element to a Point object
        leg.points[i] = new Point(leg.points[i]);

        // Add the latlng to the line
        line.push( leg.points[i].latlng );

        // Set the previous point's distance_to_next (which is this point)
        if( i > 0 ){
            leg.points[i-1].distance_to_next = leg.points[i-1].latlng.distanceTo( leg.points[i].latlng );

            total_distance += leg.points[i-1].distance_to_next;
        }

    }


    // Save the line ready to make a Mapbox polyline later
    leg.line = line;

    // Set the total_distance of the leg
    leg.total_distance = total_distance;

}


/**
 * Initialiser for turning the raw boat data into active objects
 */
(function(){

    // Ensure that the boats data has been loaded
    if( typeof boats === 'undefined' ){
        return console.error('boats data is undefined. Have you loaded boats.js?');
    }

    var keys = Object.keys( boats ),
        key;
    for( var i = 0, iLimit = keys.length; i < iLimit; i++ ){
        key = keys[i];
        boats[key] = new Boat(boats[key]);
    }
})();







/**
 * Global multiplier used to speed-up/slow-down/reverse the passage of gametime 
 *
 * @type {integer}
 */
window.timescale = 1; 


/**
 * Number of seconds in a 24 hour period
 * Set here as an equasion to avoid "magic numbers" in our code
 *
 * @type {integer}
 */
window.secondInADay = 24 * 60 * 60;


/**
 * Actual real-world time according to device.
 * Used to set the initial time at load
 *
 * @type {Date}
 */
window.dateAtPageLoad = new Date(); 


/**
 * The current gametime as number of seconds after midnight
 *
 * @type {integer}
 */
window.currentSecond = 0;


/**
 * Initialiser for setting the gametime to real-world time at load
 */
(function(){
    var currentMinute = ( window.dateAtPageLoad.getHours() * 60 ) + window.dateAtPageLoad.getMinutes();
    window.currentSecond = currentMinute * 60;
})();





/** 
 * Function that calls itself after a delay, used to control passage of gametime
 */
function tick(){

    incMinute();

    renderBoatLocations();

    setTimeout(tick, 200);

}
tick();


/**
 * Increments the gametime by an amount
 */
function incMinute(){

    if( window.timescale > 0 ){
        // We are going up
        if( window.currentSecond < window.secondInADay ){
            window.currentSecond += window.timescale * 15;
        } else {
            window.currentSecond = 0;
        }
    } else {
        // We are going down
        if( window.currentSecond < 0  ){
            window.currentSecond = window.secondInADay;
        } else {
            window.currentSecond += window.timescale * 15;
        }
    }

    window.currentMinute = Math.round( window.currentSecond / 60 );

    displayTime( Math.floor(    window.currentMinute / 60 ), 
                                window.currentMinute % 60, 
                                Math.floor( window.currentSecond % 60 ) );
}


/**
 * Iterate over boats querying where they should be
 */
function renderBoatLocations(){
    Object.keys(boats).forEach( function(boatKey){
        boats[boatKey].whereShouldYouBeNow();
    });
}




// ------------------------------ Clock & Controls --------------------------------------------- //
// --------------------------------------------------------------------------------------------- //


elemTimeSlider = document.getElementById('timeSlider');
elemTimeInput = document.getElementById('TimeInput');

elemTimeSlider.addEventListener("input", function(){
	elemTimeInput.value = window.timescale = parseInt(this.value);
});

elemTimeInput.addEventListener("keyup", function(){
    if( this.value > 24 ){
        elemTimeSlider.value = window.timescale = parseInt(this.value) = 1000;
    } else if( this.value < -24 ){ 
        elemTimeSlider.value = window.timescale = this.value = -24;
    } else {
        elemTimeSlider.value = window.timescale = parseInt(this.value);
    }
});


/**
 * Sets text content and CSS rules to display the correct time on the analogue clock
 * @param {integer} hour
 * @param {integer} minute
 * @param {integer} second
 */
function displayTime( hour, minute, second ){

    document.getElementById('time_hour').textContent = numAs2Digits(hour);
    document.getElementById('time_minute').textContent = numAs2Digits(minute);
    document.getElementById('time_second').textContent = numAs2Digits(second);

    setCurrentClockJump( hour );

    if( hour > 12 ){
        hour = hour - 12;
    }

    var minuteHandDegrees = ( minute / 60 ) * 360;
    document.getElementById('minuteHand').style.transform = 'rotate( ' + minuteHandDegrees + 'deg )';

    var hourHandDegrees = ( ( ( hour * 60 ) + minute ) / 720 ) * 360;
    document.getElementById('hourHand').style.transform = 'rotate( ' + hourHandDegrees + 'deg )';

}


/**
 * Highlights which hour block on the outer edge of the clock is highlighted
 * @hour number representing the hour
 */
function setCurrentClockJump( hour ){
    var newClass;
    for( var i = 9; i < 18; i++ ){
        if( i === hour ){
            newClass = 'current';
        } else {
            newClass = '';
        }
        document.getElementById('hourOf' + i).setAttribute('class',newClass);
    }
}


/**
 * Initialise the clockJump interface by assigning click event listeners
 */
(function(){
    for( var i = 9; i < 18; i++ ){
        document.getElementById('hourOf' + i).addEventListener('click', function(){
            var thisHour = parseInt( this.id.replace(/^hourOf/,'') );
            window.currentSecond = thisHour * 60 * 60;
        });
    }
})();












/* --------------------------- Helper functions -------------------------------------- */
/* ----------------------------------------------------------------------------------- */

function numAs2Digits( num ){
    var strNum = num.toString();
    if( num < 10 ){
        strNum = '0' + strNum;
    }
    return strNum;
}

/**
 * Converts a time to minutes
 * @param {string} strTime time in the form of hh:mm
 * @return {integer} Number of minutes from midnight
 */
function convertTimeToMins( strTime ){
    var parts = strTime.split(':');
    return ( parseInt(parts[0]) * 60 ) + parseInt(parts[1]);
}
