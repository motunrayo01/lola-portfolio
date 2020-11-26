import React from 'react';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import finances from './finances.PNG';


    function Projects(){

    return(     
                <div>
                
                    <div className="project">
                    <h2>SIMPLE CALCULATOR </h2>
                     
                     <img src={project1} alt='profile' width="40%" />  <br/> <br/>
                     < a href= 'https://motunrayo01.github.io/calculator' className="badge badge-pill 
                    badge-primary"> calculator</a>  <br/> <br/>
                    </div>
                    <div>
                     <h2>COUNTER </h2>
                     
                     <img src={project2} alt='profile' width="40%" />  <br/>  <br/>
                    < a href= 'https://motunrayo01.github.io/counter' className="badge badge-pill 
                    badge-primary"> counter</a>  <br/> <br/>
                    </div>
                    <div>
                     <h2>CATALOGUE WEB-PAGE</h2>
                    
                     <img src={project3} alt='profile' width="50%" />  <br/>  <br/>
                  < a href= 'https://github.com/motunrayo01/shopping-catalague'
                       className="badge badge-pill 
                    badge-primary"> webpage</a>  <br/> <br/>
                    </div>
                    <div>
                    <h2>FINANCES WEB-PAGE </h2>
                    
                      <img src={finances} alt='profile' width="50%" /> <br/>  <br/>

                    
                        < a href= 'https://Finances-page.netlify.app' className="badge badge-pill 
                    badge-primary"> Finances Webpage</a>  <br/> <br/>
                     </div>
                     </div>

                  
                   
                   
                 
        )
    }




export default Projects;