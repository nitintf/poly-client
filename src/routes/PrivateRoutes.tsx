import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useUser } from '@/store';
import { useMeQuery } from '@/graphql/generated';
import { PageLoader } from '@/components/atoms/PageLoader';
import { SessionExpiredDialog } from '@/components/dialogs/SessionExpiredDialog';

export const PrivateRoutes = () => {
  const { token } = useUser();

  const { data, loading, error } = useMeQuery({
    skip: !token,
  });

  if (loading) {
    return <PageLoader />;
  }

  if (error) {
    return <SessionExpiredDialog />;
  }

  return data?.me ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};
