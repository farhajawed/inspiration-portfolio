import React from "react";
import icon from './img/icon.png'

const PortfolioHeader = ()=>
    <div className="container">
        <div className="text-center p-md-4">
            <img src={icon} className="portfolio-logo"/>
            <h1 className="work-header">
                PORTFOLIO
            </h1>
        </div>
    </div>

export default PortfolioHeader