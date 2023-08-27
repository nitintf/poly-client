import type { CodegenConfig } from '@graphql-codegen/cli';
import baseCodegenConfig from './tools/graphql/codegen';

const config: CodegenConfig = {
  ...baseCodegenConfig,
  schema: 'http://localhost:8080/graphql',
};

export default config;
