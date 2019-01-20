import React from "react";
import "./Portfolio.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import PortfolioIntro from "./PortfolioIntro";
import Project from "./Project";
import PortfolioHeader from "./PortfolioHeader";
import projects from "./Projects";

let i =0;
class Portfolio extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
   assignColor=()=>{
       if(i === 0){i = 1;}
       else i = 0;
       return i;
   }

   render(){
    return(
        <div className="portfolio-div">
            <Navbar current="Portfolio"/>
            <PortfolioHeader/>
            <PortfolioIntro/>
            {projects.map((project, index) => (
                <Project project={project} key={index} color={this.assignColor()}/>
            ))}
            <Footer/>
        </div>
)}}
export default Portfolio