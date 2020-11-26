import React, {Component} from 'react';
import SOCIAL_PROFILES from './assets/socialProfiles';

class SocialProfile extends Component{
    render(){
        const {  Link, Image} = this.props.socialProfiles;
        return (
         //   <div> {this.props.project.Description}</div>
            <div style={{display:'inline-block', width:150, margin:10}}> 
               
                <a href={Link}><img src={Image} alt='profile' 
                style={{width: 60, height:50, display:'inline'}}/></a> <br/>
                
                
            </div>

        )
    }
}

class SocialProfiles extends Component{
    render(){
        return (
            <div>
                 <div className="container">
                    <div className="row project1">
                    <div className="col-sm-6 "> 
                <h4> Contact me! </h4>
                </div>
                <div> 
                    {SOCIAL_PROFILES.map (SOCIAL_PROFILE => {
                        return (
                            <SocialProfile key={SOCIAL_PROFILES.id} socialProfiles={SOCIAL_PROFILE}/>
                
                        );
                    }
                    )
                    }
                </div>
                
                </div>
                </div>
                 </div>
        )
    }
}

export default SocialProfiles;