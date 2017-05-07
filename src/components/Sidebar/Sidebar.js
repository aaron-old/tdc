import React, { Component } from 'react';
import './Sidebar.css';
import AuthorPhotoRow from './AuthorPhotoRow';
import SocialPhotoRow from './SocialPhotoRow';
import SidebarNavigation from './SidebarNavigation';

export default class extends Component {


    render() {

        return (
            <div id="sidebarWrapper">
                <AuthorPhotoRow/>
            </div>
        )
    }

}