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
    <main className="flex items-center h-screen gap-x-40 mx-auto justify-normal">
      <Flex className="w-full h-full items-stretch flex-wrap xl:flex-nowrap">
        <section className="w-full xl:w-2/4 py-16 px-8 sm:px-6 md:px-20">
          <Flex>
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
        <section className="flex px-10 py-16 w-full h-full xl:w-2/4 bg-primary">
          <Flex direction="column" className="gap-y-4 justify-self-center">
            <Link
              to="/"
              className="flex gap-x-2 self-start text-3xl font-semibold text-white w-min"
            >
              <PolyLogo />
              Poly
            </Link>
            <h4 className="font-extrabold self-start tracking-tighter w-full max-w-7xl text-4xl text-white">
              <Balancer>
                Your Agile Project Management Companion - Seamless Collaboration, Infinite
                Possibilities
              </Balancer>
            </h4>
            <p className="text-white w-full self-start max-w-7xl">
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
