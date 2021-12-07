import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider, useDispatch} from 'react-redux';

// import App components
import {App} from './components/app';
import store from "./store/store";

// compile App component in `#app` HTML element
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
