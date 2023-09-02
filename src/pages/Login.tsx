import { PolyLogo } from '@/components/atoms/PolyLogo';
import { LoginForm } from '@/components/forms/LoginForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/constants/routes';
import { Link, useSearchParams } from 'react-router-dom';
import { AlertDestructive } from '@/components/atoms/Alert';

const LoginPage = () => {
  const [searchParameters] = useSearchParams();
  const loginError = searchParameters.get('error');

  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <PolyLogo />
      <Card className="sm:max-w-md w-full">
        <CardHeader className="!pb-2">
          <CardTitle>Login To Your Account</CardTitle>
          <CardDescription>
            Start your projects in seconds. New to Poly?
            <Link to={ROUTES.SIGNUP}>
              <Button variant="link" className="px-1">
                Sign up here
              </Button>
            </Link>
          </CardDescription>
          {loginError && <AlertDestructive title="Error" description={loginError} />}
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
