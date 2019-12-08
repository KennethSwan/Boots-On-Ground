const express = require('express'); 
const router = express.Router(); 
const Organization = require('../models/organization')
const bcrypt = require('bcryptjs');

// register/create org route 
router.post('/register', async(req, res, next) => {
	const org_name = req.body.org_name
	try {
		const organization = await Organization.findOne({
			org_name: org_name
		})
		if(organization !== null) {
			return res.status(401).json({"message": 'That organization already exists!'})
		}
	 else {
		const password = await req.body.password 
		const hashedPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(10))
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

// organization login route
router.post('/login', async(req, res, next) => {
	try {
		const foundOrg = await Organization.find({
			org_name: req.body.org_name
		})
		if(foundOrg.length === 0) {
			return res.status(401).json({"message": 'That organization does not exists!'})
		}
		else {
			const password = req.body.password
			if(bcrypt.compareSync(password, foundOrg[0].password)){
				req.session.user = foundOrg[0]._id;
				req.session.logged = true;	
				return res.status(200).json({"message": "Organization successfully logged in"})
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