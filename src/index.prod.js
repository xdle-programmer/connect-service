import React from 'react';
import ReactDOM from 'react-dom';

// import App components
import AppProvider from "./components/appProvider/appProvider";
import {BrowserRouter} from "react-router-dom";

// compile App component in `#app` HTML element
ReactDOM.hydrate(<BrowserRouter>
    <AppProvider/>
</BrowserRouter>, document.getElementById('app'));
