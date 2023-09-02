import { ToastProperties, useToast } from '@/hooks';
import { ApolloProvider } from '@apollo/client';
import { useCallback, useMemo } from 'react';
import { client } from './client';

interface Properties extends React.PropsWithChildren {}

export const PolyApolloProvider: React.FC<Properties> = ({ children }) => {
  const { toast } = useToast();
  const showToast = useCallback((payload: ToastProperties) => toast(payload), []);

  const apolloClient = useMemo(() => client(showToast), []);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
