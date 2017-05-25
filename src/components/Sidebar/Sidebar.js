//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import SidebarNavigation from './SidebarNavigation';
import AuthorPhotoRow from './AuthorPhotoRow';

import './Styles/Sidebar.css';

export default class extends Component {

    constructor(props) {

        super(props);

    }


    render() {

        return (
            <div id="sidebarWrapper">
                <div className="row`">
                    <AuthorPhotoRow/>
                    <SidebarNavigation/>
                </div>
            </div>
        )
    }
}