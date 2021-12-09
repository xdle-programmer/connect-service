import React from 'react';
import ReactDOM from 'react-dom';

// import App components
import AppProvider from "./components/appProvider/appProvider";

// compile App component in `#app` HTML element
ReactDOM.render(<AppProvider/>, document.getElementById('app'));
