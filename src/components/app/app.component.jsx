import React from 'react';
import {routes} from "../../router/config";
import Router from "../../router/Router";
import {Link, Switch, Route} from "react-router-dom";

const App = () => {
    return (
        <div>

            <div>
                Тестовое глобальное меню
                <div>
                    <Link to="/home">Вернуться на главную</Link>
                </div>

                <div>
                    <Link to="/about/">Показать страницу о проекте без внутренних компонентов</Link>
                </div>
                <div>
                    <Link to="/about/first">Показать страницу о проекте с компонентом 1</Link>
                </div>
                <div>
                    <Link to="/about/second">Показать страницу о проекте с компонентом 2</Link>
                </div>
            </div>

            <Router routes={routes}/>
        </div>
    );

};

export default App;
