const mongoose = require('mongoose'); 

const resourceSchema = new mongoose.Schema({
	description: String, 
	url: String, 
	phoneNumber: String,
	email: String,
	category: String,
	organization: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Organization'
	},
})


const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource