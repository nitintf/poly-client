import cn from 'classnames';
import welcomeAnimation from '@/assets/animations/welcome.json';
import successAnimation from '@/assets/animations/success.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { KeyboardEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Undo2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const STEPS = {
  WELCOME: 'WELCOME',
  ORG_NAME: 'ORG_NAME',
  ROLE: 'ROLE',
  USER_PHONE_NUMBER: 'USER_PHONE_NUMBER',
  FINISH: 'FINISH',
};

const getInputStyle = () =>
  cn(
    'w-full',
    'text-5xl',
    'font-semibold',
    'bg-transparent',
    'text-foreground',
    'placeholder:text-gray-300',
    'text-start',
    'caret-gray-300',
    'focus:outline-none',
    'border-none',
    'focus-visible:ring-0',
    'rounded-none',
    'py-10',
  );

const getStepStyle = (step: string, name: string) => {
  let style = cn('flex', 'flex-col', 'space-y-10', 'w-full', 'mb-20', 'items-start');

  if (step !== name) {
    style = cn(style, 'hidden');
  }

  return style;
};

const Wrapper = ({
  title,
  children,
  onNext,
  currentStep,
  step,
  error,
  isLoading,
  goBack,
}: {
  title: string;
  step: string;
  children: React.ReactNode;
  currentStep: string;
  onNext?: () => void;
  goBack: () => void;
  error?: any;
  isLoading?: boolean;
}) => {
  return (
    <div className={cn(getStepStyle(currentStep, step), 'animate-fade-left', 'w-full')}>
      <button className="font-medium flex items-center" type="button" onClick={goBack}>
        <Undo2 className="w-4 h-4 mr-3" /> Back
      </button>
      <h1 className="text-3xl font-medium text-foreground ">{title}</h1>
      {children}
      <div className="space-x-5">
        <Button
          type="button"
          isLoading={isLoading}
          className="!rounded-full"
          onClick={onNext}
          disabled={error}
        >
          Continue
        </Button>
        <span className="text-gray-400">or press Enter</span>
      </div>
    </div>
  );
};

