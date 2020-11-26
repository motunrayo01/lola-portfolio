import React, {Component} from 'react';



class Portfolio extends Component {
   
    render (){
        return (
         
              <div>
                    <div className="container">
                    <div className="row project1">
                    <div className="col-sm-6 ">
                        <h4>My Portfolio</h4>
                    
                    <img src="https://res.cloudinary.com/morayo/image/upload/v1606345673/Frame_1_aqdepo.png" alt="images"/>
                   
                   
                   
                    </div>
                   
                    <div className="col-sm-6 description">
                   <h3>Delivery <span>Website</span></h3>
                   <p>An online delivery site that provide delivery of goods to any part in the country</p>
                   <a href= 'https://github.com/motunrayo01/kxpress'><img src="https://res.cloudinary.com/morayo/image/upload/v1606347885/GitHub_eht5fo.png" alt="gihub" className="git"/> </a>
                   <a href= 'https://kxpress.netlify.app'><img src="https://res.cloudinary.com/morayo/image/upload/v1606348378/System_Information_m6sbll.png" alt="gihub" className="git"/> </a><br/> <br/>
                    </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="row project1">
                    <div className="col-sm-6 ">
                        
                    
                    <img src="https://res.cloudinary.com/morayo/image/upload/v1606348574/Screen_Shot_2020-09-25_at_3.00_1_ffz5en.png" alt="images"/>
                   
                   
                   
                    </div>
                   
                    <div className="col-sm-6 description">
                   <h3>Online <span>Online Votinng site</span></h3>
                   <p>An online voting site</p>
                   <a href= 'https://github.com/motunrayo01/form'><img src="https://res.cloudinary.com/morayo/image/upload/v1606347885/GitHub_eht5fo.png" alt="gihub" className="git"/> </a>
                   <a href= 'https://voters-form.netlify.app/'><img src="https://res.cloudinary.com/morayo/image/upload/v1606348378/System_Information_m6sbll.png" alt="gihub" className="git"/> </a><br/> <br/>
                    </div>
                    <a href="https://github.com/motunrayo01"><button> More</button></a>
                    </div>
                    
                    
                    <div className="row design">
                    <div className="col-sm-4 ">
                        <h4>UI/UX Design</h4>
                        <img src="https://res.cloudinary.com/morayo/image/upload/v1603989698/MacBook_-_1_wqmemh.png" alt="gihub" className="git"/> 
                    </div>
                    <div className="col-sm-4 design1">
                        
                        <img src="https://res.cloudinary.com/morayo/image/upload/v1603914520/Untitled_cdxkde.png" alt="gihub" className="git"/> 
                    </div>
                    <div className="col-sm-4 design1">
                        
                        <img src="https://res.cloudinary.com/morayo/image/upload/v1606375174/migrant_intern_hn1uzk.png" alt="figma" className="git"/>
                       
                    </div>
                    <a href="https://www.figma.com/files/user/880028616950024729/Okunniga-Omolola"><button> More</button></a>
                    </div>
                    
                </div>
               
                </div>
             
        )
        
    }
    
}

export default Portfolio;