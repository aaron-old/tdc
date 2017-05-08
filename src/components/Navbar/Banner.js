import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import '../Navbar/Styles/Header.css';

export default class extends Component {

    render() {
        return (
            <Navbar id="banner" fluid>
                <Navbar.Header>
                    <a id="menu-toggle" href="#menu-toggle" className="navbar-toggle collapsed">
                        <span className="sr-only"/>
                        <i className="fa fa-navicon"/>
                    </a>
                </Navbar.Header>

                <h2 className="page-title">Tdoggs Corner</h2>
            </Navbar>
        )
    }
}