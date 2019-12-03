const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const PORT = 5000;
const cors = require('cors');
const methodOverride = require('method-override'); 

require('./db/db');

// MIDDLEWARE 
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const adminController = require('./controllers/admin.js')
app.use('/admin', adminController)

const organizationController = require('./controllers/organization')
app.use('/organization', organizationController)

const resourceController = require('./controllers/resource')
app.use('/resource', resourceController)

const userController = require('./controllers/user.js')
app.use('/user', userController)

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
})