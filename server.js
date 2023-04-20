const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

let users = require('./user.json');
let server = express();
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(cors());

server.get('/user', function(req, res,next){
	return res.status(200).json({
		code: 1,
		message: 'OK',
		data: users
	})
});

server.put('/user', function(req, res, next){
	let user = {}
	user.id = users.length +1;
	user.name = req.body.name;
	user.age = Number(req.body.age);
	user.movie = req.body.movie;
	user.push(user);
	console.log('Users : ',user.name,'Created!!!');
	return res.status(201).json({
		code:1,
		message:'OK',
		data: users
	});
});

server.post('/user', function(req, res, next){
	let user = {}
	user.id = users.length +1;
	user.name = req.body.name;
	user.age = Number(req.body.age);
	user.movie = req.body.movie;
	users.push(user);
	console.log('Users : ',user.name, 'Created!!!');
	return res.status(201).json({
		code: 1,
		message: 'OK',
		data: users
	});
});

server.delete('/user/:id', function(req, res, next){
	const removeId = req.params.id;
	const position = users.findIndex((val) => {
		return val.id == removeId;
	});
	users.splice(position, 1);
	return res.status(200).json({
		code: 1,
		message: 'OK',
		data: users
	})
});

server.listen(3000, function(){
	console.log('Server Listen at http://localhost:3000');
	console.log('User:', users)
});
