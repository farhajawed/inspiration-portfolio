import React from "react";
import "./Portfolio.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import PortfolioIntro from "./PortfolioIntro";
import Project from "./Project";
import PortfolioHeader from "./PortfolioHeader";
import projects from "./Projects";


const Portfolio = ()=> {
    let i = 1;
   function assignColor(){
       if(i === 0){i = 1;}
       else i = 0;
       return i;
   }
    return(
        <div className="portfolio-div">
            <Navbar current="Portfolio"/>
            <PortfolioHeader/>
            <PortfolioIntro/>
            {projects.map((project, index) => (
                <Project project={project} key={index} color={assignColor()}/>
            ))}
            <Footer/>
        </div>
)}
export default Portfolio