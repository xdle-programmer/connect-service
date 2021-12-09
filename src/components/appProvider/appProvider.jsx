import React from 'react';

import App from '../app/app.component.jsx';
import store from "../../store/store";
import {Provider} from "react-redux";

const AppProvider = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );

};
export default AppProvider
