import React from 'react'
import './Navbar.css'

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
                    <img src="images/brand.png" className="brand ml-2"/>
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
                        <a className={props.current==='Home'?'nav-item nav-link custom-link active':'custom-link nav-item nav-link'}
                                      href="#">ABOUT</a>
                        <a className="nav-item nav-link custom-link" href="#">PORTFOLIO</a>
                        <a className="nav-item nav-link custom-link" href="#">RESUME</a>
                    </div>
                </div>
            </nav>
        )
}
export default Navbar;