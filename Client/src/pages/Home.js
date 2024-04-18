import React, { useState, useEffect } from "react";
import axios from "axios";


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
    <div>Home


      <button onClick={handlebuttonclick}>
        click me
      </button>
    </div>

  )
}
export default Home