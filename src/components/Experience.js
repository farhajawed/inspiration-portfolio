import React from 'react'
import './Experience.css'
import List from "./List";
import Northeastern from "./Northeastern";
import Ergo from "./Ergo";
import Citycell from "./Citycell";


class Experience extends React.Component{
    state = {
        currentPage: "Northeastern"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Northeastern") {
            return <Northeastern />;
        } else if (this.state.currentPage === "Ergo") {
            return <Ergo />;
        } else {
            return <Citycell />;
        }
    };

    render() {
        return (
            <div className="container experience-div">
                <div className="row">
                    <div className="col-12 header text-center mb-3">
                        <h4>EXPERIENCE.</h4>
                    </div>
                    <div className="col-12 exp">
                        <div className="row">
                            <List currentPage={this.state.currentPage}
                                  handlePageChange={this.handlePageChange}/>
                            {this.renderPage()}
                        </div>
                    </div>
                </div>
                {/*<img src="images/coffee.png" className="coffee"/>*/}
            </div>
        )
    }
}
export default Experience;