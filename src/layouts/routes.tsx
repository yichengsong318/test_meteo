import { Fragment, Suspense, lazy } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import LoadingScreen from 'components/LoadingScreen';
import { Routes } from './types';
import { MainLayout } from 'layouts/MainLayout';

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Switch>
    {routes.map((route, index) => {
      const Layout = route.layout || Fragment;
      const Component = route.component;

      return (
        <Route
          key={index}
          {...route}
          element={
            <Layout>
              {route.routes ? (
                renderRoutes(route.routes)
              ) : (
                <Suspense fallback={<LoadingScreen />}>
                  <Component />
                </Suspense>
              )}
            </Layout>
          }
        />
      );
    })}
  </Switch>
);

export const routes: Routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('pages/Dashboard')),
    layout: MainLayout
  },
  {
    exact: true,
    path: '/settings',
    component: lazy(() => import('pages/Settings')),
    layout: MainLayout
  },
  {
    exact: true,
    path: 'details/:id',
    component: lazy(() => import('pages/Detail')),
    layout: MainLayout
  }
];
