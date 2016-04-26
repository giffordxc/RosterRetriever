// JavaScript Document
//var input = "qb packers";//global.lower;
	
	
	//console.log("eh?");
//val_parse(input);
//console.log(team + "from the script");
//console.log(global);

var pos = function pos_parse(input) {
	 
	 
	if(input.indexOf("qb") > -1 || input.indexOf("quarterback") > -1) {
		pos = "QB";
	} 
	else if(input.indexOf("hb") > -1 || input.indexOf("rb") > -1 || input.indexOf("half back") > -1 || input.indexOf("running back") > -1)
	{
		pos = "RB";
	}
	else if(input.indexOf("wr") > -1 || input.indexOf("wide receiver") > -1) {
		pos = "WR";
	}
	else if(input.indexOf("te") > -1 || input.indexOf("tight end") > -1) {
		pos = "TE";
	}
	else if(input.indexOf("lt") > -1 || input.indexOf("left tackle") > -1){
		pos = "LT";
	}
	else if(input.indexOf("lg") > -1 || input.indexOf("left guard") > -1){
		pos = "LG";
	}
	else if(input.indexOf("c ") > -1 || input.indexOf("center") > -1){
		pos = "C";
	}
	else if(input.indexOf("rg") > -1 || input.indexOf("right guard") > -1){
		pos = "RG";
	}
	else if(input.indexOf("rt") > -1 || input.indexOf("right tackle") > -1){
		pos = "RT";
	}
	else if(input.indexOf("de") > -1 || input.indexOf("defensive end") > -1){
		pos = "DE";
	}
	else if(input.indexOf("dt") > -1 || input.indexOf("defensive tackle") > -1){
		pos = "DT";
	}
	else if(input.indexOf("lb") > -1 || input.indexOf("linebacker") > -1){
		pos = "LB";
	}
	else if(input.indexOf("cb") > -1 || input.indexOf("cornerback") > -1){
		pos = "CB";
	}
	else if(input.indexOf("ss") > -1 || input.indexOf("strong saftey") > -1) {
		pos = "SS";
	}
	else if(input.indexOf("fs") > -1 || input.indexOf("free saftey") > -1) {
		pos = "FS";
	}
	else if(input.indexOf("s") > -1 || input.indexOf("safety") > -1) {
		pos = "S"
	} 
	else (pos = "null");
}
module.exports.pos_parse = pos;
	
//Team var setting	
var team = function team_parse(input){
	if(input.indexOf("patriots") > -1 || input.indexOf("new england") > -1) {
		team = "Patriots";
	}
	else if(input.indexOf("cardinals") > -1 || input.indexOf("arizona") > -1) {
		team = "Cardinals";
	}
	else if(input.indexOf("jets") > -1 || input.indexOf("new york") > -1) {
		 team = "Jets";
	}
	else if(input.indexOf("bills") > -1 || input.indexOf("buffalo") > -1) {
		team = "Bills";
	}
	else if(input.indexOf("dolphins") > -1 || input.indexOf("miami") > -1) {
		team = "Dolphins";
	}	
	else if(input.indexOf("redskins") > -1 || input.indexOf("washington") > -1) {
		team = "Redskins";
	}	
	else if(input.indexOf("eagles") > -1 || input.indexOf("philadelphia") > -1) {
		team = "Eagles";
	}	
	else if(input.indexOf("giants") > -1) {
		team = "Giants";
	}	
	else if(input.indexOf("cowboys") > -1 || input.indexOf("dallas") > -1) {
		team = "Cowboys";
	}	
	else if(input.indexOf("bengals") > -1 || input.indexOf("cincinnati") > -1) {
		team = "Bengals";
	}	
	else if(input.indexOf("steelers") > -1 || input.indexOf("pittsburg") > -1) {
		team = "Steelers";
	}	
	else if(input.indexOf("ravens") > -1 || input.indexOf("baltimore") > -1) {
		team = "Ravens";
	}	
	else if(input.indexOf("browns") > -1 || input.indexOf("cleveland") > -1) {
		team = "Browns";
	}
	else if(input.indexOf("vikings") > -1 || input.indexOf("minnesota") > -1) {
		team = "Vikings";
	}
	else if(input.indexOf("packers") > -1 || input.indexOf("green bay") > -1) {
		team = "Packers";
	}
	else if(input.indexOf("bears") > -1 || input.indexOf("chicago") > -1) {
		team = "Bears";
	}
	else if(input.indexOf("lions") > -1 || input.indexOf("detroit") > -1) {
		team = "Lions";
	}	
	else if(input.indexOf("texans") > -1 || input.indexOf("houston") > -1) {
		team = "Texans";
	}
	else if(input.indexOf("colts") > -1 || input.indexOf("indianapolis") > -1) {
		team = "Colts";
	}
	else if(input.indexOf("jaguars") > -1 || input.indexOf("jacksonville") > -1) {
		team = "Jaguars";
	}	
	else if(input.indexOf("titans") > -1 || input.indexOf("tenessee") > -1) {
		team = "Titans";
	}
	else if(input.indexOf("panthers") > -1 || input.indexOf("carolina") > -1) {
		team = "Panthers";
	}
	else if(input.indexOf("falcons") > -1 || input.indexOf("atlanta") > -1) {
		team = "Falcons";
	}
	else if(input.indexOf("saints") > -1 || input.indexOf("new orleans") > -1) {
		team = "Saints";
	}
	else if(input.indexOf("buccaneers") > -1 || input.indexOf("tampa bay") > -1) {
		team = "Buccaneers";
	}
	else if(input.indexOf("broncos") > -1 || input.indexOf("denver") > -1) {
		team = "Broncos";
	}
	else if(input.indexOf("chiefs") > -1 || input.indexOf("kansas city") > -1) {
		team = "Chiefs";
	}
	else if(input.indexOf("raiders") > -1 || input.indexOf("oakland") > -1) {
		team = "Raiders";
	}
	else if(input.indexOf("chargers") > -1 || input.indexOf("san diego") > -1) {
		team = "Chargers";
	}
	else if(input.indexOf("seahawks") > -1 || input.indexOf("seattle") > -1) {
		team = "Seahawks";
	}
	else if(input.indexOf("rams") > -1 || input.indexOf("los angeles") > -1) {
		team = "Rams";
	}
	else if(input.indexOf("49ers") > -1 || input.indexOf("san fransisco") > -1) {
		team = "SanFran";
	}
	else (team = "null");
}
module.exports.team_parse = team;
//console.log(pos);
//console.log(team);

