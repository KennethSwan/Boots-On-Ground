const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const PORT = 8000;
const methodOverride = require('method-override'); 
const session = require('express-session')
const router = express.Router();
const cors = require('cors');
const userController = require('./controllers/user.js');
const resourceController = require('./controllers/resource.js');
const organizationController = require('./controllers/organization.js');
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
app.use(cors({origin: ['http://localhost:3000'], credentials: true}))

app.use('/organization', organizationController)
app.use('/resource', resourceController)

app.use('/user', userController)

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
})