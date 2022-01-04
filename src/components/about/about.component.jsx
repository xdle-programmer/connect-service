import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserName} from '../../store/actions/userActions';
import {Link, Switch} from "react-router-dom";
import RouteWithSubRoutes from "../../router/RouterWithSubRoutes";

const About = (props) => {

    const subRoutes = props.routes;

    console.log(subRoutes);

    useEffect
    (
        () => {

        }, []
    );

    // Импорт диспатчера
    const dispatch = useDispatch();

    // Подписка на изменение стейта тикера
    const user = useSelector(state => state.user.name);

    function setUser() {
        console.log("Тык");
        dispatch(getUserName());
    }

    return (
        <div className="ui-counter">
            <p className="ui-counter__title">Test About Page</p>

            <div className="ui-counter__body">
                <p className="ui-counter__body__name">{user}</p>
            </div>

            <div className="ui-counter__body" onClick={setUser}>
                Тык
            </div>
            <div>
                <Link to="/home">Test to home</Link>
            </div>

            <div>
                <Link to="/about/text">Test to sub text</Link>
            </div>

            <div>
                <Link to="/about/image">Test to sub image</Link>
            </div>

            <Switch>
                {subRoutes.map((route) => <RouteWithSubRoutes key={route.path} {...route} />)}
            </Switch>
        </div>
    );
};

export default About;
