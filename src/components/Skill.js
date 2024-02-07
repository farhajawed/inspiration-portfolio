import React from 'react'
import './Skill.css'

const Skill=()=> {
    return (
       <div className="container skill-div">
           <div className="row text-center">
               <div className="col-md-12 header mb-3">
                   <h4>SKILLS.</h4>
               </div>
               <div className="col-md-3">
                   <div className="tech">
                       <div className="circle text-center">
                           <img src="images/front.png" className="bg-img" alt={"front-end"}/>
                       </div>
                   </div>
                   <div className="name-div mt-3">
                       <div className="skill-grp-name">Front End</div>
                       HTML<br/>
                       CSS<br/>
                       Bootstrap<br/>
                       React.js<br/>
                       jQuery<br/>
                       d3.js
                   </div>
               </div>
               <div className="col-md-3 mt-2 mt-md-0">
                   <div className="tech">
                       <div className="circle text-center">
                           <img src="images/backend.png" className="bg-img" alt={"back-end"}/>
                       </div>
                   </div>
                   <div className="name-div mt-3">
                       <div className="skill-grp-name">Back End</div>
                       Ruby on Rails<br/>
                       Node.js<br/>
                       Spring Boot<br/>
                       MySQL<br/>
                       MongoDB
                      
                   </div>
               </div>
               <div className="col-md-3 mt-3 mt-md-0">
                   <div className="tech">
                       <div className="circle text-center">
                           <img src="images/coding.png" className="bg-img" alt={"programming"}/>
                       </div>
                   </div>
                   <div className="name-div mt-3">
                       <div className="skill-grp-name">Languages</div>
                       Java<br/>
                       JavaScript<br/>
                       Ruby
                       <div className="d-md-block d-none">
                           <br/><br/><br/><br/>
                       </div>
                   </div>
               </div>
               <div className="col-md-3 mt-3 mt-md-0">
                   <div className="tech">
                       <div className="circle text-center">
                           <img src="images/ui.png" className="bg-img" alt={"ux"}/>
                       </div>
                   </div>
                   <div className="name-div mt-3">
                       <div className="skill-grp-name">User Experience</div>
                       Wireframing<br/>
                       Paper Prototyping<br/>
                       Usability and User Research<br/>
                       User Interface Design
                       <div className="d-md-block d-none">
                          <br/><br/>
                       </div>
                   </div>
               </div>
           </div>
           {/*<img src="images/coffee.png" className="coffee"/>*/}
       </div>
    )
}
export default Skill;