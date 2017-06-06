/**
 * Created by mustard on 5/21/17.
 */

//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import routes from './PageRouter';
import {Route} from 'react-router-dom';

export default class extends Component {

    render() {

        return (
            <main id="main">
                <div className="row">
                    <div className="col-xs-12">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                    </div>
                </div>
            </main>
        )
    }
}
