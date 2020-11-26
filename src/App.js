import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';

import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialProfiles from './SocialProfiles';

function App(){
    return(
            <div className='container-fluid'>
           
                
            <BrowserRouter>
                <Nav/>
                <Route>
                <Route path='/Home' exert component={Home}/>
                
                <Route path='/Skills'  component={Skills}/>
                <Route path='/Portfolio'  component={Portfolio}/>
                <Route path='/SocialProfiles'  component={SocialProfiles}/>
              
               
                </Route>
                
                
                <About/>
                <Skills/>    
                <Portfolio/>
                <SocialProfiles/>
                                
            </BrowserRouter>
           
            </div>
       
    )

}

export default App;