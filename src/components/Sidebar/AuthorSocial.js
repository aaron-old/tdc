import React from 'react';
import radium from 'radium';

const styles = {

    rowStyles : {
        margin: "0 10px 0 10px",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    },
    socialLink: {
        color: 'blue ',
        margin: 10
    }
};

const AuthorSocial = () => (

    <div id="socialRow" className="text-center col-xs-12" style={styles.rowStyles}>
        <a href="https://www.facebook.com/thomas.cathey.35?fref=ts" target="_blank" style={styles.socialLink}>
            <i className="fa fa-facebook-square fa-3x"/>
        </a>
        <a href="https://twitter.com/ThomasCathey2" target="_blank" style={styles.socialLink}>
            <i className="fa fa-twitter-square fa-3x"/>
        </a>
        <a href="#" target="_blank" style={styles.socialLink}>
            <i className="fa fa-google-plus-square fa-3x"/>
        </a>
    </div>
);
export default radium(AuthorSocial);