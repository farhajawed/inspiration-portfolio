import React from "react";
import "./Portfolio.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import PortfolioHeader from "./PortfolioHeader";
import img1 from './img/eat.PNG'
import img2 from './img/eat1.png'
import img3 from './img/eat2.png'
import img4 from './img/eat3.png'
import ProjectHeader from "./ProjectHeader";
import PortfolioService from "./PortfolioService"

class ProjectOneMore extends React.Component{
    constructor(props){
        super(props);
        this.state={
            project:{}
        }
    }
    componentDidMount(){
        this.setState({
            project:PortfolioService.findProjectById(this.props.match.params.id)
        })

    }

    render(){
        console.log(this.state.project.detail!==undefined?this.state.project.detail.images:'')
        return(
            <div className="portfolio-div">
                <Navbar current="Portfolio"/>
                <PortfolioHeader/>
                <div className="container">
                    <h3 className="p-name">{this.state.project.name}</h3>
                    <p className="p-intro">
                        {this.state.project.detail!==undefined?this.state.project.detail.summary:""}
                    </p>
                    <div id="project1-carousel" className="carousel slide carousel-img" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {this.state.project.detail!==undefined?
                                this.state.project.detail.images.map((image,index)=>(
                                <li data-target="#project1-carousel" data-slide-to={index}
                                    className={index===0?"active":""}></li>
                            )):""}
                        </ol>
                        <div className="carousel-inner">
                            {this.state.project.detail!==undefined?
                                this.state.project.detail.images.map((image,index)=>(
                                <div className={index===0?"carousel-item active":"carousel-item"}>
                                    <img className="d-block w-100 slider-img"
                                         src={"../images/"+image}
                                         alt="First slide"/>
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

                    <h4>About</h4>
                    <p>
                        {this.state.project.detail!==undefined?this.state.project.detail.about:""}
                    </p>
                    <h4>Technologies</h4>
                    <p>
                        {this.state.project.technologies!==undefined?
                            this.state.project.technologies.map((technology,index)=>(
                            <span key={index}>{technology}</span>
                        )):""}
                    </p>
                </div>
                <Footer/>
            </div>
)}}
export default ProjectOneMore