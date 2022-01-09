import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setExample } from '../../store/actions/exampleActions';

function IndexPage() {
    // Импорт диспатчера
    const dispatch = useDispatch();

    // Подписка на изменение стейта тестовой переменной
    const storeExampleVariable = useSelector((state) => state.example);

    // Локальный стейт для хранения значения инпута
    const [exampleVariable, setExampleVariable] = useState('');

    // Функция для получения локального значения из инпута и передачи его в стейт
    const setExampleInputValue = (event) => {
        const { value } = event.target;
        setExampleVariable(value);
    };

    // Функция для диспатча локального значение в стор
    function dispatchExample() {
        dispatch(setExample(exampleVariable));
        setExampleVariable('');
    }

    return (
        <div className="index-page">
            <h1 className="index-page__title">Тестовая главная страница</h1>

            <p className="index-page__example">
                Тестовая переменная из стора:
                <b>{storeExampleVariable}</b>
            </p>

            <div className="index-page__form">
                <input
                    className="input"
                    value={exampleVariable}
                    onChange={setExampleInputValue}
                    name="title"
                />
                <button type="button" className="button" onClick={dispatchExample}>
                    Отправить в стор значение из
                    инпута
                </button>
            </div>

        </div>
    );
}

export default IndexPage;
