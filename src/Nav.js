import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';






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
          <Nav.Link className="link" href="/Home">Home</Nav.Link>
            <Nav.Link className="link" href="/About">About</Nav.Link>
            <Nav.Link className="link" href="/Skills">Skills</Nav.Link>
            <Nav.Link className="link" href="/Portfolio">Portfolio</Nav.Link>
           
            <Nav.Link className="link" href="/SocialProfiles">Contact</Nav.Link>
            
           
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
     
</div>
      
    );
  }
}

export default nav;
