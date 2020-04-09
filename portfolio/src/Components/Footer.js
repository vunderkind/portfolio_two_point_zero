import React from 'react';
import '../App.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Test from './Test'

const Arrow = () => {
    return (
    <img src="https://image.flaticon.com/icons/svg/2026/2026915.svg" alt="arrow" width="10" height="10"/>
    )
  }

const Footer = () => {
    return (
    <div id="Footer">
        <div className="LinkedIn">
        <a href="https://www.linkedin.com/in/justinirabor/"><span className="Arrow">
        <p>LinkedIn</p>
        <Arrow/>
        </span>
        </a>
        <a href="https://github.com/vunderkind">
        <span className="Arrow">
        <p>Github</p><Arrow/>
        </span>
        </a>
        </div>
        <div className="Right">
            <Router>
        <Link className = "Arrow" to="/projects">Projects</Link><Arrow/>
                <Switch>
                <Route exact path="/projects" component={Test} />
                </Switch>
        </Router>
        </div>
    </div>
    )
}

export default Footer