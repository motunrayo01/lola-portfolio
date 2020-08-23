import React, {Component} from 'react';
import PROJECTS from './assets/projects';




class Project extends Component{
    render(){
        const { Title,Description, Link, Image} = this.props.project;
        return (
         //   <div> {this.props.project.Description}</div>
            <div className='projects'> 
               <p> {Title} </p>
                <img src={Image} alt='profile' style={{wdth: 350, height:120}}></img>
                <p> {Description} </p>
                <a href={Link}> {Link}</a>

            </div>

        )
    }
}

class Projects extends Component{
    render(){
        
        return (
                <div>
                    {PROJECTS.map (PROJECTS => {
                        return (
                            <Project key={PROJECTS.id} project={PROJECTS}/>
                        );
                    }
                    )
                    }
                    < a href= 'https://github.com/motunrayo01' className="badge badge-pill 
                    badge-primary"> MORE</a>
                </div>
                
                
                 
        )
    }
}



export default Projects;