const express = require('express');
const env = require('dotenv').config();
const colors = require('colors');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const studentRoutes = require('./routes/student');

// express init
const app = express();

// form er data dora
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressLayout);





//port init
const port = process.env.port || 5000;

// static folder
app.use(express.static('public'));

//routes
app.use('/student', studentRoutes);


//Ejs init
app.set("view engine", "ejs");
app.set('layout', 'layouts/app');

//route init

// listen
app.listen(port, () => {
    console.log(`server is okay now ${port}`.bgBlue.black);
})