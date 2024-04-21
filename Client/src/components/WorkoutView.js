
import React from "react";

const WorkoutView = ({ workout }) => {
     return (
          <div className="workout-view">
               <h4>{workout.name}</h4>
               <p><strong>Date: </strong>{workout.date}</p>
               <p><strong>Reps: </strong>{workout.reps}</p>
               <p><strong>Weight(lbs): </strong>{workout.weight}</p>
               <p><strong>Distance: </strong>{workout.distance}</p>
               <p><strong>Time: </strong>{workout.time}</p>
               <p><strong>Created: </strong>{workout.createdAt}</p>
          </div>
     );
};

export default WorkoutView;
