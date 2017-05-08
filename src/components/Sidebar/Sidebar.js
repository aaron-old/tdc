//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import {Row} from 'react-bootstrap';

import SidebarNavigation from './SidebarNavigation';

import './Styles/Sidebar.css';

export default class extends Component {


    render() {

        return (
            <div id="sidebarWrapper">
                <Row>
                    <SidebarNavigation/>
                </Row>
            </div>
        )
    }
}