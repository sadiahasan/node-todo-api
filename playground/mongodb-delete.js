//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

//deleteMany
	// db.collection('Users').deleteMany({name:'Zaira'}).then((result) => {
	// 	console.log(result);
	// });

//deleteOne
	// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

//findOneAndDelete

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5b91f01e32a70883b31c4000")
	}).then((result) => {
		console.log(JSON.stringify(result,undefined,2));
	});


//db.close();

});