const express = require('express');
const router = express.Router();

const userModel = require('../models/user');


router.post('/register', (req, res) => {

     const { name, email, password } = req.body;
     
     userModel.create(req.body)
          .then(user => res.json(user))
          .catch(err => res.json(err));
});

module.exports = router;
