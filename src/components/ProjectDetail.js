import React from "react";
import "./ProjectDetail.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import PortfolioService from "./PortfolioService"
import {Link} from 'react-router-dom'

class ProjectDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            project:{}
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        this.setState({
            project:PortfolioService.findProjectById(this.props.match.params.id)
        })
    }

    render(){
        return(
            <div className="portfolio-div">
                <Navbar current="Portfolio"/>
                <div className="container pt-md-5">
                    <div className="pro-name text-center pb-3 pt-3">
                        <Link className="float-left left-arrow" to="/portfolio">
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                        <span>{this.state.project.name}</span>
                    </div>
                    <div className="p-summary pt-2">
                        <p>{this.state.project.detail!==undefined?this.state.project.detail.summary:""}</p>
                    </div>
                    <div className="pro-buttons pb-4">
                        {this.state.project.webLink?
                        <a className="btn btn-link mr-2"
                           target="_blank"
                           rel="noopener noreferrer"
                           href={this.state.project.webLink}>
                            <i className="fa fa-link"></i>
                        </a>:""}
                        {this.state.project.videoLink?
                            <a className="btn btn-link mr-2" rel="noopener noreferrer" target="_blank" href={this.state.project.videoLink}>
                                <i className="fa fa-eye" alt="Video Link"></i>
                            </a>:""}
                        <a className="btn btn-git mr-2" rel="noopener noreferrer" target="_blank" href={this.state.project.github}>
                            <i className="fa fa-github" alt="Github Link"></i>
                        </a>
                        {this.state.project.gitWiki?
                            <a className="btn btn-link mr-2" rel="noopener noreferrer" target="_blank" href={this.state.project.gitWiki}>
                                <i className="fa fa-info-circle" alt="Github Wiki Link"></i>
                            </a>:""}
                    </div>
                    <div id="project1-carousel" className="carousel slide carousel-img" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.state.project.detail!==undefined?
                                this.state.project.detail.images.map((image,index)=>(
                                    <li index={index}
                                        data-target="#project1-carousel"
                                        data-slide-to={index}
                                        className={index===0?"active":""}></li>
                                )):""}
                        </ol>
                        <div className="carousel-inner">
                            {this.state.project.detail!==undefined?
                                this.state.project.detail.images.map((image,index)=>(
                                    <div key={index} className={index===0?"carousel-item active":"carousel-item"}>
                                        <img className="d-block w-100 slider-img"
                                             src={"../images/"+image}
                                             alt="slide"/>
                                    </div>
                                )):""}
                        </div>
                        <a className="carousel-control-prev" href="#project1-carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#project1-carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="p-about pt-4">
                        <h2>ABOUT</h2>
                        {/*<p>{this.state.project.detail!==undefined?this.state.project.detail.about:""}</p>*/}
                        {this.state.project.detail!==undefined?
                        <div contentEditable='true'
                             dangerouslySetInnerHTML={{ __html: this.state.project.detail.about }}></div>:""}
                    </div>
                    <div className="p-about pt-4 pb-3">
                        <h2>TECHNOLOGIES</h2>
                        <ul>
                            {this.state.project.technologies!==undefined?
                                this.state.project.technologies.map((technology,index)=>(
                                    <li key={index}>{technology}</li>
                                )):""}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
)}}
export default ProjectDetail