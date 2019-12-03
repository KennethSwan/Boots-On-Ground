const mongoose = require('mongoose'); 

const organizationSchema = new.mongoose.Schema({
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