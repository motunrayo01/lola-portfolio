import React from 'react';
import {Link} from 'react-router-dom';


function Nav(){
    return(
        <div>
     
    <ul className="header ">
    
      
      <li className="badge">
        <Link to='/' className="badge badge-pill 
                    badge-primary">Home </Link>
      </li>
      <li className="badge">
        <Link to='/projects' className="badge badge-pill 
                    badge-primary">Projects</Link>
      </li>
      <li className="badge">
        <Link to='/social-profiles' className="badge badge-pill 
                    badge-primary">SocialProfiles</Link>
      </li>
      <li className="badge">
        <Link to='/skills' className="badge badge-pill 
                    badge-primary" >Skills</Link>
      </li>
    </ul>
 
    
        </div>
    )
}


export default Nav;