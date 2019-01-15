import React from 'react'
import './About.css'

const About=()=> {
    return (
       <div className="container about-div mt-5">
           <div className="row">
               <div className="col-md-12 image-div text-center">
                   <img src="images/me.jpg" className="img-fluid my-image"/>
                   {/*<img src="images/me.jpg" className="img-fluid my-image2"/>*/}
               </div>
               <div className="col-12 header text-center mt-4">
                   <h2>HELLO.</h2>
               </div>
               <div className="col-md-12 text-center">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque natus pariatur sed tenetur. Aliquid corporis incidunt inventore laboriosam minima nostrum quae quas, quo rem reprehenderit sit sunt tenetur voluptates voluptatibus.lorem
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt dolore fugit inventore iste magnam magni mollitia, porro quam quisquam? Ad aliquam amet dolorem libero natus quas saepe tenetur voluptatum.
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi est facere hic nisi non omnis, pariatur provident quo vero? Aperiam reiciendis repudiandae tempora. Earum id itaque iure quas voluptatem.</p>
               </div>
           </div>
           <img src="images/coffee.png" className="coffee"/>
       </div>
    )
}
export default About;