//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";
import '../Navbar/Styles/Header.css';

export default class extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            applicationName: "Tdoggs Corner"
        }
    }

    render() {
        return (
            <nav id="banner" className="navbar">
                <header className="navbar-header pull-left">
                    <a id="menuToggle"
                       className="navbar-toggle collapsed"
                       onClick={this.props.onClick}>
                        <span className="sr-only"/>
                        <i className="fa fa-navicon"/>
                    </a>
                </header>
                <h2 className="page-title">{this.state.applicationName}</h2>
            </nav>
        )
    }
}