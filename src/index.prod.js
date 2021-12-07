import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import App components
import { App } from './components/app';
import store from "./store/store";
import {Provider} from "react-redux";

// compile App component in `#app` HTML element
ReactDOM.hydrate( <Provider store={store}><App/></Provider>, document.getElementById( 'app' ) );
