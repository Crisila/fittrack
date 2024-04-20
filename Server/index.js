require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');

const cors = require('cors');





// Initialize the app
const app = express();
app.use(express.json());
app.use(cors());


// // Database connectioN

mongoose
     .connect(
          process.env.MONGODB_URI
     )
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.log('Could not connect to MongoDB', err));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 
app.use('/', require('./routes/Home'));
app.use('/api', require('./routes/Login'));
app.use('/api', require('./routes/Register'));
app.use('/about', require('./routes/About'));
app.use('/contact', require('./routes/Contact'));
app.use('/api', require('./routes/Workout'));






app.get('/about', (req, res) => {
     res.send('this is the about page');
});

app.get('*', (req, res) => {
     res.status(404).send('<h1>Page not found</h1>');
});


// Listen for connections
app.listen(process.env.PORT || 4000, () => {
     console.log(`Server started on port ${process.env.PORT || 4000}`);
});
