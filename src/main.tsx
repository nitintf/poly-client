import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
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
} from '~/routes';

import '~/index.scss';
import { setupI18n } from '~/lib/i18n';
import { client } from '~/graphql/client';
import App from './App';

const i18n = setupI18n();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<PrivateRoutes />}>{generateRoutes(privateRoutes)}</Route>

      <Route element={<PublicUnauthenticatedRoutes />}>
        {generateRoutes(publicUnauthenticatedRoutes)}
      </Route>

      <Route element={<PublicRoutes />}>{generateRoutes(publicRoutes)}</Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
