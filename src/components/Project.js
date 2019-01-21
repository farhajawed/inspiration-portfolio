import React from "react";
import {Link} from 'react-router-dom'

const Project = ({project,color})=>
    <div className={color === 0?"project-one text-center":"project-two text-center"}>
        <div className="container">
            <div className="project-div row">
                <div className="col-md-12 mb-5">
                    <img src={"images/"+project.image} className="project-image img-fluid" alt={project.name}/>
                </div>
                <div className="col-md-12 project-name m-1">
                    <h2>{project.name}</h2>
                </div>
                <div className="col-md-12 project-tech mb-2">
                    {project.technologies.map((technology,index)=>(
                        <div className="m-1" key={index}>{technology}</div>
                    ))}
                </div>
                <div className="col-md-12 project-body">
                    <p>{project.summary}</p>
                </div>
                <div className="col-md-12 project-buttons">

                    <Link className="btn btn-more mr-2 mb-1 mb-md-0" to={"/portfolio/"+project.id}>
                        Learn More
                    </Link>
                    {project.webLink?
                    <a className="btn btn-more mr-2 mb-1 mb-md-0" rel="noopener noreferrer" target="_blank" href={project.webLink}>
                        Experience the Website
                    </a>:""}
                    {project.videoLink?
                        <a className="btn btn-more mr-2 mb-1 mb-md-0" rel="noopener noreferrer" target="_blank" href={project.videoLink}>
                            Watch Demo Video
                        </a>:""}
                    <a className="btn btn-more mr-2 mb-1 mb-md-0" rel="noopener noreferrer" target="_blank" href={project.github}>
                        Github Code
                    </a>
                </div>
            </div>
        </div>
    </div>

export default Project