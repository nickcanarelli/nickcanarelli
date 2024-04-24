/** @type {import("prettier").Config} */

module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn'],
  /**
   * The "tailwindConfig" path is resolved relative to config.tailwindConfig.
   * Your local .prettierrc.js must specify that config.tailwindConfig=__dirname or its location.
   */
  tailwindConfig: './tailwind.config.ts',
}
