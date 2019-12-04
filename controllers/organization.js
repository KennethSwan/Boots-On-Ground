const express = require('express'); 
const router = express.Router(); 
const Organization = require('../models/organization')
const bcrypt = require('bcryptjs');


router.post('/register', async(req, res, next) => {
	const org_name = req.body.org_name
	console.log(org_name);
	try {
		const organization = await Organization.findOne({
			org_name: org_name
		})
		if(organization !== null) {
			return res.status(401).json({"message": 'That organization already exists!'})
		}
	 else {
		const password = await req.body.password 
		console.log(password);
		const hashedPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(10))
		console.log(hashedPassword);

		const createdOrg = await Organization.create({
			org_name: org_name, 
			password: hashedPassword
		})
		return res.status(201).json({"message": "Organization successfully created"})
	} 
	}catch(err){
		next(err)
	}
})

module.exports = router;