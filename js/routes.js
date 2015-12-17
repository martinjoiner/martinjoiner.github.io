
// Hello Nic! This is where you're gonna be putting data
// Keep the indentation neat :-) 

// routes is an object containing many routes
routes = {
	"west": { 
		// A route has a name and an array of legs. The series of legs makes up a circuit
		"route_name": "West Route",
		"legs": {
			// A leg is a series of points that lead up to a final point which is the location of the "stop". The stop has a name. 
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
					{"lat":51.4492732630874,"lng":-2.612771987915039},
				    {"lat":51.44911279187733,"lng":-2.6128149032592773},
				    {"lat":51.4490058107573,"lng":-2.6134586334228516},
				    {"lat":51.44873835686053,"lng":-2.614295482635498},
				    {"lat":51.44853776540982,"lng":-2.6150035858154297},
				    {"lat":51.448243563021386,"lng":-2.6156258583068848},
				    {"lat":51.44806971526447,"lng":-2.615969181060791},
				    {"lat":51.4479493587373,"lng":-2.6168060302734375},
				    {"lat":51.44816332567737,"lng":-2.6169776916503906}
				],
				"stop_name": "Cumberland Basin"
			},
			"novascocia": {
				"points": [
					{"lat":51.44816332567737,"lng":-2.6170527935028076},
				    {"lat":51.447935985770265,"lng":-2.6169562339782715},
				    {"lat":51.4476417795043,"lng":-2.6167845726013184},
				    {"lat":51.447441183236094,"lng":-2.616795301437378},
				    {"lat":51.44730745190104,"lng":-2.6170206069946285},
				    {"lat":51.44730745190104,"lng":-2.6173317432403564},
				    {"lat":51.44725395925736,"lng":-2.617621421813965},
				    {"lat":51.44720715314272,"lng":-2.617642879486084}
				],
				"stop_name": "Nova Scocia"
			},
			"cottage": {
				"points": [
					{"lat":51.44720046655099,"lng":-2.617642879486084},
				    {"lat":51.44719377995829,"lng":-2.6172780990600586},
				    {"lat":51.44699318172196,"lng":-2.617042064666748},
				    {"lat":51.446959748596896,"lng":-2.6167309284210205},
				    {"lat":51.44699318172196,"lng":-2.616194486618042}
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
	},
	"east": { 
		// A route has a name and an array of legs. The series of legs makes up a circuit
		"route_name": "East Route",
		"legs": {
			// A leg is a series of points that lead up to a final point which is the location of the "stop". The stop has a name. 
			"templequaybridge": {
				"points": [
				    {"lat":51.45149974292567,"lng":-2.5811755657196045},
				    {"lat":51.451553230595216,"lng":-2.5811862945556636},
				    {"lat":51.451613404148574,"lng":-2.581239938735962},
				    {"lat":51.45168026355929,"lng":-2.581336498260498},
				    {"lat":51.45186078347915,"lng":-2.5817227363586426},
				    {"lat":51.45200118736773,"lng":-2.582087516784668},
				    {"lat":51.452288679697126,"lng":-2.5828278064727783},
				    {"lat":51.452529369557304,"lng":-2.583514451980591},
				    {"lat":51.45256279860421,"lng":-2.583739757537842},
				    {"lat":51.452602913428144,"lng":-2.5839436054229736}
				],
				"stop_name": "Temple Bridge"
			}
		}
	}
};

// boats is a numeric array containing many objects, each representing a single boat
boats = [
	{
		"boat_name": "Queen Mary",
		"schedule": [
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
