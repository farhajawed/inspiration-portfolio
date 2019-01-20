import React from 'react'
import './Education.css'
import {Treemap} from "d3plus-react";

const methods = {
    groupBy: "id",
    data: [
        {id: "Military Institute of Science & Technology", color:"#B79BDC", value: 3,degree:"BS",subject:"Computer Science & Engineering",location:"Dhaka,Bangladesh",from:"January 2011",to:"January 2015"},
        {id: "Northeastern University", color:"#69E781", value: 2,degree:"MS",subject:"Computer Science",location:"Boston,MA",from:"January 2017",to:"December 2018"},
        {id: "UCLA Extension", color:"white", value: 1,degree:"Web Development Certification",subject:"MERN Stack Web Development",location:"Los Angeles,CA",from:"May 2018",to:"August 2018"},
        {id: "California State University at Northridge", color:"gainsboro", value: 2,degree:"MS",subject:"Engineering Management",location:"Northridge,CA",from:"January 2019",to:"Present"}
    ],
    size: d => d.value,
    label:false,
    shapeConfig:({
        labelConfig: {
            fontFamily: "serif",
            fontMax: 25,
            color:"white"
        },
        label: d => {
            return [d.id];
        }
        //,
        // fill: function(d) {
        //     return d.color;
        // }
    }),
    tooltipConfig:({
        body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Degree:</td><td class='data'>" + d.degree + "</td></tr>";
            table += "<tr><td class='title'>Subject:</td><td class='data'>" + d.subject + "</td></tr>";
            table += "<tr><td class='title'>Location:</td><td class='data'>" + d.location + "</td></tr>";
            table += "<tr><td class='title'>From:</td><td class='data'>" + d.from + "</td></tr>";
            table += "<tr><td class='title'>To:</td><td class='data'>" + d.to + "</td></tr>";
            table += "</table>";
            return table;
        },
        title: function(d) {
            var txt = d.id;
            return "<span>"+txt+"</span>";
        }
    })
};

const Education=()=> {
    return (
       <div className="container education-div">
               <div className="row">
                   <div className="col-12 header text-center mb-3">
                       <h4>EDUCATION.</h4>
                   </div>
                   <div className="col-md-7 col-12 treemap">
                        <Treemap config={methods} />
                   </div>
                   <div className="col-md-5 col-12 text-center school-div">
                       <div className="school">
                           <p><i className="fa fa-graduation-cap"></i>
                               {" "}California State University, Northridge, CA
                           </p>
                           <p>MS in Engineering Management, Ongoing</p>
                       </div>
                       <div className="school">
                           <p><i className="fa fa-graduation-cap"></i>
                               Northeastern University, Boston, MA</p>
                           <p>MS in Computer Science, 2018</p>
                       </div>
                       <div className="school">
                           <p><i className="fa fa-graduation-cap"></i>
                               Military Institute of Science & Technology, Dhaka, Bangladesh
                           </p>
                           <p>BS in Computer Science & Engineering, 2015</p>
                       </div>
               </div>
           </div>
           {/*<img src="images/coffee.png" className="coffee"/>*/}
       </div>
    )
}
export default Education;