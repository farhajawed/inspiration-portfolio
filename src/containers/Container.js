import React from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import ProjectOneMore from "../components/ProjectOneMore";

const Container=()=> {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/:id" render={props => <ProjectOneMore {...props} />}/>
            </div>
        </Router>
    )
}
export default Container;