//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';

import './Styles/SidebarNavigation.css';

export default class extends Component {

    render() {

        return (
            <Col id="navRow" xs={12}>

                <Router history="">
                    <div>
                        <NavLink to="/" className="btn btn-block" exact>Home</NavLink>
                        <NavLink to="/about" className="btn btn-block" exact>About Me</NavLink>
                        <a id="contactMe" className="btn btn-block">Contact Me</a>
                        <a id="subscribe" className="btn btn-block">Subscribe</a>
                    </div>
                </Router>
            </Col>
        )
    }

}