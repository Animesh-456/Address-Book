const express = require('express');
const app = express();
require("dotenv").config();

const bodyParser = require('body-parser');
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));



const homeRoute = require('./Routes/home');
const newContact = require('./Routes/newContact');
const search = require('./Routes/search');
const allcontacts = require('./Routes/allcontacts');
const login = require('./Routes/login');
//const newbulkContact = require('./Routes/newContact')

app.use(homeRoute)
app.use(newContact)
app.use(search)
app.use(allcontacts)
app.use(login)


// Start Server
app.listen(process.env.PORT || 3000, () => console.log("Server started at port 3000"));