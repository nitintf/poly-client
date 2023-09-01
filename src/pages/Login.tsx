import { LoginForm } from '@/components/forms/LoginForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link
        to="/"
        className="flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white w-min"
      >
        <img
          className="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Poly
      </Link>
      <Card className="sm:max-w-md w-full">
        <CardHeader>
          <CardTitle>Login To Your Account</CardTitle>
          <CardDescription>
            Start your projects in seconds. New to Poly?
            <Link to={ROUTES.SIGNUP}>
              <Button variant="link" className="px-1">
                Sign up here
              </Button>
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default LoginPage;
