export type Config = {
  app: {
    env: string;
    name: string;
    origin: string;
    hostname: string;
  };
  api: {
    url: string;
  };
};

export const config: Config = JSON.parse(import.meta.env.VITE_CONFIG);
