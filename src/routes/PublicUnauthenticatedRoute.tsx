import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import { useUser } from '~/store';

export const PublicUnauthenticatedRoutes = () => {
  const { token } = useUser();

  return token ? <Navigate to={ROUTES.DASHBOARD} /> : <Outlet />;
};
