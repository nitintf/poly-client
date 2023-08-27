import type { CodegenConfig } from '@graphql-codegen/cli';
import baseCodegenConfig from './tools/graphql/codegen';

const config: CodegenConfig = {
  ...baseCodegenConfig,
  schema: 'https://poly-server.nitinp.dev/graphql',
};

export default config;
