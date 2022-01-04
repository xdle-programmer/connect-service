import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import App from '../app/app.component.jsx';
import store from "../../store/store";
import {Provider} from "react-redux";

import Router from "../../router/Router";
import {routes} from "../../router/config";

const AppProvider = () => {

    return (
        <Provider store={store}>
            <App>
                <Router routes={routes}/>
            </App>
        </Provider>
    );

};
export default AppProvider;
