import React from "react";
import icon from './img/icon.png'

const ProjectHeader = ()=>
    <div className="container">
        <div className="text-center pt-md-4 pb-md-4">
            <img src={icon} className="portfolio-logo"/>
            <div className="header-div row">
                <div className="col-md-12">
                    {/*<span className="float-left">Portfolio</span>*/}
                    <h2 className="mx-auto work-header"><i className="fa fa-arrow-left left"></i> VISUALIZATION OF EATING EXPERIENCE</h2>
                </div>
            </div>
        </div>
    </div>

export default ProjectHeader