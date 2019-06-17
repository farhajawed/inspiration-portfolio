import React from "react";
import "./Footer.css"


const Footer = ()=>
    <div className="footer text-center pt-5">
        <div>
            <img src="../images/cat.png" alt={"footer-cat-img"}/>
        </div>
        <div className="footer-content">
            <div className="connection mb-2">
                <a href="https://github.com/farha-neu" rel="noopener noreferrer" target="_blank" className="mr-3">
                    github
                </a>
                <a href="https://www.linkedin.com/in/farhajawed/" rel="noopener noreferrer" target="_blank" className="mr-3">
                    linkedin
                </a>
                <a href="mailto:farhajw8@gmail.com" rel="noopener noreferrer" target="_blank">
                    email
                </a>
            </div>
            <div className="copyright"> © 2019 Farha Jawed. All rights reserved.</div>
        </div>
    </div>

export default Footer