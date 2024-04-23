const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     reps: {
          type: Number,
          required: false
     },
     weight: {
          type: Number,
          required: false
     },
     distance: {
          type: Number,
          required: false
     },
     time: {
          type: Number,
          required: false
     },
     date: {
          type: Date,
          default: Date.now,
          required: true
     }
}, {timestamps: true});

const workoutModel = mongoose.model('Workout', workoutSchema);


module.exports = {workoutSchema, workoutModel};