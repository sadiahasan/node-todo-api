const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b948be193678115dd1096c6';

User.findById(id).then((user) => {
	if(!user){
 	 return console.log('User not found');
	}
	 console.log('User found', JSON.stringify(user, undefined,2));
}).catch((e) => console.log(e));

// var id = '5ba7cb413dd4f15f1c16ff9b1';

// if (!ObjectId.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({ //GOOD FOR FINDING BY ANYTHING ELSE
// 	_id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => { //GOOD FOR FINDING BY ID
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));




