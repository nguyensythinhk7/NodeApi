const express = require('express');
const bodyParser = require('body-parser');
const configDatabase = require('./config/database.config');
const mongoose = require('mongoose');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Enable CORS for resource on your server
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //allow all domain access
    // res.header("Access-Control-Allow-Origin", "domain.com"); //domain allow access
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
//use mongoose connect and working with database mongodb
mongoose.connect(configDatabase.url, { useNewUrlParser: true }).then(() => {
    console.log("Connect to database succes !!!");
}).catch((err) => {
    console.log("connect to database failed error : ", err);
    process.exit();
})

require('./routers/index.js')(app);

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Api NoteJs application" });
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});