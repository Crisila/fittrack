import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useWorkoutsContext from "../context/useWorkoutsContext";

const WorkoutForm = () => {
     const {dispatch} = useWorkoutsContext();

     const [name, setName] = useState("");
     const [reps, setReps] = useState("");
     const [weight, setWeight] = useState("");
     const [distance, setDistance] = useState("");
     const [time, setTime] = useState("");
     const [date, setDate] = useState("");
     const [error, setError] = useState("");
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log('Form submitted');
          const workout = {
               name,
               reps,
               weight,
               distance,
               time,
               date
          };

          try {
               const response = await 
               axios
               .post('http://localhost:4000/workouts', workout);console.log('Response:', response);

               if (response.status === 201) {
                    // setName('');
                    // setReps('');
                    // setWeight('');
                    // setDistance('');
                    // setTime('');
                    // setDate('');
                    // setError(null);
                    console.log('new workout added', response.data);
                    dispatch({type: 'CREATE_WORKOUT', payload: response.data});
                    navigate("/workouts");
               } else {
                    console.error('Unexpected response status:', response.status);
               }
          } catch (error) {
               setError(error.message);
               console.error('Error:', error.message);
          }
     };


  
     return (
          <form className="form-create" onSubmit={handleSubmit}>
               <h3>
                    Add a New Workout
               </h3>

               <label>
                    Exercise:
               </label>
               <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
               />
               <label>
                    Reps:
               </label>
               <input
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
               />
               <label>
                    Weight(in lbs):
               </label>
               <input
                    type="number"
                    onChange={(e) => setWeight(e.target.value)}
                    value={weight}
               />
               <label>
                    Distance (in miles):
               </label>
               <input
                    type="number"
                    onChange={(e) => setDistance(e.target.value)}
                    value={distance}
               />
               <label>
                    Time (in mins)
               </label>
               <input
                    type="number"
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
               />
               <label>
                    Date:
               </label>
               <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
               />

               <button type="submit">Create Workout</button>
               {error && <div className="error">{error}</div>}


          </form>
     );
};
export default WorkoutForm;