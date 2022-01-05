import React, {Suspense} from 'react';
import {Redirect, Route} from 'react-router-dom';

//import {user} from '../index';

const RouteWithSubRoutes = (route) => {

    /** Authenticated flag */
        //const authenticated: boolean = user.authenticated;

    const RouteHandler = () => {
            return (
                <Route
                    path={route.path}
                    render={(props) => {
                        if (route.redirect) {
                            return <Redirect to={route.redirect}/>;
                        } else {
                            return route.component && <route.component {...props} routes={route.routes}/>;
                        }
                    }
                    }
                />
            );
        };

    if (typeof window === 'object') {
        return (
            <Suspense fallback={route.fallback}>
                <RouteHandler/>
            </Suspense>
        );
    } else {
        return (
            <RouteHandler/>
        );
    }


};

export default RouteWithSubRoutes;
