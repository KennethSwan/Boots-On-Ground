const express = require('express'); 
const router = express.Router(); 
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

router.post('/register', async(req, res, next) => {
	const email = req.body.email;
	const username = req.body.username
	try {
		const user = await User.findOne({
			username: username
		})
		if(user !== null) {
			return res.status(401).json({"message": 'A user with that username already exists!'})
		}
	 else {
		const password = await req.body.password 
		const hashedPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(10))
		const createdUser = await User.create({
			email: email,
			username: username, 
			password: hashedPassword
		})
		return res.status(201).json({"message": "User successfully created"})
	} 
	}catch(err){
		next(err)
	}
})

// login route
router.post('/login', async(req, res, next) => {
	try {
		const foundUser = await User.find({
			username: req.body.username
		})
		if(foundUser.length === 0) {
			return res.status(401).json({"message": 'That username does not exists!'})
		}
		else {
			const password = req.body.password
			if(bcrypt.compareSync(password, foundUser[0].password)){
				req.session.user = foundUser[0]._id;
				req.session.logged = true;	
				return res.status(200).json({"message": "User successfully logged in"})
			}
			else {
				return res.status(401).json({"message": 'Incorrect password!'})
			}
		}
	} catch(err) {
		next(err)
	}
})

module.exports = router;