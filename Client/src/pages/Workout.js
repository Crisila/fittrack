import React, { useState, useEffect } from "react";
import axios from "axios";

import WorkoutView from "../components/WorkoutView";
import WorkoutForm from '../components/WorkoutForm';

function Workout() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/workouts');
        if (response.status === 200) {
          setWorkouts(response.data);
        }
      } catch (error) {
        console.error('Error fetching workouts:', error.message);
      }
    };

    fetchWorkouts();
  }, []);


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="workout">
        {workouts.map((workout) => (
          <div key={workout._id}>
            <h2>Workout View</h2>
            <WorkoutView workout={workout} />
          </div>
        ))}
        <div className="page-workoutform">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
}
export default Workout;
