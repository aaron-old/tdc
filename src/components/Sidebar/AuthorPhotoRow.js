//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import './Styles/AuthorPhotoRow.css';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="authorPhotoRow" className="col-xs-12">
                <img src="http://placehold.it/150x150" alt="Tlc" className="img-responsive img-circle center-block"/>
                <p className="text-center name">
                    Thomas Cathey
                    <br/>
                    Journalist, Boxer Enthusiast
                </p>
            </div>
        )
    }
}