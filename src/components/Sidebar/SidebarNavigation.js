//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {NavLink} from 'react-router-dom';

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
            <div id="navRow" className="col-xs-12">
                <div>
                    <NavLink to="/" className="btn btn-block">Home</NavLink>
                    <NavLink to="/about" className="btn btn-block">About Me</NavLink>
                    <a id="contactMe" className="btn btn-block" onClick={this.handleOpenContactModal}>Contact Me</a>
                    <a id="subscribe" className="btn btn-block" onClick={this.handleOpenSubscribeModal}>Subscribe</a>
                </div>
            </div>
        )
    }
}

