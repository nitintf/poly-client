import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  documents: 'src/**/*.graphql',
  config: {
    scalars: {
      Long: 'number',
      BigDecimal: 'number',
      Date: 'Date',
      JSONObject: 'any',
      Upload: 'File',
    },
  },
  generates: {
    'src/graphql/generated/schemas.ts': {
      plugins: [
        'typescript',
        {
          add: {
            content: [
              'import { ReadStream } from "fs";',
              'interface GraphQLFileUpload {',
              '  filename: string;',
              '  mimetype: string;',
              '  encoding: string;',
              '  createReadStream( options?:{ encoding?: string, highWaterMark?: number } ): ReadStream;',
              '}',
            ],
          },
        },
        'typescript-resolvers',
        'typescript-validation-schema',
        'jsdoc',
        './tools/graphql/typedefs.cjs',
      ],
      config: {
        strictScalars: true,
        schema: 'zod',
      },
    },
    'src/graphql/generated/operations.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './schemas',
      },
      plugins: ['typescript-operations', 'jsdoc'],
    },
    'src/graphql/generated/hooks.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './operations',
      },
      plugins: ['typescript-react-apollo', 'jsdoc'],
      config: {
        withHOC: false,
        withComponent: false,
        withHooks: true,
        withMutationFn: true,
        withRefetchFn: true,
      },
    },
    'src/graphql/generated/schemas.graphql': {
      plugins: ['schema-ast'],
    },
    'graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix', 'prettier --write'],
  },
};

export default config;
