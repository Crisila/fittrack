const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { userModel } = require('../models/user');


router.post('/register', async (req, res) => {

     const { name, email, password } = req.body;
     // Check if user already exists
     const userExist = await userModel.findOne({ email });
     if (userExist) {
          return res.status(400).send({ error: 'User already exists' });
     }
     const hash = await bcrypt.hash(password, 10);

     const user = await userModel.create({
          name,
          email,
          password: hash
     });

     res.status(200).send({ message: 'User created successfully!' });

});

module.exports = router;
