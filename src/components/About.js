import React from 'react'
import './About.css'

const About=()=> {
    return (
       <div className="container about-div mt-5" id="about">
           <div className="row">
               <div className="col-md-12 image-div text-center">
                   <img src="images/me.jpg" className="img-fluid my-image"/>
                   {/*<img src="images/me.jpg" className="img-fluid my-image2"/>*/}
               </div>
               <div className="col-12 header text-center mt-4">
                   <h2>HELLO.</h2>
               </div>
               <div className="col-md-12 text-center">
                 <p>
                  I am a full-stack web developer and designer. I am passionate about designing and developing
                     user-friendly, responsive and interactive websites. I have graduated with a Masters degree in
                     Computer Science from Northeastern University in December 2018 with specialization in
                     Human-Computer Interaction. Towards the goal of improving user experience,
                     I am constantly improving my skills
                     and learing new tools pertinent to web development. I have designed and
                     developed 10+ dynamic websites from scratch on e-commerce, web-based games,
                     online diary, and data visualization with a focus on user experience.
                     I am seeking internship opportunities in web development,
                     human-computer interaction, and user experience design sectors.
                     You can view my past projects by clicking on my <a href="" className="custom-link">Portfolio</a> page.
                     Continue to scroll down to know about my education, skills, and experience.
                 </p>
                 <p>
                     FUN FACT: I am passionate about origami. I enjoy cutting and folding papers to design new patterns.
                 </p>
               </div>
               <div className="col-md-12 text-center">
                   <img src="images/coffee.png" className="coffee"/>
               </div>
           </div>

       </div>
    )
}
export default About;