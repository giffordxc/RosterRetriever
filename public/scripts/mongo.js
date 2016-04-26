// JavaScript Document
var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/test';

var MongoClient = mongodb.MongoClient;

MongoClient.connect(url, function(err, db) {
	if(err){
		console.log("bad penis", err);
	} else {
		console.log("good penis: ", url);
		
		db.close();
		
	}
}
);