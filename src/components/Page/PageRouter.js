import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import Post from './Post/Post';

import { BrowserRouter as Router } from 'react-router-dom';


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/post"
    }
];
// TODO: Configure a default route config.
// const RouteConfig = () => (
//     // <Router history="">
//     //     {routes.map((route, i) => (
//     //
//     //     ))}
//     // </Router>
// );

export default routes;
