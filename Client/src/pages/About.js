import React from "react";
import "../Styles/About.css";
import crisila from '../assets/crisila.jpg';
import aboutImg from '../assets/aboutme-image.jpg';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <img src={aboutImg} alt="about-me" className="aboutme-image" />

      </div >


    <div className="about-image">
      <img src={crisila} alt="developer-crisila" className="crisila" />
    </div>
    
    
      <div className="about-text">
        
        Hi, My name is Crisila. I made this web application to help me learn how to build a fullstack web application. The app uses React, Node.js, Express, and MongoDB. I hope to continue to improve my skills and learn more about coding. I would love to work as a developer in the future. 
      </div>
  
      
    </div>
  )
}
export default About