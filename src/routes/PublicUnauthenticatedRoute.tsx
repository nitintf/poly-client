import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { useUser } from '@/store';

export const PublicUnauthenticatedRoutes = () => {
  const [searchParameters] = useSearchParams();
  const { token } = useUser();
  const continueTo = searchParameters.get('continue');

  if (token && continueTo) {
    const parsedUrl = new URL(continueTo);
    const pathAfterHost = parsedUrl.pathname.slice(1);

    return <Navigate to={pathAfterHost} />;
  }

  return token ? <Navigate to={ROUTES.DASHBOARD} /> : <Outlet />;
};
