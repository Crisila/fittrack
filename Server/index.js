require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const pasth = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors');
// const { Schema } = mongoose;

// mongoose.connect(process.env.DB_URL);


// Initialize the app
const app = express();
app.use(cors());


// // Database connection
// require('./config/db');


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 
app.use('/', require('./routes/Home'));
app.use('/login', require('./routes/Login'));
// app.use('/register', require('./routes/Register'));
app.use('/about', require('./routes/About'));
app.use('/contact', require('./routes/Contact'));
app.use('/workout', require('./routes/Workout'));






app.get('/about', (req, res) => {
     res.send('this is the about page');
})

app.get ('*', (req, res) => {
     res.status(404).send('<h1>Page not found</h1>');
})


// Listen for connections
app.listen(process.env.PORT || 4000, () => {
     console.log(`Server started on port ${process.env.PORT || 4000}`);
});
