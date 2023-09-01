import { SignupForm } from '@/components/forms/SignupForm';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/constants/routes';
import { Link } from 'react-router-dom';
import { Flex } from '@/components/ui/flex';
import { ReactComponent as PolyLogo } from '@/assets/svgs/logo.svg';
import { Balancer } from 'react-wrap-balancer';

const SignUpPage = () => {
  return (
    <main className="flex items-center gap-x-40 py-8 mx-auto md:h-screen lg:py-0 justify-normal">
      <Flex className="w-full flex-col md:flex-row items-stretch">
        <section className="min-w-[49%] h-screen my-auto py-16 px-0 sm:px-6 md:px-20">
          <Flex className="h-full">
            <div>
              <CardHeader className="py-0">
                <CardTitle>Your Best Project Starts here</CardTitle>
                <CardDescription>
                  Already have an account?
                  <Link to={ROUTES.LOGIN}>
                    <Button variant="link" className="px-1">
                      login here
                    </Button>
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SignupForm />
              </CardContent>
            </div>
          </Flex>
        </section>
        <section className="min-w-full md:min-w-[49%] bg-primary hidden lg:inline px-20">
          <Flex direction="column" className="gap-y-4 h-full">
            <Link
              to="/"
              className="flex gap-x-2 items-center text-3xl font-semibold text-white w-min"
            >
              <PolyLogo />
              Poly
            </Link>
            <h4 className="font-extrabold tracking-tighter 2xl:w-2/4 w-full text-4xl text-white xl:text-start text-center">
              <Balancer>
                Your Agile Project Management Companion - Seamless Collaboration, Infinite
                Possibilities
              </Balancer>
            </h4>
            <p className="text-white xl:w-full w-2/4 xl:text-start text-center">
              <Balancer>
                Poly empowers teams to harness the power of agile methodologies, driving
                productivity and unlocking a world of possibilities. Your ultimate solution for
                efficient and effective project management.
              </Balancer>
            </p>
          </Flex>
        </section>
      </Flex>
    </main>
  );
};

export default SignUpPage;
