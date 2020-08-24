import React from 'react';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import finances from './finances.PNG';

    function Projects(){

    return(     
                <div>
                
                    <div>
                    <h2>SIMPLE CALCULATOR </h2>
                     <p>This was designed using HTML,CSS and Javascript. 
                        The calculator can solve simple scientific problems </p>
                     <img src={project1} alt='profile' width="50%" />
                     < a href= 'https://motunrayo01.github.io/calculator' className="badge badge-pill 
                    badge-primary"> calculator</a>
                    </div>
                    <div>
                     <h2>COUNTER </h2>
                     <p>A counter in which number increases when the ADD COUNT 
                        button is clicked on and number decreases when the LOWER COUNT is clicked on </p>
                     <img src={project2} alt='profile' width="50%" />
                    < a href= 'https://motunrayo01.github.io/counter' className="badge badge-pill 
                    badge-primary"> counter</a>
                    </div>
                    <div>
                     <h2>shopping catalague</h2>
                     <p> A shopping website for all types of colognes deigned with HTML and CSS. 
                         A youtube video is also embedde in the site. the sites has various link to 
                         different types of colognes
                      </p>
                     <img src={project3} alt='profile' width="50%" />
                  < a href= 'https://github.com/motunrayo01/shopping-catalague'
                       className="badge badge-pill 
                    badge-primary"> webpage</a> 
                    </div>
                    <div>
                    <h2>SIMPLE CALCULATOR </h2>
                     <p> A web page designed with react and bootstrap
                      </p>
                      <img src={finances} alt='profile' width="30%" />
                    
                        < a href= 'Finances-page.netlify.app' className="badge badge-pill 
                    badge-primary"> Finances Webpage</a>
                     </div>

                    < a href= 'https://github.com/motunrayo01' className="badge badge-pill 
                    badge-primary"> MORE</a>
                </div>
               
                
                 
        )
    }




export default Projects;