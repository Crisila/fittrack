const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {userModel} = require('../models/user');


router.post('/register', async (req, res) => {

     const { name, email, password } = req.body;

     // bcrypt.hash(password, 10)
     // then(hash => {
     //      userModel.create({
     //           name,
     //           email,
     //           password: hash
     //      })
     //      .catch(err => res.json(err.message));
     // })

     userModel.create(req.body)
          .then(user => res.json(user))
          .catch(err => res.json(err));
});

module.exports = router;
