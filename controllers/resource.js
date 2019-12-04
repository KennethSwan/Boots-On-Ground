const express = require('express'); 
const router = express.Router(); 
const Resource = require('../models/resource');
const Organization = require('../models/organization')

router.get('/', (req, res) => {
	Resource.find({}, (err, resource) => {
		res.json({ resource });
	})
});

router.get('/category', (req, res) => {
	Resource.findById(req.params.id, (err,category) => {
		if(err)
			return res.status(401).json({"message": 'Soemthing went wrong.'})
		res.json({ category })
	})
})

router.post('/new', async(req, res, next) => { 
	try {
		const newResource = {
			description: req.body.description,
			url: req.body.url,
			phoneNumber: req.body.phoneNumber,
			email: req.body.email,
			category: req.body.category 
		}
		console.log(newResource);
		const createResource = await Resource.create(newResource);
		const resourceArray = []
		resourceArray.push(createResource.id)
		console.log(resourceArray);
		console.log(createResource.id);
	const createdResource = newResource
	console.log(createdResource);
	resourceArray.push(createdResource.id)
	return res.status(200).json({'message': 'Resource sucessfully created!'})
	}
	catch (err) {
		return res.status(401).json({'message': 'Resource not created! Something went wrong.'})
	}
})

module.exports = router;