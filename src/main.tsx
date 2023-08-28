import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';

import '~/index.scss';
import { setupI18n } from '~/lib/i18n';
import { client } from '~/graphql/client';
import { router } from '~/routes';

const i18n = setupI18n();

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
