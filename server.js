const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const PORT = 8000;
const methodOverride = require('method-override'); 
const session = require('express-session')
const router = express.Router();
require('./db/db');

app.use(express.json());
app.use(session({
	secret: 'this is super secret', 
	resave: false,
	saveUninitialized: false
}));

// MIDDLEWARE 
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const adminController = require('./controllers/admin.js')
app.use('/admin', adminController)

const organizationController = require('./controllers/organization.js')
app.use('/organization', organizationController)

const resourceController = require('./controllers/resource.js')
app.use('/resource', resourceController)

const userController = require('./controllers/user.js')
app.use('/user', userController)

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
})