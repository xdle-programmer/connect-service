import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

function RouteHandler(props) {
    const { route } = props;

    return (
        <Route
            path={route.path}
            render={() => {
                if (route.redirect) {
                    return <Redirect to={route.redirect} />;
                }
                // eslint-disable-next-line react/jsx-props-no-spreading
                return route.component && <route.component {...props} routes={route.routes} />;
            }}
        />
    );
}

function RouteWithSubRoutes(props) {
    const route = props;
    const { fallback } = props;

    if (typeof window === 'object') {
        return (
            <Suspense fallback={fallback}>
                <RouteHandler route={route} />
            </Suspense>
        );
    }
    return (
        <RouteHandler route={route} />
    );
}

export default RouteWithSubRoutes;
