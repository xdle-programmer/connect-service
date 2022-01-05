import React, {Suspense} from 'react';
import {Redirect, Route} from 'react-router-dom';

//import {user} from '../index';

const RouteWithSubRoutes = (route) => {

    /** Authenticated flag */
    //const authenticated: boolean = user.authenticated;

    return (
        <Suspense fallback={route.fallback}>
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
        </Suspense>
    );
};

export default RouteWithSubRoutes;
