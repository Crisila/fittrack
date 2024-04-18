import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Workout from './pages/Workout';
import Navbar from './components/Navbar';
import './App.css';
import logoImage from './assets/logo.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('hi')
  return (
    <Router>
      <div className="App">
        <div className="logo">
          <Link to="/"><img src={logoImage} alt="Logo" className="logo-image" /></Link>
        </div>
        <Navbar />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/workout" element={<Workout/>} />
          <Route path="*" element={() => <h1>404 Not Found</h1>} />
        </Routes>

      


      </div>
    </Router>
  );
}

export default App;
