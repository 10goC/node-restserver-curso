require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use( require('./routes/usuario') );

mongoose.connect(process.env.URLDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => {
	console.log('Mongoose conectado');
}).catch(err => {
	console.log('Mongoose no conecta');
	throw err;
});

app.listen(process.env.PORT, () => {
	console.log('escuchando puerto', process.env.PORT);
});