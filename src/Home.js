import React, {Component} from 'react';
import pic from './images/pic.png';


class Home extends Component {
    
         state={displayBio:false};
        toggleDisplayBio=() =>{
            this.setState({displayBio:!this.state.displayBio});
        }

            componentDidMount() {
                this.timerID = setInterval(
                  () => this.clock(),
                  1000
                );
              }
              componentWillUnmount() {
                clearInterval(this.timerID);
              }
              clock() {
                this.setState({
                  date: new Date()
                });
              }
    render (){
        return (
         
              <div>
                <div className="Front" style={{float:"left", width:"50%", textAlign:"center",  }}>
              
                <h2 className="clock"> {new Date().toLocaleTimeString()}.</h2>
                <h1> Okunniga Mary Omolola </h1>
                <pre> ------------------------------------</pre>
                
                <div className="image">
                <img src={pic} alt='profile'  />
                </div>
                </div>

                 <div className="bio" style={{float:"right", width:"50%", textAlign:"center" }}>
                 <h1> Hello!</h1>
                <pre> ____________________________________________________________</pre>
                <p> My name is Omolola. I'm a frontend developer. </p>
                <p> I'm always looking forward to working on meaningful projects. </p>
                <pre> ____________________________________________________________</pre>
          
                {
                    this.state.displayBio ?(
                          <div> 
                            <p> I live in Lagos, and i code everyday.</p>
                            <p> My favourite language is Javascript, and i think react.js is awesome. </p>
                            <p> Beside coding, i also love reading books and cooking </p>
                            <pre> ______________________________________________________________________</pre>
                            
                           
                            <button onMouseOver={this.toggleDisplayBio}> show less </button>
                        </div>    
                        ): (
                            <div> 
                            <button onMouseOver={this.toggleDisplayBio} > Read More </button> 
                            </div> 
                        )
                        
                      
                        
                }
                
                </div>
              </div>
        )
        
    }
    
}

export default Home;