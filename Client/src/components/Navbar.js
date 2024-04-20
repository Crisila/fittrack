// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/Navbar.css';


// const Navbar = () => {

//      return (
//           <header className="header">
//                <nav className="nav">
//                     <ul>
//                          <li><Link to="/">Home</Link></li>
//                          <li><Link to="/about">About Me</Link></li>
//                          <li><Link to="/contact">Contact</Link></li>
//                          <li><Link to="/account">Login/Register</Link></li>
//                          {/* 
//                          TO DO: after user login, redirect to profile 
                         
//                          TO DO: Nav changes to have logout and Login/Register is gone
//                          */}
                         
//                     </ul>
//                </nav>

//           </header>
//      );
// };

// export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
     return (
    <>
               <Navbar sticky="top" bg="dark" data-bs-theme="dark" className="justify-content-center">
                    <Container>
                         <Navbar.Brand href="/">FitTrack</Navbar.Brand>
                         <Nav className="me-auto">
                              <Nav.Link href="/about">About</Nav.Link>
                              <Nav.Link href="/contact">Contact</Nav.Link>
                              <Nav.Link href="/login">Login/Register</Nav.Link>
                         </Nav>
                    </Container>
               </Navbar>

    </>
               );
}

               export default Navigation;