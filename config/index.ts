export type Config = {
  app: {
    env: string;
    name: string;
    origin: string;
    hostname: string;
  };
};

export const config = JSON.parse(import.meta.env.VITE_CONFIG);
