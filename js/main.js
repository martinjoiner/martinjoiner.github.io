
// Draw the map -------------------------------------------------------- //
// --------------------------------------------------------------------- //

L.mapbox.accessToken = 'pk.eyJ1IjoibWFydGluam9pbmVyIiwiYSI6ImNpaTh0Z2U0YzAwa3R0am0zbG91eXNjbGsifQ.qHn0qCslolUYqah6LM8OPw';
var map = L.mapbox.map('map', 'examples.map-zr0njcqy')
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
var marker = L.marker([51.4505481,-2.6002987], {
	icon: L.mapbox.marker.icon({
		'marker-color': '#f86767'
	})
}).addTo(map);


// Create a counter with a value of 0.
var j = 0;

tick();
function tick(){

	var jLimit = routes.west.legs.cumberland.points.length;
    
	marker.setLatLng( routes.west.legs.cumberland.points[j].latlng );

	// Move to the next point of the line
    // until `j` reaches the length of the array.
    if (++j < jLimit){
    	
    } else {
    	j = 0;
    }

    setTimeout(tick, 100);

}
