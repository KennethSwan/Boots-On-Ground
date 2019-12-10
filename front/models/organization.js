const mongoose = require('mongoose'); 

const organizationSchema = new mongoose.Schema({
	email: {
		type:String,
		required: false
	},
	org_name: {
		type: String, 
		required: true
	},
	password: {
		type: String, 
		required: true
	}
})

const Organization = mongoose.model('Organization', organizationSchema)
module.exports = Organization