require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');





// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('./build'));


app.get('/', (req, res) => {
     const options = {
          root: path.join(__dirname, './build'),
          dotfiles: 'deny',
          headers: {
               'x-timestamp': Date.now(),
               'x-sent': true
          }
     }
     res.sendFile('index.html', options)
})


// // Database connectioN

mongoose
     .connect(
          process.env.MONGODB_URI
     )
     .then(() => console.log('Connected to MongoDB'))
     .catch(err => console.log('Could not connect to MongoDB', err));




// Routes 
app.use('/', require('./routes/Home'));
app.use('/login', require('./routes/Login'));
app.use('/register', require('./routes/Register'));
app.use('/about', require('./routes/About'));
app.use('/contact', require('./routes/Contact'));
app.use('/workouts', require('./routes/Workout'));




// Listen for connections
app.listen(process.env.PORT || 4000, () => {
     console.log(`Server started on port ${process.env.PORT || 4000}`);
});
