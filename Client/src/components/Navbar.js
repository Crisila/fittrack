import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
          <header className="header">
               <div className="logo">
                    <Link to="/">Fitness Tracker</Link>
               </div>
               <nav className="nav">
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/workouts">Workouts</Link></li>
                         <li><Link to="/nutrition">Nutrition</Link></li>
                         <li><Link to="/progress">Progress</Link></li>
                         <li><Link to="/settings">Settings</Link></li>
                    </ul>
               </nav>
               <div className="user-profile">
                    <img src="profile-picture.jpg" alt="Profile" />
                    <div className="dropdown-menu">
                         <ul>
                              <li><Link to="/profile">My Profile</Link></li>
                              <li><Link to="/settings">Account Settings</Link></li>
                              <li><Link to="/logout">Log Out</Link></li>
                         </ul>
                    </div>
               </div>
          </header>
     );
};

export default Navbar;
