import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './RouterWithSubRoutes';

function Router({ routes }) {
    return <Switch>{routes.map((route) => <RouteWithSubRoutes key={route.path} {...route} />)}</Switch>;
}

export default Router;
