import React, { useState, useEffect } from "react";
import axios from "axios";

import WorkoutView from "../components/WorkoutView";
import WorkoutForm from '../components/WorkoutForm';

import '../Styles/Workouts.css';



function Workout() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/workouts');
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
    <div className="workouts-page">

      <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} />

      <div>
        {workouts.map((workout) => (
          <div key={workout._id}>
  
            <WorkoutView workout={workout} />
          </div>
          
        ))}


      </div>
    </div>
  );
}
export default Workout;
