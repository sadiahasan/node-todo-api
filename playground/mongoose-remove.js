const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove 

Todo.findByIdAndRemove('5ba7e154eed3b3b4e67948df').then((todo) => {
	console.log(todo);
});