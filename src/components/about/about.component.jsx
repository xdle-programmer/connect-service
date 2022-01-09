import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../router/RouterWithSubRoutes';

function About(props) {
    const { routes } = props;

    return (
        <div>
            <h1>Страница о проекте</h1>

            <Switch>
                {routes.map((route) => (
                    <RouteWithSubRoutes
                        key={route.path}
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...route}
                    />
                ))}
            </Switch>
        </div>
    );
}

export default About;
