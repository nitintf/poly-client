import { PageLoader } from '@/components/atoms/PageLoader';
import { ROUTES } from '@/constants/routes';
import { useMeQuery } from '@/graphql/generated';
import { useUser } from '@/store';
import { useEffect } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

const AuthCallbackPage = () => {
  const [searchParameters] = useSearchParams();
  const authToken = searchParameters.get('auth_token');
  const continueTo = searchParameters.get('continue');

  const { setToken, token } = useUser();

  const { loading, data } = useMeQuery({
    skip: !!token,
    context: {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  });

  useEffect(() => {
    if (!token && authToken && data?.me) {
      searchParameters.delete('auth_token');
      setToken(authToken);
    }
  }, [token, authToken, data]);

  if (token) {
    if (continueTo) {
      const parsedUrl = new URL(continueTo);
      const pathAfterHost = parsedUrl.pathname.slice(1);
      return <Navigate to={`/${pathAfterHost}`} replace />;
    }
    return <Navigate to={ROUTES.DASHBOARD} />;
  }

  if (loading) {
    return <PageLoader />;
  }

  return <Navigate to={ROUTES.LOGIN} />;
};

export default AuthCallbackPage;
