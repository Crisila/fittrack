const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const { userModel } = require('../models/user');


router.post('/login', async (req, res) => {

     try {

          const { error } = validate(req.body);
          if (error)
               return res.status(400).send(error.details[0].message);

          const { email, password } = req.body;
          const user = await userModel.findOne({ email });
          if (!user) {
               return res.status(400).send({ error: 'InvalidCredentials', message: 'No user found' });
          }

          // Compare password
          const validPassword = await bcrypt.compare(password, user.password);
          if (!validPassword)
          return res.status(400).send('Invalid email or password');
     
     
     // Generate JWT token
     const token = user.generateAuthToken();
     res.status(200).send({ data: token, message: 'Logged in successfully!' });
} catch (error) {
          console.log(error)
          res.status(500).send({ message: "Internal Server Error" });
     }
});

const validate = (data) => {
     const schema = Joi.object({
          email: Joi.string().email().required().label("Email"),
          password: Joi.string().required().label("Password"),
     });
     return schema.validate(data);
};

module.exports = router;