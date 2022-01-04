import React, { ComponentType, lazy, LazyExoticComponent, ReactNode } from 'react';
import Counter from '../components/counter/counter.component'

// export interface IRoute {
//     // Path, like in basic prop
//     path: string;
//     // Exact, like in basic prop
//     exact: boolean;
//     // Preloader for lazy loading
//     fallback: NonNullable<ReactNode> | null;
//     // Lazy Loaded component
//     component?: LazyExoticComponent<ComponentType<any>>;
//     // Sub routes
//     routes?: IRoute[];
//     // Redirect path
//     redirect?: string;
//     // If router is private, this is going to be true
//     private?: boolean;
// }

export const routes = [
    {
        path: '/',
        exact: true,
        component: Counter,
        fallback: <div> Loading... </div>
    },
    {
        path: '/home',
        exact: true,
        redirect: '/',
        component: Counter,
        fallback: <div> Loading... </div>
    }
];

// {
//     path: '/home',
//     exact: false,
//     private: false,
//     fallback: <div> Loading... </div>,
// },
// {
//     path: '/protected',
//     exact: false,
//     private: true,
//     fallback: <div> Loading... </div>
// }

// routes: [
//     {
//         path: '/home/signup',
//         exact: false,
//         private: false,
//         fallback: <div> Loading... </div>
//     },
//     {
//         path: '/home/login',
//         exact: false,
//         private: false,
//         fallback: <div> Loading... </div>
//     }
// ]

//   component: lazy(() => import('../components/Protected')),