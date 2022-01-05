import React, {ComponentType, lazy, LazyExoticComponent, ReactNode} from 'react';

import IndexPage from '../components/indexPage/indexPage.component';

// Компоненты о проекте
import About from '../components/about/about.component';
import aboutSubComponentFirst from '../components/about/aboutSubComponentFirst/aboutSubComponentFirst.component';

// Пример отложенной загрузки компонента
const aboutSubComponentSecond = React.lazy(() => import('../components/about/aboutSubComponentSecond/aboutSubComponentSecond.component'));

export const routes = [
    {
        path: '/',
        exact: true,
        component: IndexPage,
        fallback: <div> Loading... </div>
    },
    {
        path: '/home',
        redirect: '/',
    },
    {
        path: '/about',
        component: About,
        routes: [
            {
                path: "/about/first",
                exact: true,
                component: aboutSubComponentFirst,
                fallback: <div> Loading... </div>
            },
            {
                path: "/about/second",
                exact: true,
                component: aboutSubComponentSecond,
                fallback: <div>Loading... </div>
            }
        ],
        fallback: <div>Loading... </div>
    }];
