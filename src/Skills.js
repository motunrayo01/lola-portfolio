import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class Skills extends Component{
  render(){
    return (
      <div> 
         
           <h2> SKILLS </h2>
              
             
                <p> Front End </p>
                <ul>
                <li> HTML  <ProgressBar variant="success" animated now={97}/> </li> <br/>
                  <li> CSS  <ProgressBar variant="success" animated now={97}/> </li> <br/>
                  <li> Css framework (bootstrap) </li> <ProgressBar variant="success" animated now={97}/> <br/>
                  <li> Css Javascript </li> <ProgressBar variant="success" animated now={75}/> <br/>
                  <li> Javascript framework (React)</li>  <ProgressBar variant="success"  animated now={50}/><br/>
                 
                  
                  </ul> 
                
                
            
      </div>
    )
  }
}


export default Skills;

