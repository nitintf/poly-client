module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'block-no-empty': true,
    'color-named': 'never',
    'comment-no-empty': true,
    indentation: 2,
    'max-nesting-depth': 10,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': '^.*$',
    'keyframes-name-pattern': '^.*$',
    'selector-max-compound-selectors': 10,
    'selector-max-id': 10,
    'string-quotes': 'single',
    'declaration-colon-newline-after': null,
    'selector-no-qualifying-type': null,
    'value-keyword-case': ['lower', { ignoreKeywords: ['dummyValue'] }],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['grid-template'] },
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance'],
      },
    ],
    'custom-property-pattern': null,
  },
};
