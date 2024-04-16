import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

     return (
          <header className="header">
               <nav className="nav">
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About Me</Link></li>
                         <li><Link to="/contact">Contact</Link></li>
                         <li><Link to="/account">Login/Register</Link></li>
                         {/* 
                         TO DO: after user login, redirect to profile 
                         
                         TO DO: Nav changes to have logout and Login/Register is gone
                         */}
                         
                    </ul>
               </nav>

          </header>
     );
};

export default Navbar;
