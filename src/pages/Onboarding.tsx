import { ReactComponent as PolyLogo } from '@/assets/svgs/logo.svg';
import { OnboardingSteps } from '@/components/OnboardingSteps';

const OnboardingPage = () => {
  return (
    <main className="w-full min-h-screen flex justify-center">
      <div className="w-full sm:w-3/4 px-4 sm:px-0 justify-between flex flex-col py-5">
        <header className=" align-middle items-center justify-between pt-1 sm:pt-10 hidden sm:flex ">
          <PolyLogo />
        </header>
        <OnboardingSteps />
      </div>
    </main>
  );
};

export default OnboardingPage;
