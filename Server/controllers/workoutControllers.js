const { workoutModel } = require('../models/workout');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
     const workouts = await workoutModel.find().sort({createdAt: -1})
     res.status(200).json(workouts);
}


// get a single workout
const getWorkout = async (req, res) => {
     const {id} = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({error: 'No workout found'})
     }

     const workout = await workoutModel.findById(id)
     if(!workout) {
          return res.status(404).json({error: 'No workout found'})
     }
     res.status(200).json(workout)

}


// create a new workout
const createWorkout = async (req, res) => {
     const { name, reps, weight, distance, time, date } = req.body;
     
     
     // add doc to db

     try {
          const workout = await workoutModel.create({ name, reps, weight, distance, time, date });

          res.status(201).json(workout);
     } catch (error) {
          res.status(400).json({ error: error.message });
     }
}



// delete a workout
const deleteWorkout = async (req, res) => {
     const { id } = req.params;

     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No workout found' });
     }

     const workout = await workoutModel.findOneAndDelete({ _id: id });

     if (!workout) {
          return res.status(404).json({ error: 'No workout found' });
     }

     res.status(200).json(workout);
}


// update a workout
const updateWorkout = async (req, res) => {
     const { id } = req.params;
     const { name, reps, weight, distance, time, date } = req.body;

     if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ error: 'No workout found' });
     }   

     const workout = await workoutModel.findOneAndUpdate(
          { _id: id },
          {
               ...req.body,
               _id: id
          }
     );

     if (!workout) {
          return res.status(404).json({ error: 'No workout found' });
     }
     res.status(200).json(workout);
}



module.exports = { 
     createWorkout,
     getWorkout,
     getWorkouts,
     deleteWorkout,
     updateWorkout
 }