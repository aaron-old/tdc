import React from 'react';

import PostSocialCol from '../Social/PostSocial';

const post = (props) => {

    return (
        <div className="story-col col-xs-12">
            <article className="story-row row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="row">
                        <figure className="col-xs-12">
                            <img src="http://placehold.it/550x450" alt="picture"
                                 className="img-responsive img-thumbnail card-3"/>
                        </figure>
                    </div>
                    <div className="row">
                        <div className="story-social-col col-xs-12">
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6">
                    <div className="row">
                        <div className="story-title-col col-xs-12">
                            Title of the post goes here.
                        </div>
                    </div>
                    <div className="row">
                        <div className="story-body-col col-xs-12">
                            Here is some content
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
};

export default post;