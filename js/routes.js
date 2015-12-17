
// Hello Nic! This is where you're gonna be putting data
// Keep the indentation neat :-) 

// routes is an object containing many routes
routes = {
	"west": { 
		// A route has a name and an array of legs. The series of legs makes up a circuit
		"route_name": "West Route",
		"color": "#bf0000",
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
		"color": "#162384",
		"legs": {
			// A leg is a series of points that lead up to a final point which is the location of the "stop". The stop has a name. 
			"citycentreprincestreet": {
				"points": [
				    {"lat":51.45220176360243,"lng":-2.597794532775879},
				    {"lat":51.45198781558742,"lng":-2.597837448120117},
				    {"lat":51.45166689168497,"lng":-2.597837448120117},
				    {"lat":51.45134596552659,"lng":-2.59775161743164},
				    {"lat":51.4509180604728,"lng":-2.5977087020874023},
				    {"lat":51.45067736211761,"lng":-2.597815990447998},
				    {"lat":51.45002212127711,"lng":-2.5980305671691895},
				    {"lat":51.44967443864507,"lng":-2.5981807708740234},
				    {"lat":51.44925989050809,"lng":-2.5982666015625},
				    {"lat":51.448952320103274,"lng":-2.5981593132019043},
				    {"lat":51.44879184776521,"lng":-2.5981593132019043},
				    {"lat":51.44861800209584,"lng":-2.597966194152832},
				    {"lat":51.44864474762654,"lng":-2.5975799560546875},
				    {"lat":51.44871161138467,"lng":-2.597215175628662},
				    {"lat":51.44879184776521,"lng":-2.5969576835632324}
				],
				"stop_name": "Prince Street"
			},
			"princestreetbathurstbasin": {
				"points": [
				    {"lat":51.44874504322705,"lng":-2.596914768218994},
				    {"lat":51.44870492501328,"lng":-2.5970757007598877},
				    {"lat":51.44862468848,"lng":-2.5971293449401855},
				    {"lat":51.44855782459455,"lng":-2.5970864295959473},
				    {"lat":51.44856451098751,"lng":-2.596893310546875},
				    {"lat":51.44856451098751,"lng":-2.5966036319732666},
				    {"lat":51.448517706216286,"lng":-2.5964319705963135},
				    {"lat":51.44845752858281,"lng":-2.596056461334228},
				    {"lat":51.448437469354005,"lng":-2.59552001953125},
				    {"lat":51.44842409652992,"lng":-2.5948548316955566},
				    {"lat":51.44842409652992,"lng":-2.5944793224334717},
				    {"lat":51.44841072370191,"lng":-2.5941896438598633},
				    {"lat":51.44835723235074,"lng":-2.5940930843353267}
				],
				"stop_name": "Bathurst Basin"
			},
			"bathurstbasinredcliffbacks": {
				"points": [
				    {"lat":51.448350545927426,"lng":-2.5941038131713863},
				    {"lat":51.448470901397094,"lng":-2.593975067138672},
				    {"lat":51.44855113820062,"lng":-2.5936532020568848},
				    {"lat":51.44869823864088,"lng":-2.593245506286621},
				    {"lat":51.44880522048159,"lng":-2.5928592681884766},
				    {"lat":51.44884533860724,"lng":-2.5925803184509277},
				    {"lat":51.4490325560608,"lng":-2.592344284057617},
				    {"lat":51.449179654950065,"lng":-2.5922369956970215},
				    {"lat":51.44931338080179,"lng":-2.5921511650085445},
				    {"lat":51.44964769371756,"lng":-2.592000961303711},
				    {"lat":51.44986165269902,"lng":-2.5919580459594727},
				    {"lat":51.45007561067782,"lng":-2.5918936729431152},
				    {"lat":51.45027619537229,"lng":-2.591850757598877},
				    {"lat":51.450503523627425,"lng":-2.591850757598877},
				    {"lat":51.45073085075064,"lng":-2.591850757598877},
				    {"lat":51.45095817674198,"lng":-2.591850757598877},
				    {"lat":51.45114538553198,"lng":-2.591915130615234},
				    {"lat":51.451305849598164,"lng":-2.5919365882873535},
				    {"lat":51.45150642888778,"lng":-2.5919580459594727},
				    {"lat":51.45166689168497,"lng":-2.592000961303711},
				    {"lat":51.4518942130156,"lng":-2.59202241897583},
				    {"lat":51.45209478972027,"lng":-2.5918936729431152},
				    {"lat":51.45225525044954,"lng":-2.5918078422546387},
				    {"lat":51.45222850703381,"lng":-2.5916790962219234}
				],
				"stop_name": "Redcliff Backs"
			},
			"redcliffbackswelshback": {
				"points": [
				    {"lat":51.45222850703381,"lng":-2.591603994369507},
				    {"lat":51.45232879476194,"lng":-2.591646909713745},
				    {"lat":51.4524023389559,"lng":-2.591754198074341},
				    {"lat":51.45248925466874,"lng":-2.591915130615234},
				    {"lat":51.452542741179016,"lng":-2.5920653343200684},
				    {"lat":51.45264971401155,"lng":-2.5922799110412598}
				],
				"stop_name": "Welsh Back"
			},
			"welshbackcastlepark": {
				"points": [
				    {"lat":51.45266308559799,"lng":-2.5922691822052},
				    {"lat":51.45266977138975,"lng":-2.592097520828247},
				    {"lat":51.452756686593425,"lng":-2.5919580459594727},
				    {"lat":51.45287034468705,"lng":-2.591850757598877},
				    {"lat":51.45305754563612,"lng":-2.5916898250579834},
				    {"lat":51.45329154574297,"lng":-2.591550350189209},
				    {"lat":51.45341188818804,"lng":-2.591346502304077},
				    {"lat":51.45364588647862,"lng":-2.591078281402588},
				    {"lat":51.4537595423584,"lng":-2.5909066200256348},
				    {"lat":51.45406708037911,"lng":-2.59053111076355},
				    {"lat":51.454307760863166,"lng":-2.5901341438293457},
				    {"lat":51.4544481572262,"lng":-2.589898109436035},
				    {"lat":51.45460192417597,"lng":-2.5895869731903076},
				    {"lat":51.45468883570109,"lng":-2.589350938796997},
				    {"lat":51.454749005121535,"lng":-2.589104175567627},
				    {"lat":51.4548091744627,"lng":-2.5889110565185547},
				    {"lat":51.454909456521705,"lng":-2.5888359546661377},
				    {"lat":51.4549829965583,"lng":-2.5887930393218994}
				],
				"stop_name": "Castle Park"
			},
			"castleparktemplebridge": {
				"points": [
				    {"lat":51.454996367461305,"lng":-2.5887930393218994},
				    {"lat":51.45491614198447,"lng":-2.588739395141601},
				    {"lat":51.454782432543105,"lng":-2.588653564453125},
				    {"lat":51.454682150205045,"lng":-2.588449716567993},
				    {"lat":51.45466209371099,"lng":-2.588149309158325},
				    {"lat":51.45452169800593,"lng":-2.587859630584717},
				    {"lat":51.45442810062935,"lng":-2.5876986980438232},
				    {"lat":51.454127250619074,"lng":-2.5873231887817383},
				    {"lat":51.453806341756085,"lng":-2.5868403911590576},
				    {"lat":51.45358571560418,"lng":-2.5863683223724365},
				    {"lat":51.4533116028392,"lng":-2.5857138633728027},
				    {"lat":51.453244745817564,"lng":-2.5853705406188965},
				    {"lat":51.45310434575343,"lng":-2.585177421569824},
				    {"lat":51.45295725950886,"lng":-2.584705352783203},
				    {"lat":51.45278342969975,"lng":-2.5842654705047607},
				    {"lat":51.45270320033381,"lng":-2.5840401649475098},
				    {"lat":51.45262965662454,"lng":-2.58402943611145}
				],
				"stop_name": "Temple Bridge"
			},
			"templebridgetemplemeads": {
				"points": [
				    {"lat":51.45262965662454,"lng":-2.58402943611145},
				    {"lat":51.4526162850283,"lng":-2.5839650630950928},
				    {"lat":51.452596227626614,"lng":-2.583814859390259},
				    {"lat":51.45255611279678,"lng":-2.583707571029663},
				    {"lat":51.452455825567995,"lng":-2.583396434783935},
				    {"lat":51.452241878743635,"lng":-2.582731246948242},
				    {"lat":51.45215496255984,"lng":-2.5824952125549316},
				    {"lat":51.452047988567976,"lng":-2.5822806358337402},
				    {"lat":51.45194101432549,"lng":-2.582066059112549},
				    {"lat":51.451807296169896,"lng":-2.5817549228668213},
				    {"lat":51.451733751017365,"lng":-2.58154034614563},
				    {"lat":51.451653519806754,"lng":-2.581357955932617},
				    {"lat":51.451633461982084,"lng":-2.5812184810638428},
				    {"lat":51.45162677603857,"lng":-2.581068277359009},
				    {"lat":51.45159334630627,"lng":-2.580864429473877},
				    {"lat":51.45157328845516,"lng":-2.580617666244507},
				    {"lat":51.45149305696255,"lng":-2.5804460048675537},
				    {"lat":51.451392767398524,"lng":-2.5803494453430176},
				    {"lat":51.45131922157823,"lng":-2.580392360687256},
				    {"lat":51.45131253558869,"lng":-2.5805211067199707},
				    {"lat":51.451305849598164,"lng":-2.580639123916626},
				    {"lat":51.4513593374949,"lng":-2.5807464122772217},
				    {"lat":51.451419511303804,"lng":-2.580842971801758},
				    {"lat":51.451439569222494,"lng":-2.5809288024902344},
				    {"lat":51.45145962713236,"lng":-2.5810253620147705},
				    {"lat":51.45147968503341,"lng":-2.581132650375366}
				],
				"stop_name": "Temple Meads"
			}
			"templemeadstemplebridge": {
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
			},
			"templebridgecastle": {
				"points": [
				    {"lat":51.45264302821686,"lng":-2.5840401649475098},
				    {"lat":51.45270320033381,"lng":-2.5840401649475098},
				    {"lat":51.45276337237147,"lng":-2.5840938091278076},
				    {"lat":51.45282354432982,"lng":-2.5842440128326416},
				    {"lat":51.45305754563612,"lng":-2.5848233699798584},
				    {"lat":51.453244745817564,"lng":-2.585359811782837},
				    {"lat":51.45342525955124,"lng":-2.5858104228973384},
				    {"lat":51.4535924012608,"lng":-2.5861430168151855},
				    {"lat":51.45377291361979,"lng":-2.586507797241211},
				    {"lat":51.454040338024775,"lng":-2.586958408355713},
				    {"lat":51.45426096197953,"lng":-2.587258815765381},
				    {"lat":51.45448158486804,"lng":-2.5876235961914062},
				    {"lat":51.45460860968379,"lng":-2.5878381729125977},
				    {"lat":51.454749005121535,"lng":-2.588052749633789},
				    {"lat":51.45482254541662,"lng":-2.5882351398468018},
				    {"lat":51.454909456521705,"lng":-2.5884175300598145},
				    {"lat":51.454962940196424,"lng":-2.588578462600708},
				    {"lat":51.454976311105305,"lng":-2.5886964797973633},
				    {"lat":51.45498968201027,"lng":-2.5887930393218994}
				],
				"stop_name": "Castle Park"
			},
			"castleparkwelshback": {
				"points": [
				    {"lat":51.45498968201027,"lng":-2.5888359546661377},
				    {"lat":51.454849287312726,"lng":-2.5896084308624268},
				    {"lat":51.454749005121535,"lng":-2.5898659229278564},
				    {"lat":51.4541005083,"lng":-2.59102463722229},
				    {"lat":51.45391331162775,"lng":-2.591196298599243},
				    {"lat":51.45366594341915,"lng":-2.591625452041626},
				    {"lat":51.453565658628406,"lng":-2.5918614864349365},
				    {"lat":51.45340520250496,"lng":-2.5919258594512935},
				    {"lat":51.453171202980684,"lng":-2.5919687747955322},
				    {"lat":51.45298400249767,"lng":-2.5920867919921875},
				    {"lat":51.45283691586535,"lng":-2.592172622680664},
				    {"lat":51.45274331503441,"lng":-2.5922369956970215},
				    {"lat":51.45264971401155,"lng":-2.5922584533691406}
				],
				"stop_name": "Welsh Back"
			},
			"welshbackredcliffbacks": {
				"points": [
				    {"lat":51.45260959922873,"lng":-2.5922691822052},
				    {"lat":51.45250931211743,"lng":-2.592220902442932},
				    {"lat":51.45237225270908,"lng":-2.592043876647949},
				    {"lat":51.452241878743635,"lng":-2.5917434692382812},
				    {"lat":51.45214827669268,"lng":-2.5916576385498042}
				],
				"stop_name": "Redcliff Backs"
			},
			"redcliffbacksbathurstbasin": {
				"points": [
				    {"lat":51.452241878743635,"lng":-2.5916361808776855},
				    {"lat":51.45220176360243,"lng":-2.5917863845825195},
				    {"lat":51.45210816146925,"lng":-2.5919580459594727},
				    {"lat":51.451947700223,"lng":-2.592043876647949},
				    {"lat":51.45180061025183,"lng":-2.5920867919921875},
				    {"lat":51.45168026355929,"lng":-2.5921082496643066},
				    {"lat":51.451519800809095,"lng":-2.5921082496643066},
				    {"lat":51.451399453376304,"lng":-2.5921082496643066},
				    {"lat":51.45117212958219,"lng":-2.5921082496643066},
				    {"lat":51.45090468837525,"lng":-2.5921082496643066},
				    {"lat":51.45058375685898,"lng":-2.5921082496643066},
				    {"lat":51.450209333905384,"lng":-2.5921082496643066},
				    {"lat":51.449915142287715,"lng":-2.5921511650085445},
				    {"lat":51.44966106618329,"lng":-2.592172622680664},
				    {"lat":51.449326753365405,"lng":-2.592344284057617},
				    {"lat":51.44916628234335,"lng":-2.5925588607788086},
				    {"lat":51.44904592870667,"lng":-2.5928163528442383},
				    {"lat":51.448952320103274,"lng":-2.593052387237549},
				    {"lat":51.44887208400473,"lng":-2.5933098793029785},
				    {"lat":51.44876510232071,"lng":-2.593417167663574},
				    {"lat":51.44867149314153,"lng":-2.593502998352051},
				    {"lat":51.44856451098751,"lng":-2.593610286712646},
				    {"lat":51.448470901397094,"lng":-2.593717575073242},
				    {"lat":51.44840403728644,"lng":-2.5938892364501953},
				    {"lat":51.44836391877306,"lng":-2.5940394401550293}
				],
				"stop_name": "Bathurst Basin"
			},
			"bathurstbasinprincestreet": {
				"points": [
					{"lat":51.448350545927426,"lng":-2.5941038131713863},
					{"lat":51.4484441557646,"lng":-2.594296932220459},
					{"lat":51.448537765409846,"lng":-2.594447135925293},
					{"lat":51.44864474762654,"lng":-2.59476900100708},
					{"lat":51.44869823864088,"lng":-2.5950908660888667},
					{"lat":51.44869823864088,"lng":-2.595348358154297},
					{"lat":51.44871161138467,"lng":-2.595670223236084},
					{"lat":51.44871161138467,"lng":-2.595992088317871},
					{"lat":51.44871161138467,"lng":-2.59627103805542},
					{"lat":51.44863137486316,"lng":-2.5965070724487305},
					{"lat":51.44856451098751,"lng":-2.596871852874756},
					{"lat":51.44861800209584,"lng":-2.5970005989074707},
					{"lat":51.44871161138467,"lng":-2.5969576835632324}
				],
				"stop_name": "Prince Street"
			},
			"princestreetcitycentre": {
				"points": [
				    {"lat":51.44873835686053,"lng":-2.5969791412353516},
				    {"lat":51.44869823864088,"lng":-2.5972366333007812},
				    {"lat":51.44869823864088,"lng":-2.597665786743164},
				    {"lat":51.44877847504491,"lng":-2.5979232788085938},
				    {"lat":51.44891220207163,"lng":-2.5980734825134277},
				    {"lat":51.44911279187733,"lng":-2.598116397857666},
				    {"lat":51.449340125925126,"lng":-2.598116397857666},
				    {"lat":51.449687811102955,"lng":-2.5980305671691895},
				    {"lat":51.45002212127711,"lng":-2.597944736480713},
				    {"lat":51.45045003472805,"lng":-2.5977730751037593},
				    {"lat":51.4508645720591,"lng":-2.597665786743164},
				    {"lat":51.45106515328741,"lng":-2.597644329071045},
				    {"lat":51.4512924776142,"lng":-2.597644329071045},
				    {"lat":51.45150642888778,"lng":-2.597665786743164},
				    {"lat":51.451733751017365,"lng":-2.5977301597595215},
				    {"lat":51.45188084120395,"lng":-2.597837448120117},
				    {"lat":51.45208141796737,"lng":-2.597837448120117},
				    {"lat":51.45220176360243,"lng":-2.597794532775879}
				],
				"stop_name": "Bristol City Centre"
			}
		}
	}
};


/* Temporary leg

*/

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
