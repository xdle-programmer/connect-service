import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export function Counter(props) {


    console.log(props);

    // Импорт диспатчера
    const dispatch = useDispatch();

    // Подписка на изменение стейта тикера
    const store = useSelector(state => state);

    return (
        <div className="ui-counter">
            <p className="ui-counter__title">Counter Widget</p>

            <div className="ui-counter__body">
                <p className="ui-counter__body__name">123</p>
            </div>
        </div>
    );
}
