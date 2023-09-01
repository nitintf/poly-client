import Sentry, { BrowserTracing } from '@sentry/react';
import { config } from '@/config';

export const setupSentry = (options: Sentry.BrowserOptions = {}) => {
  return Sentry.init({
    // dsn: 'https://74ca01b0aa7b4062a7989906daad0903@o4504056162156544.ingest.sentry.io/4504056164384768', // production
    // dsn: 'https://78637334c5784fddb0962691555af84c@o4504056162156544.ingest.sentry.io/4504056182013952', // development
    dsn: config.app.hostname,
    integrations: [new BrowserTracing()],

    maxBreadcrumbs: 50,
    debug: false,

    tracesSampleRate: 1,
    ...options,
  });
};
