import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Home.css";



function Home() {
  const [data, setData] = useState([]);
  const [initializeData, setInitData] = useState([false]);

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
  const handlebuttonclick = () => {setInitData(!initializeData)};
  return (
    <div className="home">

      <div className="home-header">
        <p>
          Get on track with FitTrack
        </p>

      </div>

      <button onClick={handlebuttonclick}>
        click me
      </button>
    </div>

  )
}
export default Home