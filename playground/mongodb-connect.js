//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');


	// db.collection('Users').insertOne({
	// 	name: 'Zaira',
	// 	age: 22,
	// 	location: 'New York'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert to users', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// });
	db.close();
});