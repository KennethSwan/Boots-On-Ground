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

module.exports = router;