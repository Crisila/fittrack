const express = require('express');
const router = express.Router();


router.get ('/workout', (req, res) => {
     res.send({data: "here is the exercise log"});
})



module.exports = router