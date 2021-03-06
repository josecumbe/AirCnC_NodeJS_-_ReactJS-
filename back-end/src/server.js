const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const routes = require('./routes');


// Creating application
const app = express();

// Connecting to db
mongoose.connect('mongodb+srv://jose:jose@aircncproject.9pq9h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// User Cors 
app.use(cors());

// To allow app to understand json
app.use(express.json());

// Route to thumbmail file
app.use("/files", express.static(path.resolve(__dirname, '..', 'uploads'))); 

// Defining a routes
app.use(routes);




// Assigning a port for the app
app.listen(3333);
