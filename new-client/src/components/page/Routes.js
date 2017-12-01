import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';

export const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home,
  }
];

export const router = () => (
  <div className="router-div">
    {routes.map(route => (
      <Route
          key={`route-${route.name}`}
          path={route.path}
          extact={route.exact}
          component={route.component}
      />
    ))}
  </div>
);