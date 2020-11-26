import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';





class nav extends Component {



  render() {
    return (
      <div>
      <Navbar  expand="lg">
      <img
          src="https://res.cloudinary.com/morayo/image/upload/v1606326092/Group_1_juzrvc.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
       
       
          <Nav className="mr-auto">
          <Link to="Home">Home</Link>
            <Link to="About">About</Link>
            <Link to="Skills">Skills</Link>
            <Link to="Portfolio">Portfolio</Link>
           
            <Link to="SocialProfiles">Contact</Link>
            
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
     
</div>
      
    );
  }
}

export default nav;
