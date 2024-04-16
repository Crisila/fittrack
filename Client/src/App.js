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

function App() {
  return (
    <Router>
      <div className="App">
        <div className="logo">
          <Link to="/"><img src={logoImage} alt="Logo" className="logo-image" /></Link>
        </div>
        <Navbar />
        
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/workout" component={Workout} />
          <Route path="*" component={() => <h1>404 Not Found</h1>} />
        </Routes>

      


      </div>
    </Router>
  );
}

export default App;
