import React from 'react';
import {Link, Switch, Route} from "react-router-dom";
import RouteWithSubRoutes from "../../router/RouterWithSubRoutes";

const About = (props) => {

    return (
        <div>
            <h1>Страница о проекте</h1>

            <Switch>{props.routes.map((route) => <RouteWithSubRoutes key={route.path} {...route} />)}</Switch>
        </div>
    );
};

export default About;
