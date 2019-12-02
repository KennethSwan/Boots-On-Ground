const express = require('express');
const app = express(); 
const bodyParser = require('body-parser')
const PORT = 4000; 


app.get('/', (req, res) => {
	res.send('Index')
});

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
	dialect: 'sqlite', 
	storage: "./database.sqlite3",
	pool: {
		max: 5, 
		min: 0, 
		acquire: 30000, 
		idle: 10000
	},
});

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




app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
})