import React from "react";
import {Link} from 'react-router-dom'
import Slide from 'react-reveal/Slide';

const Project = ({project,color})=>
    <div className={color === 0?"project-one text-center":"project-two text-center"}>
        <Slide left>
        <div className="container">
            <div className="project-div row">
                <div className="col-md-12 mb-4">
                    <img src={"images/"+project.image} className="project-image img-fluid" />
                </div>
                <div className="col-md-12 project-name">
                    <p>{project.name}</p>
                </div>
                <div className="col-md-12 project-tech mb-4">
                    {project.technologies.map((technology,index)=>(
                        <span key={index}>{technology}</span>
                    ))}
                </div>
                <div className="col-md-12 project-body">
                    <p>{project.summary}</p>
                </div>
                <div className="col-md-12 project-buttons">

                    <Link className="btn btn-more mr-2 mb-1 mb-md-0" to={"/portfolio/"+project.id}>
                        Learn More
                    </Link>
                    <a className="btn btn-more mr-2 mb-1 mb-md-0" target="_blank" href={project.webLink}>
                        Experience the Website
                    </a>
                    <a className="btn btn-more mr-2 mb-1 mb-md-0" target="_blank" href={project.github}>
                        Github Code
                    </a>
                </div>
            </div>
        </div>
        </Slide>
    </div>

export default Project