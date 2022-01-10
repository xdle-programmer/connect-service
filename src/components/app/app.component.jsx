import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../router/config';
import Router from '../../router/Router';

function App() {
    return (
        <div>

            <div>
                Тестовое глобальное меню

                <div>
                    <a href="/login/google">OAUTH</a>
                </div>

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

            <Router routes={routes} />
        </div>
    );
}

export default App;
