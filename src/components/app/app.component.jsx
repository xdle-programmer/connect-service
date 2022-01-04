import React from 'react';

import Counter from '../counter/counter.component.jsx';
import {Link} from "react-router-dom";
import {routes} from "../../router/config";
import Router from "../../router/Router";

const App = () => {

    return (
        <div className="ui-app">
            <Router routes={routes}/>
        </div>
    );

};

export default App