export const OnboardingSteps = () => {
  const { t } = useTranslation();

  const [step, setStep] = useState(STEPS.WELCOME);

  const goNext = () => {
    const current = Object.keys(STEPS).indexOf(step);
    const next = Object.keys(STEPS)[current + 1];

    setStep(next);
  };

  const goBack = () => {
    const current = Object.keys(STEPS).indexOf(step);
    const next = Object.keys(STEPS)[current - 1];

    setStep(next);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>,
    error?: boolean,
    onNext?: () => void,
  ) => {
    if (event.key === 'Enter' && !error) {
      if (onNext) {
        onNext();
      } else {
        goNext();
      }
    }

    if (event.key === 'Escape') {
      goBack();
    }
  };

  const isTheCurrentStep = (name: string) => step === name;

  return (
    <main className="h-full flex items-center justify-center">
      <div
        className={cn(
          getStepStyle(step, STEPS.WELCOME),
          'animate-fade-down',
          'items-center',
          'justify-center',
        )}
      >
        <div className="items-center flex flex-col">
          <Player src={welcomeAnimation} autoplay loop className="w-56 sm:w-96 " />
          <h1 className="text-3xl font-semibold text-foreground mb-5  mt-16 text-center">
            Welcome to Poly, let&apos;s get started?
          </h1>
          <p className="text-center text-gray-400 text-sm sm:text-base max-w-xl">
            We will ask you a few questions to set up your account. Don&apos;t worry, it will take
            less than 5 minutes.
          </p>
        </div>

        <Button type="button" className="!rounded-full px-8 text-md" onClick={() => goNext()}>
          Start
        </Button>
        <p className="text-center text-gray-400 text-sm  max-w-xs sm:max-w-md">
          Remember, you can change all of this later whenever you want.
        </p>
      </div>

      {isTheCurrentStep(STEPS.ORG_NAME) && (
        <Wrapper
          title="Your Organization Name"
          step={STEPS.ORG_NAME}
          currentStep={step}
          goBack={goBack}
          onNext={goNext}
        >
          <div className="w-full">
            <Input
              id="name"
              name="name"
              className={getInputStyle()}
              placeholder="Type here"
              onKeyDown={(event) => handleKeyDown(event)}
              autoFocus
            />
          </div>
        </Wrapper>
      )}

      {isTheCurrentStep(STEPS.ROLE) && (
        <Wrapper
          title="What's your role?"
          step={STEPS.ROLE}
          currentStep={step}
          goBack={goBack}
          onNext={goNext}
        >
          <div className="w-full">
            <Input
              id="name"
              name="name"
              className={getInputStyle()}
              placeholder="Type here"
              onKeyDown={(event) => handleKeyDown(event)}
              autoFocus
            />
          </div>
        </Wrapper>
      )}

      {isTheCurrentStep(STEPS.USER_PHONE_NUMBER) && (
        <Wrapper
          title={"What's your phone number?"}
          step={STEPS.USER_PHONE_NUMBER}
          currentStep={step}
          goBack={goBack}
          onNext={goNext}
        >
          <div className="w-full">
            <Input
              name="phone"
              inputMode="numeric"
              className={getInputStyle()}
              placeholder="Type here"
              onKeyDown={(event) => handleKeyDown(event)}
              autoFocus
              // mask="+{55} (00) 00000-0000"
            />
          </div>
        </Wrapper>
      )}

      {/* {isTheCurrentStep(STEPS.COMPANY_NAME) && (
        <Wrapper
          title={t('@Steps.whats-your-company-name')}
          step={STEPS.COMPANY_NAME}
          error={!values.company_name.trim() || !!errors?.company_name}
        >
          <div className="w-full">
            <Input
              name="company_name"
              className={getInputStyle()}
              placeholder={t('@Steps.type-here')}
              onKeyDown={(e) =>
                handleKeyDown(e, !values.company_name.trim() || !!errors?.company_name)
              }
              autoFocus
            />
          </div>
        </Wrapper>
      )} */}

      {/* {isTheCurrentStep(STEPS.COMPANY_SLUG) && (
        <Wrapper
          title={t('@Steps.whats-your-company-slug')}
          step={STEPS.COMPANY_SLUG}
          error={!values.slug.trim() || !!errors?.slug}
          onNext={handleSubmit}
        >
          <div className="flex items-center">
            <Input
              name="slug"
              maxLength={20}
              className={getInputStyle()}
              onChange={(e) => setFieldValue('slug', e.target.value.toLowerCase())}
              placeholder={t('@Steps.type-here')}
              onKeyDown={(e) =>
                handleKeyDown(e, !values.slug.trim() || !!errors?.slug, handleSubmit)
              }
              autoFocus
            />
          </div>
          <p className="text-gray-400 text-md max-w-4xl">{t('@Steps.slug-information')}</p>
          <p className="text-gray-400">
            {t('@Steps.your-url-will-be')}
            <b className="font-medium text-gray-900 ml-2">https://{values.slug}.horarioz.com</b>
          </p>
        </Wrapper>
      )}  */}

      {isTheCurrentStep(STEPS.FINISH) && (
        <div className={cn(getStepStyle(step, STEPS.FINISH), 'items-center', 'animate-fade-up')}>
          <div className="items-center flex flex-col pb-40">
            <Player src={successAnimation} controls autoplay loop className="w-56 sm:w-70" />
            <h1 className="text-3xl font-semibold text-foreground mb-7 mt-5 text-center">
              You&apos;re done!
            </h1>
            <p className="text-center text-gray-400 text-sm sm:text-base max-w-xl mb-12">
              You have answered all the questions. Thank you!
            </p>
            <Button
              aria-label={t('@Steps.go-to-my-dashboard')}
              type="button"
              className="!rounded-full col-span-3 w-80 text-md"
              onClick={() => window.location.reload()}
            >
              Go to my dashboard
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};
