import React, { Component } from 'react';
import './Sidebar.css';
import AuthorPhotoRow from './AuthorPhotoRow';


export default class extends Component {


    render() {

        return (
            <div id="sidebarWrapper">
                <AuthorPhotoRow/>
            </div>
        )
    }

}