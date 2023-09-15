import { lazy } from 'react';
import { PathRouteProps, Route } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { Helmet } from 'react-helmet';
import { OrganizationsPage } from '@/pages/Organization';

const LoginPage = lazy(() => import('@/pages/Login'));
const SignupPage = lazy(() => import('@/pages/Signup'));
const DashboardPage = lazy(() => import('@/pages/Dashboard'));
const OnboardingPage = lazy(() => import('@/pages/Onboarding'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('@/pages/ResetPassword'));

type IRoute = PathRouteProps & {
  readonly path: string;
  readonly permission?: string;
  readonly title: string;
};

export const publicUnauthenticatedRoutes: IRoute[] = [
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
    title: 'Login',
  },
  {
    path: ROUTES.SIGNUP,
    element: <SignupPage />,
    title: 'Sign Up',
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: <ForgotPasswordPage />,
    title: 'Forgot Password',
  },
  {
    path: ROUTES.RESET_PASSWORD,
    element: <ResetPasswordPage />,
    title: 'Reset your Password',
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: ROUTES.ONBOARDING,
    element: <OnboardingPage />,
    title: 'Onboarding',
  },
  {
    path: ROUTES.DASHBOARD,
    element: <DashboardPage />,
    title: 'Dashboard',
  },
  {
    path: ROUTES.ORGS,
    element: <OrganizationsPage />,
    title: 'Organizations',
  },
];

export const publicRoutes: IRoute[] = [];

export const generateRoutes = (routes: IRoute[]) => {
  return routes.map(({ path, element, title, ...rest }) => {
    const Comp = () => (
      <>
        <Helmet>
          <title>{title} | Poly - Agile Project Management</title>
        </Helmet>
        {element}
      </>
    );

    return <Route key={path} path={path} Component={Comp} {...rest} />;
  });
};
