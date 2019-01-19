import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import brand from './img/brand.png'

const Navbar=(props)=> {
    function renderDots(){
        let dots=[];
        for(var i= 0; i<8;i++){
            dots.push(i);
        }
        return dots;
    }
    return (
            <nav className="navbar navbar-expand-lg pr-md-5 float-md-right">
                <a className="navbar-brand" href="/">
                    <img src={brand} className="brand ml-2"/>
                </a>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse"
                     id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className={props.current==='Home'?'nav-item nav-link custom-link active'
                                      :'custom-link nav-item nav-link'}
                                      to="/">ABOUT</Link>
                        <Link className={props.current==='Portfolio'?'nav-item nav-link custom-link active'
                                       :'custom-link nav-item nav-link'}
                                       to="/portfolio">PORTFOLIO</Link>
                        <a href="https://drive.google.com/open?id=1FeKZIzyMFXyMexIiFGFjPNGZsGZtNXPt"
                           className="nav-item nav-link custom-link" target="_blank">RESUME</a>
                    </div>
                </div>
            </nav>
        )
}
export default Navbar;