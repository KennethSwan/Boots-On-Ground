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
	Resource.findById(req.params.id, (err,resource) => {
		if(err)
			return res.status(401).json({"message": 'Soemthing went wrong.'})
		res.json({ resource })
	})
})

module.exports = router;