
// Hello Nic! This is where you're gonna be putting data

// routes is an object containing many routes
routes = {
	"west": { 
		// A route has a name and an array of legs. The series of legs makes up a circuit
		"route_name": "West Route",
		"legs": {
			// A leg is a series of points and a "stop name". The last point is the location of the stop. 
			"mardyke": {
				"points": [
					{"lat":51.44946047878631,"lng":-2.611699104309082},
				    {"lat":51.44996863181373,"lng":-2.6093387603759766},
				    {"lat":51.44988839750119,"lng":-2.608523368835449},
				    {"lat":51.449808163047656,"lng":-2.607407569885254},
				    {"lat":51.449326753365405,"lng":-2.606334686279297},
				    {"lat":51.4485243926151,"lng":-2.6048326492309566},
				    {"lat":51.44798947761493,"lng":-2.6026010513305664},
				    {"lat":51.44772201776483,"lng":-2.600283622741699}
				],
				"stop_name": "Mardyke"
			},
			"cumberland": {
				"points": [
					{"lat":51.447829001892885,"lng":-2.616720199584961},
				    {"lat":51.44734757134268,"lng":-2.616891860961914},
				    {"lat":51.44713360057993,"lng":-2.6163339614868164},
				    {"lat":51.44734757134268,"lng":-2.6157331466674805}
				],
				"stop_name": "Cumberland Basin"
			},
			"cottage": {
				"points": [
					{"lat":51.447829001892885,"lng":-2.616720199584961},
				    {"lat":51.44734757134268,"lng":-2.616891860961914},
				    {"lat":51.44713360057993,"lng":-2.6163339614868164},
				    {"lat":51.44734757134268,"lng":-2.6157331466674805}
				],
				"stop_name": "The Cottage"
			},
			"ssgreatbritain": {
				"points": [
					{"lat":51.44758828725229,"lng":-2.615346908569336},
				    {"lat":51.44817669857784,"lng":-2.614445686340332},
				    {"lat":51.44887208400473,"lng":-2.6122570037841797},
				    {"lat":51.44940698866496,"lng":-2.610154151916504},
				    {"lat":51.44956745884104,"lng":-2.6091670989990234},
				    {"lat":51.44951396884501,"lng":-2.6084375381469727}
				],
				"stop_name": "SS Great Britain"
			},
			"arnolfini": {
				"points": [
					{"lat":51.44947385130684,"lng":-2.608201503753662},
				    {"lat":51.44947385130684,"lng":-2.6079225540161133},
				    {"lat":51.44920640015174,"lng":-2.6072144508361816},
				    {"lat":51.448658120386,"lng":-2.606334686279297},
				    {"lat":51.44804296939696,"lng":-2.6047468185424805},
				    {"lat":51.447441183236094,"lng":-2.6025795936584473},
				    {"lat":51.44725395925736,"lng":-2.6009702682495117},
				    {"lat":51.44738769074908,"lng":-2.600090503692627},
				    {"lat":51.44758828725229,"lng":-2.600069046020508}
				],
				"stop_name": "The Arnolfini"
			}
		}
	}
};

// boats is a numeric array containing many objects, each representing a single boat
boats = [
	{
		"boat_name": "Queen Mary",
		"stops": [
			{
				"time": "9:00",
				"stop": "mardyke"
			},
			{
				"time": "9:20",
				"stop": "cumberland"
			},
			{
				"time": "9:30",
				"stop": "cottage"
			},
			{
				"time": "9:40",
				"stop": "ssgreatbritain"
			},
			{
				"time": "9:50",
				"stop": "arnolfini"
			}
		]
	}
];
