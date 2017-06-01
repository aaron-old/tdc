//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import radium from 'radium'
import {Link} from 'react-router-dom';

let RadiumNavLink = radium(Link);

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            applicationName: "Tdoggs Corner"
        };
        this.styles = {
            banner: {
                minHeight: 100,
                borderRadius: 0,
                boxShadow: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                background: "linear-gradient(to right, #232526, #414345)",
                color: "white",
                marginBottom: 0
            },
            pageTitle: {
                paddingLeft: 20,
                color: "white",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                ":hover": {
                    color: "#ffd700",
                    cursor: "pointer",
                    textDecoration: "none"
                },
                ":focus": {
                  textDecoration: "none"
                }
            },
            menuToggle: {
                ':hover': {
                    cursor: "pointer"
                }
            }
        }
    }
    render() {
        return (
            <nav id="banner" className="navbar" style={this.styles.banner}>
                <header className="navbar-header pull-left">
                    <a id="menuToggle"
                       style={this.styles.menuToggle}
                       className="navbar-toggle collapsed"
                       onClick={this.props.onClick}>
                        <span className="sr-only"/>
                        <i className="fa fa-navicon"/>
                    </a>
                </header>
                <h2>
                    <RadiumNavLink to="/" style={this.styles.pageTitle}>
                        {this.state.applicationName}
                    </RadiumNavLink>
                </h2>
            </nav>
        )
    }
}