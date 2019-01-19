import React from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import ProjectDetail from "../components/ProjectDetail";

const Container=()=> {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/:id" render={props => <ProjectDetail {...props} />}/>
            </div>
        </Router>
    )
}
export default Container;