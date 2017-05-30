import React from 'react';
import radium from 'radium';

const rowStyles = {
    padding: 45,
    cursor: "pointer"
};

const nameStyles = {
    color: "white",
    margin: 10,
    ':hover': {
        color: "#ffd700",
        cursor: "pointer"
    }
};

const AuthorPhotoRow = () => (

    <div id="authorPhotoRow" className="col-xs-12" style={rowStyles}>
        <img src="http://placehold.it/150x150" alt="Tlc" className="img-responsive img-circle center-block"/>
        <p className="text-center" style={nameStyles}>
            Thomas Cathey
            <br/>
            Journalist, Boxer Enthusiast
        </p>
    </div>
);

export default radium(AuthorPhotoRow)