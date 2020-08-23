import React from 'react';
import {Link} from 'react-router-dom';


function Nav(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <nav className="navbar-brand-lg"  > My Portfolio</nav>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse nav justify-content-center navbar-light " id="navbarNavDropdown">
    <ul className="navbar-nav  ">
      <li className="nav-item active">
        <Link to='/' className="nav-link" >Home </Link>
      </li>
      <li className="nav-item">
        <Link to='/projects' className="nav-link">Projects</Link>
      </li>
      <li className="nav-item">
        <Link to='/social-profiles' className="nav-link" >SocialProfiles</Link>
      </li>
      <li className="nav-item">
        <Link to='/skills' className="nav-link" >Skills</Link>
      </li>
    </ul>
  </div>
</nav>
    
        </div>
    )
}


export default Nav;