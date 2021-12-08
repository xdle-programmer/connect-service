import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserName} from '../../store/actions/userActions'
export function Counter(props) {


    console.log(props);

    useEffect
    (
        () => {

        },[]
    )

    // Импорт диспатчера
    const dispatch = useDispatch();

    // Подписка на изменение стейта тикера
    const user = useSelector(state => state.user.name);

    function setUser(){
        console.log("Тык")
        dispatch(getUserName());
    }

    return (
        <div className="ui-counter">
            <p className="ui-counter__title">Counter Widget</p>

            <div className="ui-counter__body">
                <p className="ui-counter__body__name">{user}</p>
            </div>

            <div className='ui-counter__body' onClick={setUser}>
            Тык
            </div>
        </div>
    );
}
