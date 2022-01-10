import React from 'react';

import IndexPage from '../components/indexPage/indexPage.component';

// Компоненты о проекте
import About from '../components/about/about.component';
import AboutSubComponentFirst
    from '../components/about/aboutSubComponentFirst/aboutSubComponentFirst.component';

// Пример отложенной загрузки компонента
const AboutSubComponentSecond = React.lazy(() => import('../components/about/aboutSubComponentSecond/aboutSubComponentSecond.component'));

const routes = [
    {
        path: '/',
        exact: true,
        component: IndexPage,
        fallback: <div> Loading... </div>,
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: '/oauth2/redirect/accounts.google.com',
        redirect: '/',
    },
    {
        path: '/about',
        component: About,
        routes: [
            {
                path: '/about/first',
                exact: true,
                component: AboutSubComponentFirst,
                fallback: <div> Loading... </div>,
            },
            {
                path: '/about/second',
                exact: true,
                component: AboutSubComponentSecond,
                fallback: <div>Loading... </div>,
            },
        ],
        fallback: <div>Loading... </div>,
    }];

export default routes;
