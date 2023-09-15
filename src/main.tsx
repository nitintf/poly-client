import './index.css';

import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  privateRoutes,
  publicUnauthenticatedRoutes,
  publicRoutes,
  PrivateRoutes,
  PublicRoutes,
  PublicUnauthenticatedRoutes,
  generateRoutes,
} from '@/routes';

import { setupI18n } from '@/lib/i18n';
import { PolyApolloProvider } from '@/graphql/provider';
import App from '@/App';
import { ROUTES } from '@/constants/routes';
import { ToastProvider } from './components/ui/toast';

const AuthCallbackPage = lazy(() => import('@/pages/AuthCallback'));

const i18n = setupI18n();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<PrivateRoutes />}>{generateRoutes(privateRoutes)}</Route>

      <Route element={<PublicUnauthenticatedRoutes />}>
        {generateRoutes(publicUnauthenticatedRoutes)}
      </Route>

      <Route element={<PublicRoutes />}>{generateRoutes(publicRoutes)}</Route>
      <Route path={ROUTES.AUTH_CALLBACK} element={<AuthCallbackPage />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <PolyApolloProvider>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </PolyApolloProvider>
    </ToastProvider>
  </React.StrictMode>,
);
