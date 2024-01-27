/** @type {import('prettier-plugin-tailwindcss').PluginOptions} */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/

/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/
const config = {
  arrowParens: 'always',
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config',
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)',
    '^(next/(.*)$)|^(next$)',
    '^(expo(.*)$)|^(expo$)',
    '<THIRD_PARTY_MODULES>',
    '^~/utils/(.*)$',
    '^~/components/(.*)$',
    '^~/styles/(.*)$',
    '^~/(.*)$',
    '^[./]',
    '',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};

export default config;
