//noinspection JSUnresolvedVariable
import React from 'react';
import radium from 'radium'
import {Link} from 'react-router-dom';

let RadiumNavLink = radium(Link);

const styles = {
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
    },
    tagLine: {
        paddingLeft: 20,
        color: "white",
        fontSize: ".8em",
        fontStyle: "italic",
        display: "inline"
    }
};

const Banner = (props) => {

    return (

        <nav id="banner" className="navbar" style={styles.banner}>
            <header className="navbar-header pull-left">
                <a id="menuToggle"
                   style={styles.menuToggle}
                   className="navbar-toggle collapsed"
                   onClick={props.onClick}>
                    <span className="sr-only"/>
                    <i className="fa fa-navicon"/>
                </a>
            </header>
            <h2>
                <RadiumNavLink to="/" style={styles.pageTitle}>
                    Tdoggs Corner
                </RadiumNavLink>

            </h2>
            <span style={styles.tagLine}> Boxing news, 24/7 - 365 </span>
        </nav>
    )
};

export default Banner;