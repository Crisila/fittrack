const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     reps: {
          type: Number,
          required: true
     },
     weight: {
          type: Number,
          required: true
     },
     distance: {
          type: Number,
          required: true
     },
     time: {
          type: Number,
          required: true
     },
     date: {
          type: Date,
          default: Date.now
     }
}, {timestamps: true});

const workoutModel = mongoose.model('Workout', workoutSchema);


module.exports = {workoutSchema, workoutModel};