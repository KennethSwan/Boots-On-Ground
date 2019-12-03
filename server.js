const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const PORT = 4000; 


// Config DB connection 
const Sequelize = require('sequelize');
const sequelize = new Sequelize('resource_db', 'ken', null, {
	host: 'localhost', 
	dialect: 'postgres', 
	operatorsAliases: false, 

	pool: {
		max: 5, 
		min: 0, 
		acquire: 30000, 
		idle: 10000
	},
});

// Connect to DB
sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been successfully established.');
	})
	.catch(err => {
		console.log('Test Connection: unable to connect to the database:', err);
		if(err.original.code=='3D000') {
			console.log('\n Did you forget paste the sql code in db/tables.sql?');
		}
	}); 

// Create Models
console.log("creating User model");
const User = sequelize.define('user', {
	username: Sequelize.STRING,
	email: Sequelize.STRING, 
	password: Sequelize.STRING
})

console.log("creating Admin model");
const Admin = sequelize.define('admin', {
	adminusername: Sequelize.STRING,
	password: Sequelize.STRING
})

console.log("creating Organization model");
const Organization = sequelize.define('organization', {
	organizationname: Sequelize.STRING, 
	password: Sequelize.STRING
}) 

console.log("creating Resource model");
const Resource = sequelize.define('resource', {
	description: Sequelize.STRING, 
	url: Sequelize.STRING,
	phonenumber: Sequelize.STRING,
	category: Sequelize.STRING,
	contactinfo: Sequelize.STRING
}, {isUrl: true})

Resource.belongsTo(Organization, {foreignKey: 'organizationId'})

// MIDDLEWARE 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
	res.send('Index')
});





app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
})