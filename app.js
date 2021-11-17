'use strict';
// Create express
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
var port = process.env.PORT || 5000;

// // Call router
// const courseRouter = require('./routes/course');
const indexRouter = require('./routes/index');

// Add middleware
const logger = (req, res ,next) =>{
  console.log(`Localhost:host 5000`);
  next();
}

//************************ */
//      CONFIG
//************************ */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Use router and set /item in ifront of URL
app.use(logger);

// Use style fils
app.use(express.static(path.join(__dirname, 'public')));

// view engine to read HTML codes
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Use methodOverrode for PUT and DELETE method
app.use(methodOverride('_method'));

// Use router 
app.use('/', indexRouter);



app.listen(port, () => console.log(`Server kör via port ${post}`));
