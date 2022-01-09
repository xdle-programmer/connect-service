import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from '../components/app/app.component';
import store from '../store/store';

import Router from '../router/Router';
import routes from '../router/config';

function ProviderHandler() {
    return (
        <Provider store={store}>
            <App>
                <Router routes={routes} />
            </App>
        </Provider>
    );
}

function AppProvider() {
    if (typeof window === 'object') {
        return (
            <BrowserRouter>
                <ProviderHandler />
            </BrowserRouter>
        );
    }
    return (
        <ProviderHandler />
    );
}

export default AppProvider;
