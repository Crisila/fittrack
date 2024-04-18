const express = require('express');
const router = express.Router();


router.get('/contact', (req, res) => {
     res.send('This is contact');
});




module.exports = router;