import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './provider/Provider';
import './markup/import.scss';

ReactDOM.hydrate(<AppProvider/>, document.getElementById('app'));

