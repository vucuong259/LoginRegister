const path = require('path');
const express = require('express');
const db = require('./api/db');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/routes');
const expressEjsExtend = require("express-ejs-extend");

db.connect();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.engine("ejs", expressEjsExtend);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './resources/views'));
 //importing route
routes(app);
app.listen(port);

console.log('RESTful API server started on: ' + port);