const express = require('express'); 
const router = express.Router(); 
const User = require('../models/user');
const bcrypt = require('bcryptjs');
// register route
router.post('/register', async(req, res, next) => {
	const username = req.body.username
	try {
		const user = await User.findOne({
			username: username
		})
		if(user !== null) {
			return jsonify(data={}, status={"code": 401, "message": 'A user with that username already exists!'}), 401
		}
	 else {
		const password = req.body.password 
		const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
		console.log(hashedPassword);

		const createdUser = await User.create({
			username: username, 
			password: hashedPassword
		})
		return jsonsify(data={}, status={'code': 201, "message": "User successfully created"}), 200
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
			return jsonify(data={}, status={"code": 401, "message": 'That username does not exists!'}), 401
		}
		else {
			const password = req.body.password
			if(bcrypt.compareSync(password, foundUser[0].password)){
				req.session.user = foundUser[0]._id;
				req.session.logged = true;	
				return jsonsify(data={}, status={'code': 201, "message": "User successfully logged in"}), 200
			}
			else {
				return jsonify(data={}, status={"code": 401, "message": 'Incorrect password!'}), 401
			}
		}
	} catch(err) {
		next(err)
	}
})

module.exports = router;