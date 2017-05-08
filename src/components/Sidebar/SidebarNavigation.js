//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

import './Styles/SidebarNavigation.css';

export default class extends Component {

    render() {

        return (
            <Col id="navRow" xs={12}>
                <a href="/" className="btn btn-block">Home</a>
                <a id="contact" href="#" className="btn btn-block">Contact Me</a>
                <a id="subscribe" href="#" className="btn btn-block">Subscribe</a>
            </Col>
        )
    }

}