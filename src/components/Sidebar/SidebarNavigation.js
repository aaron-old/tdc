//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';

import './Styles/SidebarNavigation.css';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactModalShow: false,
            subscribeModalShow: false,
            loginModalShow: false
        };

    }

    handleOpenContactModal() {
        console.log("opening contact modal")
    }

    handleOpenSubscribeModal() {
        console.log("opening subscribe modal")
    }

    render() {

        return (

            <Col id="navRow" xs={12}>
                <Router history="">
                    <div>
                        <NavLink to="/" className="btn btn-block" exact>Home</NavLink>
                        <NavLink to="/about" className="btn btn-block" exact>About Me</NavLink>
                        <a id="contactMe"
                           className="btn btn-block"
                           onClick={this.handleOpenContactModal}>
                            Contact Me
                        </a>
                        <a id="subscribe"
                           className="btn btn-block"
                           onClick={this.handleOpenSubscribeModal}>
                            Subscribe
                        </a>
                    </div>
                </Router>
            </Col>
        )
    }

}