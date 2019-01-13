import React from 'react'
import Home from "../components/Home";
import About from "../components/About";
import Education from "../components/Education";
import Slide from 'react-reveal/Slide';
import Skill from "../components/Skill";
import Experience from "../components/Experience";

const Container=()=> {
    return (
        <div>
           <Home/>
            <Slide left>
               <About/>
               <Education/>
               <Skill/>
                <Experience/>
            </Slide>
        </div>
    )
}
export default Container;