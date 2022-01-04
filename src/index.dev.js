import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// import App components
import AppProvider from "./components/appProvider/appProvider";

// compile App component in `#app` HTML element
ReactDOM.render(
    <BrowserRouter>
        <AppProvider/>
    </BrowserRouter>
    , document.getElementById('app'));
