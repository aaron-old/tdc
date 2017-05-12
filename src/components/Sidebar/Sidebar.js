//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

import SidebarNavigation from './SidebarNavigation';
import AuthorPhotoRow from './AuthorPhotoRow';

import './Styles/Sidebar.css';

export default class extends Component {


    render() {

        return (
            <div id="sidebarWrapper">
                <Row>
                    <AuthorPhotoRow/>
                    <SidebarNavigation/>
                </Row>
            </div>
        )
    }
}