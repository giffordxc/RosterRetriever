var databaseURL = "test";
var collections = ["nfl"];
var db = require("mongojs")(databaseURL, collections);

function dbQuery(pos, team) {
	
db.nfl.find({Position: pos, Team: team}, function(err, nfl) {
	if(err || !nfl) console.log("none found");
	else nfl.forEach( function(player){console.log(player);});
});
}