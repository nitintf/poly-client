import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { useUser } from '~/store';
import { config } from 'config';

const errorHandler = (error: ErrorResponse) => {
  if (error?.networkError) {
    //
  }

  if (error?.graphQLErrors?.length) {
    for (const graphQLError of error.graphQLErrors) {
      switch (graphQLError.message) {
        case 'Unauthorized': {
          if (!window.location.pathname.includes('/signin')) {
            window.location.href = '/signin';
          }
          break;
        }
        case 'Forbidden': {
          break;
        }
        default: {
          break;
        }
      }
    }
  }
};

const authLink = setContext((_, { headers }) => {
  const { token } = useUser.getState();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const uploadLink: any = createUploadLink({
  uri: `${config.app.origin}/graphql`,
});

export const client = new ApolloClient({
  link: ApolloLink.from([onError(errorHandler), authLink, uploadLink]),
  cache: new InMemoryCache({ addTypename: false }),
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});
