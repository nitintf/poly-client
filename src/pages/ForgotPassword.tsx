import { ForgotPasswordForm } from '@/components/forms/ForgotPassword';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
          <CardTitle>Forgot your password?</CardTitle>
          <CardDescription className="!mt-4">
            Don&apos;t fret! Just type in your email and we will send you a link to reset your
            password!
          </CardDescription>
          <CardDescription>
            If you can&apos;t access your email, you can try
            <Button variant="link" className="!p-0 !h-0">
              Contacting Support
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default ForgotPassword;
