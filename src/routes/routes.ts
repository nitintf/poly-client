import { lazy } from 'react';
import { PathRouteProps } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';

const LoginPage = lazy(() => import('~/pages/Login'));
const SignupPage = lazy(() => import('~/pages/Signup'));
const DashboardPage = lazy(() => import('~/pages/Dashboard'));

type Route = PathRouteProps & {
  readonly path: string;
  readonly permission?: string;
};

export const publicUnauthenticatedRoutes: Route[] = [
  {
    path: ROUTES.LOGIN,
    Component: LoginPage,
  },
  {
    path: ROUTES.SIGNUP,
    Component: SignupPage,
  },
];

export const privateRoutes: Route[] = [
  {
    path: ROUTES.DASHBOARD,
    Component: DashboardPage,
  },
];

export const publicRoutes: Route[] = [];
