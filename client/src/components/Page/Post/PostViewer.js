/**
 * Created by aaron on 6/5/2017.
 */

//noinspection JSUnresolvedVariable
import React, { Component } from 'react'
import Post from '../../Post/Post';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // placing the ajax call to api here.
        // depending on the props given to the PostViewer about the page, will need to determine the ajax call
        // being made.
    }

    render() {

        return ( <Post/> )
    }
}


