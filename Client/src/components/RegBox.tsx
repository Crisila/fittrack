import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const RegBox = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const Navigate = useNavigate();

     const handleSubmit = (e) => {
          e.preventDefault();
          axios
               .post('http://localhost:4000/register', {
                    name,
                    email,
                    password
               })
               .then((res) => {
                    console.log(res.data);
                    Navigate("/login");
               })
               .catch((err) => {
                    console.error('Error:', err.message);
               });
     };


     return (
          <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
               <div className="bg-white p3 rounded w-25">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                         <div className="mb-3">
                              <label htmlFor="email">
                                   <strong>
                                        Name
                                   </strong>
                              </label>
                              <input
                                   type="text"
                                   className="form-control rounded-0"
                                   id="name"
                                   placeholder="Enter your name"
                                   autoComplete="off"
                                   onChange={(e) => setName(e.target.value)} />
                         </div>

                         <div className="mb-3">
                              <label htmlFor="email">
                                   <strong>
                                        Email
                                   </strong>
                              </label>
                              <input
                                   type="email"
                                   className="form-control rounded-0"
                                   id="email"
                                   placeholder="Enter your email"
                                   autoComplete="off"
                                   onChange={(e) => setEmail(e.target.value)}
                              />
                         </div>

                         <div className="mb-3">
                              <label htmlFor="email">
                                   <strong>
                                        Password
                                   </strong>
                              </label>
                              <input
                                   type="password"
                                   className="form-control rounded-0"
                                   id="password"
                                   placeholder="Enter your password"
                                   autoComplete="off"
                                   onChange={(e) => setPassword(e.target.value)}
                              />
                         </div>
                         <button type="submit" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                              Register
                         </button>
                    </form>
                    <div className="text-center mt-3">
                         <p>Already have an account? </p>
                         <Link
                              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                              to="/login">
                              Login
                         </Link>



                    </div>


               </div>

          </div>
     );
};

export default RegBox