//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import SidebarNavigation from './SidebarNavigation';
import AuthorPhotoRow from './AuthorPhotoRow';
import AuthorSocialRow from './AuthorSocial';

import './Styles/Sidebar.css';

const Sidebar = () => (


        <div id="sidebarWrapper">
            <div className="row`">
                <AuthorPhotoRow/>
                <AuthorSocialRow/>
                <SidebarNavigation/>
            </div>
        </div>
);

export default Sidebar;