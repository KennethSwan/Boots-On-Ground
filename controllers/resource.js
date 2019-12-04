const express = require('express'); 
const router = express.Router(); 
const Resource = require('../models/resource');
const Organization = require('../models/organization')

router.get('/', (req, res) => {
	Resource.find({}, (err, resource) => {
		res.json({ resource });
	})
});

module.exports = router;