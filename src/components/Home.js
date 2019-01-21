import React from 'react'
import './Home.css'
import { fadeInLeft } from 'react-animations'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Slide from 'react-reveal/Slide';
import Navbar from '../components/Navbar';
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";
import Experience from "./Experience";
import Checkout from "./Checkout";
import Footer from "./Footer";



const Home =()=>{
    const styles = {
        bounce: {
            animation: 'x .8s',
            animationDelay:'.8s',
            animationName: Radium.keyframes(bounce, 'bounce')
        },
        fadeInLeft: {
            animation: 'x 1s',
            animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
        },
        hidden:{
            visibility:"hidden"
        }
    }
    function renderDots(num){
        let dots=[];
        for(var i= 0; i<num;i++){
            dots.push(i);
        }
        return dots;
    }
     return(
     <StyleRoot >
        <div className="home-div">
            <Navbar current="Home"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="row mt-md-5">
                            <div className="col-md-12">
                                <img src="images/girl.png" alt="girl-logo" className="avator" style={styles.bounce}/>
                            </div>
                            <div className="intro-div col-md-12" style={styles.fadeInLeft}>
                                <h3 className="intro-1 mb-4">Hi,</h3>
                                <h1 className="intro-2">I'M FARHA JAWED</h1>
                                <h2 className="intro-3">- A Web Developer & UI/UX Designer</h2>
                            </div>

                            <div className="col-md-12" style={styles.fadeInLeft}>
                                <div className="wrapper pt-md-5 pt-2">
                                    <div className="quote-div">
                                            It does not matter how slowly you go as long as you do not stop.
                                    </div>
                                    <div className="author text-right"> - Confucius</div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                    <a className="btn btn-custom"
                                       href="mailto:farhajw@gmail.com"
                                       target="_top">
                                        Get In Touch
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4 text-center logo-div">
                        <img src="images/logo3.png" className="logo" alt={"abstract-logo"}/>
                    </div>
                </div>
                <div className="connect-div d-none d-md-inline-block">
                    <div className="connect">
                        {renderDots(6).map((dot,i)=>
                            <div key={i} className="dot">
                                <img src="images/dots.png"
                                     alt={"o"}
                                     className="dots"/></div>)}
                        <a href="https://github.com/farha-neu" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square"></i></a><br/>
                        <a href="https://www.linkedin.com/in/farhajawed/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a><br/>
                        <a href="mailto:farhajw@gmail.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope"></i></a><br/>
                        {renderDots(2).map((dot,i)=>
                            <div key={i} className="dot">
                                    <img key={i}
                                         alt={"o"}
                                         src="images/dots.png"
                                         className="dots"/>
                            </div>)}
                    </div>
                </div>
            </div>
            <div className="text-center down">
                <a href="/"><i className="fa fa-angle-down"></i></a>
            </div>
        </div>
         <Slide left>
             <About/>
             <Education/>
             <Skill/>
             <Experience/>
             <Checkout/>
             <Footer/>
         </Slide>
       </StyleRoot>
     )}



export default Home