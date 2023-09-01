import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import { useUser } from '@/store';
import { config } from '@/config';

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
  link: ApolloLink.from([authLink, uploadLink]),
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
