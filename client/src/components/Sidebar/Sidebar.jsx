import React from 'react';
import radium from 'radium';
import SidebarNavigation from './SidebarNavigation';
import AuthorPhotoRow from './AuthorPhotoRow';
import AuthorSocialRow from './AuthorSocial';

const Sidebar = (props) => {

    let sidebarStyles = {
        zIndex: 1000,
        position: "fixed",
        left: 260,
        height: "100%",
        marginLeft: -260,
        background: "linear-gradient(to left, #232526, #414345)",
        overflowY: "auto",
        overflowX: "hidden",
        transition: "all 0.5s ease",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
    };
    let toggleWidth = {
        toggled: {
            width: 260
        },
        notToggled: {
            width: 0
        },
    };
    return (
        <div id="sidebarWrapper"
             style={props.toggled ?
                 [ sidebarStyles, toggleWidth.toggled ] :
                 [ sidebarStyles, toggleWidth.notToggled ]
             }>
            <div className="row">
                <AuthorPhotoRow/>
                <AuthorSocialRow/>
                <SidebarNavigation/>
            </div>
        </div>
    )
};

export default radium(Sidebar);