
//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';

let RadiumNavLink = radium(Link);

class SidebarNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactModalShow: false,
            subscribeModalShow: false,
            loginModalShow: false
        };
        this.linkStyle = {
            margin: "2px 0 1px 0",
            color: "white",
            textAlign: "center",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
            borderRadius: 0,
            ':hover': {
                'color': '#ffd700',
                'boxShadow': "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
            }
        };
        this.navRowStyles = {
            margin: "20px 0 0 0",
            padding: 0
        }
    }
    render() {
        return (
            <div id="navRow" className="col-xs-12" style={this.navRowStyles}>
                <div>
                    <RadiumNavLink to="/" className="btn btn-block" key="home" style={this.linkStyle}>Home</RadiumNavLink>
                    <RadiumNavLink to="/about" className="btn btn-block" key="about" style={this.linkStyle}>About Me</RadiumNavLink>
                    <a id="contactMe" className="btn btn-block" key="contact" style={this.linkStyle}>Contact Me</a>
                    <a id="subscribe" className="btn btn-block" key="subscribe" style={this.linkStyle}>Subscribe</a>
                    <RadiumNavLink to="/login" className="btn btn-block" key="login" style={this.linkStyle}>Login</RadiumNavLink>
                </div>
            </div>
        )
    }
}

export default radium(SidebarNavigation);
