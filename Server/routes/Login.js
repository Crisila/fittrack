const express = require('express');
const router = express.Router();

router.get('/account', (req, res) => {
     res.send('this is the account page');
});

module.exports = router;