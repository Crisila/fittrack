require('dotenv').config()
const express = require('express');

// Initialize the app
const app = express();


// homepage route
app.get('/', (req, res) => {
     res.send('Hello World!');
})

app.get('/account', (req, res) => {
     res.send('this is the account page');
})

app.get ('*', (req, res) => {
     res.status(404).send('<h1>Page not found</h1>');
})


// Listen for connections
app.listen(process.env.PORT || 3000, () => {
     console.log(`Server started on port ${process.env.PORT || 3000}`);
});
