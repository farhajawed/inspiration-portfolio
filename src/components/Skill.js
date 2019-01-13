import React from 'react'
import './Skill.css'

const Skill=()=> {
    return (
       <div className="container skill-div">
           <div className="row">
               <div className="col-md-12 text-center header mb-3">
                   <h4>SKILLS.</h4>
               </div>
               <div className="col-md-12">
                   <div className="row skill-square text-center">
                       <div className="col-md-6 front-end">
                           <div className="skill-group"><i className="fa fa-laptop"></i> Front end</div>
                           <div className="skill-name-div">HTML5<br/>
                               CSS3<br/>
                               SASS<br/>
                               Bootstrap<br/>
                               React<br/>
                               jQuery<br/>
                               d3.js
                           </div>
                       </div>
                       <div className="col-md-6 back-end">
                           <div className="skill-group"><i className="fa fa-database"></i> Back end</div>
                           <div className="skill-name-div">
                               Node.js<br/>
                               Express<br/>
                               Spring Boot<br/>
                               MySQL<br/>
                               JPA<br/>
                               MongoDB<br/>
                           </div>
                       </div>
                       <div className="col-md-6 user-exp">
                           <div className="skill-group"><i className="fa fa-map"></i> User Experience</div>
                           <div className="skill-name-div">Wireframing<br/>
                               Paper Prototyping<br/>
                               Usability and User Research<br/>
                               User Interface Design
                           </div>
                       </div>
                       <div className="col-md-6 language">
                           <div className="skill-group"><i className="fa fa-code"></i> Programming Languages</div>
                           <div className="skill-name-div">Java<br/>
                               JavaScript<br/>
                               Python
                           </div>
                       </div>
                   </div>
               </div>

           </div>
           {/*<img src="images/coffee.png" className="coffee"/>*/}
       </div>
    )
}
export default Skill;