import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";



function Home() {
  const [data, setData] = useState([]);
  const [initializeData, setInitData] = useState([false]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        console.log('data', res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [initializeData]);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };
  return (
    <div className="home">

      <div className="home-header">
        <p>
          Get on track with FitTrack
        </p>

      </div>

      <button onClick={handleLoginClick}>But first, Login</button>
      <button onClick={handleRegisterClick}>New here!</button>
    </div>

  )
}
export default Home