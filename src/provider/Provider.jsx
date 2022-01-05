import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';

import App from '../components/app/app.component.jsx';
import store from "../store/store";
import {Provider} from "react-redux";

import Router from "../router/Router";
import {routes} from "../router/config";

const AppProvider = () => {

    const ProviderHandler = () => {

        return (
            <Provider store={store}>
                <App>
                    <Router routes={routes}/>
                </App>
            </Provider>
        );
    };

    if (typeof window === 'object') {
        return (
            <BrowserRouter>
                <ProviderHandler/>
            </BrowserRouter>
        );
    } else {
        return (
            <ProviderHandler/>
        );
    }
};
export default AppProvider;
