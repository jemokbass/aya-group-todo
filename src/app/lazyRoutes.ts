import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Edit = lazy(() => import('../pages/Edit/Edit'));

export { Home, Edit };
