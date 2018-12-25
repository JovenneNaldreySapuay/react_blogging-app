const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

mongoose.set('useFindAndModify', false);

// schema here

dotenv.config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

// routes here

mongoose.connection.once('open', () => {
	console.log("Successfully connected to Mongodb...");
}).on('error', error => {
	console.log("Connection failed:", error);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
process.setMaxListeners(0);
