import React, { useState, useEffect } from "react";
import axios from "axios";

import WorkoutView from "../components/WorkoutView";

function Workout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/workouts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="workout">
        {data.map((workout) => (
          <div key={workout._id}>
            <h2>Workout View</h2>
            <WorkoutView workout={workout} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Workout;