import { lazy } from 'react';
import { PathRouteProps, Route } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';

const LoginPage = lazy(() => import('~/pages/Login'));
const SignupPage = lazy(() => import('~/pages/Signup'));
const DashboardPage = lazy(() => import('~/pages/Dashboard'));

type IRoute = PathRouteProps & {
  readonly path: string;
  readonly permission?: string;
};

export const publicUnauthenticatedRoutes: IRoute[] = [
  {
    path: ROUTES.LOGIN,
    Component: LoginPage,
  },
  {
    path: ROUTES.SIGNUP,
    Component: SignupPage,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: ROUTES.DASHBOARD,
    Component: DashboardPage,
  },
];

export const publicRoutes: IRoute[] = [];

/**
 * Generates routes
 * @param {IRoute[]} routes Array of routes
 * @returns {JSX.Element} Route instance
 */
export const generateRoutes = (routes: IRoute[]) => {
  return routes.map(({ path, Component, ...rest }) => (
    <Route key={path} path={path} Component={Component} {...rest} />
  ));
};
