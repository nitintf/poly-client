import { ROUTES } from '@/constants/routes';
import { useUser } from '@/store';
import { Navigate, useSearchParams } from 'react-router-dom';

const AuthCallbackPage = () => {
  const [searchParameters] = useSearchParams();

  const { setToken, token } = useUser();

  const authToken = searchParameters.get('auth_token');
  const isNewUser = searchParameters.get('onboarding');

  if (authToken) {
    searchParameters.delete('auth_token');
    setToken(authToken);
    return <Navigate to={isNewUser === 'true' ? ROUTES.ONBOARDING : ROUTES.DASHBOARD} />;
  }

  if (token) {
    return <Navigate to={ROUTES.DASHBOARD} />;
  }
  return <Navigate to={ROUTES.LOGIN} />;
};

export default AuthCallbackPage;
