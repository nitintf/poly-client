import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import { useUser } from '@/store';
import { config } from '@/config';
import { ToastProperties } from '@/hooks';

const getErrorHandler =
  (showError: (properties: ToastProperties) => void) => (error: ErrorResponse) => {
    if (error.networkError) {
      showError({
        variant: 'destructive',
        title: 'Oops! Our Servers Need Coffee ☕',
        description:
          'Something went wrong on our end, but our team is already on it. Please try again in a moment.',
      });
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

export const client = (showError: (properties: ToastProperties) => void) => {
  return new ApolloClient({
    link: ApolloLink.from([onError(getErrorHandler(showError)), authLink, uploadLink]),
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
};
