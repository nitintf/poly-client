import { ResetPasswordForm } from '@/components/forms/ResetPassword';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
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
          <CardTitle>Reset your password</CardTitle>
          <CardDescription className="!mt-4">
            Reignite your journey with Poly – Your Agile Project Management Companion. Reset your
            password and continue leading with precision!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default ResetPassword;
