// PAGE FOR USER ACCOUNT/PROFILE
const express = require('express');
const router = express.Router();
const { User, validate } = require('../models/user');
const bycrypt = require('bcrypt');

router.post('/', async (req, res) => {
     try {
          const { error } = validate(req.body);
          if (error)
               return res.status(400).send(error.details[0].message);
          const user = await User.findOne({ email: req.body.email });

          if (user)
               return res.status(409).send('User already registered.');
          user = new User(req.body);
          await user.save();
          res.send(user);

          const salt = await bycrypt.genSalt(Number(process.env.SALT));
          //    console.log(salt);
          const hashPassword = await bycrypt.hash(re.body.password, salt);

          await new User({
               ...req.body, password: hashPassword
          }).save();

          res.status(201).send({
               message: 'Registered successfully'
          });

     } catch (error) {
          res.status(500).send({message: "Internal Server Error"});

     }
});

module.exports = router;