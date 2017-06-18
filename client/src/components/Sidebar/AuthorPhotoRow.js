import React from 'react';
import radium from 'radium';
import {Link} from 'react-router-dom';
//noinspection JSUnresolvedVariable
import authorImg from '../../images/thomas.png';

let RadiumNavLink = radium(Link);

const rowStyles = {
    padding: "20px 45px 10px 45px"
};

const nameStyles = {
    color: "white",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    ':hover': {
        color: "#ffd700",
        cursor: "pointer",
        textDecoration: "none"
    },
    ":focus": {
        textDecoration: "none"
    }
};

const AuthorPhotoRow = () => (

    <div id="authorPhotoRow" className="col-xs-12" style={rowStyles}>
        <img src={authorImg} alt="Tlc" className="img-responsive img-circle center-block"/>
        <p className="text-center"><RadiumNavLink to="/" style={nameStyles}>
            Thomas Cathey
            <br/>
            Journalist, Boxer Enthusiast
        </RadiumNavLink></p>
    </div>
);

export default radium(AuthorPhotoRow)