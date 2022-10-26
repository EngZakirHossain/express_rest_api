const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('./models/users.model');
const usersRouter = require('./routes/users.route');

const app = express();

//access data from various location
app.use(cors());

//for access body form data
app.use(bodyParser.urlencoded({extended:true}));

//for use json data
app.use(bodyParser.json());

//use user router
app.use("/users",usersRouter);

//home Route
app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/views/index.html');
})

//bad request route
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Route not found',
    })
});

//server error
app.use((err,req, res, next)=>{
    res.status(500).json({
        message: 'something Broke',
    })
});

module.exports = app;