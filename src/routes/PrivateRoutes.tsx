import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useUser } from '@/store';
import { useMeQuery } from '@/graphql/generated';
import { PageLoader } from '@/components/atoms/PageLoader';
import { SessionExpiredDialog } from '@/components/dialogs/SessionExpiredDialog';
import { config } from '@/config';

export const PrivateRoutes = () => {
  const { token } = useUser();
  const { pathname } = useLocation();
  const redirectRoute = `${ROUTES.LOGIN}/${
    pathname === '/' ? '' : `?continue=${config.app.url}${pathname}`
  }`;

  const { data, loading, error } = useMeQuery({
    skip: !token,
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <SessionExpiredDialog />;
  }

  return data?.me ? <Outlet /> : <Navigate to={redirectRoute} />;
};
