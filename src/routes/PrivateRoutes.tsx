import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '~/constants/routes';
import { useUser } from '~/store';

export const PrivateRoutes = () => {
  const { token } = useUser();

  return token ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};
