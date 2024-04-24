/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  // parserOptions: {
  //   ecmaVersion: "latest",
  //   sourceType: "module",
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  extends: ['plugin:eslint-comments/recommended', 'prettier'],

  plugins: [
    'simple-import-sort',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-promise',
    'react-hooks',
  ],
  /**
   * Manually authored .d.ts files are generally used to describe external APIs that are not expected
   * to follow our coding conventions. Linting those files tends to produce a lot of spurious suppressions,
   * so we simply ignore them.
   */
  ignorePatterns: ['*.d.ts', '!**/.server', '!**/.client'],
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
  },
  overrides: [
    // // React
    // {
    //   files: ["**/*.{js,jsx,ts,tsx}"],
    //   plugins: ["react", "jsx-a11y"],
    //   extends: [
    //     "plugin:react/recommended",
    //     "plugin:react/jsx-runtime",
    //     "plugin:react-hooks/recommended",
    //     "plugin:jsx-a11y/recommended",
    //   ],
    //   settings: {
    //     react: {
    //       version: "detect",
    //     },
    //     formComponents: ["Form"],
    //     linkComponents: [
    //       { name: "Link", linkAttribute: "to" },
    //       { name: "NavLink", linkAttribute: "to" },
    //     ],
    //     "import/resolver": {
    //       typescript: {},
    //     },
    //   },
    // },

    // // Typescript
    // {
    //   files: ["**/*.{ts,tsx}"],
    //   plugins: ["@typescript-eslint", "import"],
    //   parser: "@typescript-eslint/parser",
    //   settings: {
    //     "import/internal-regex": "^~/",
    //     "import/resolver": {
    //       node: {
    //         extensions: [".ts", ".tsx"],
    //       },
    //       typescript: {
    //         alwaysTryTypes: true,
    //       },
    //     },
    //   },
    //   extends: [
    //     "plugin:@typescript-eslint/recommended",
    //     "plugin:import/recommended",
    //     "plugin:import/typescript",
    //   ],
    // },
    {
      files: ['*.js', '*.mjs'],
      parser: 'espree', // This is the default parser of ESLint
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    {
      /**
       * Overrides that apply to TypeScript files only
       */
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        /**
         * The "project" path is resolved relative to parserOptions.tsconfigRootDir.
         * Your local .eslintrc.js must specify that parserOptions.tsconfigRootDir=__dirname.
         */
        project: './tsconfig.json',

        /**
         * Allow parsing of newer ECMAScript constructs used in TypeScript source code.  Although tsconfig.json
         * may allow only a small subset of ES2018 features, this liberal setting ensures that ESLint will correctly
         * parse whatever is encountered.
         */
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        /**
         * RATIONALE:     Promotes consistency in function overloads
         */
        '@typescript-eslint/adjacent-overload-signatures': 'warn',

        /**
         * RATIONALE:     By default, these are banned: String, Boolean, Number, Object, Symbol
         */
        '@typescript-eslint/ban-types': [
          'warn',
          {
            extendDefaults: false, // (the complete list is in this file)
            types: {
              String: {
                message: 'Use "string" instead',
                fixWith: 'string',
              },
              Boolean: {
                message: 'Use "boolean" instead',
                fixWith: 'boolean',
              },
              Number: {
                message: 'Use "number" instead',
                fixWith: 'number',
              },
              Object: {
                message: 'Use "object" instead, or else define a proper TypeScript type:',
              },
              Symbol: {
                message: 'Use "symbol" instead',
                fixWith: 'symbol',
              },
              Function: {
                message: [
                  'The "Function" type accepts any function-like value.',
                  'It provides no type safety when calling the function, which can be a common source of bugs.',
                  'It also accepts things like class declarations, which will throw at runtime as they will not be called with "new".',
                  'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
                ].join('\n'),
              },
            },
          },
        ],

        /**
         * RATIONALE:     We require "x as number" instead of "<number>x" to avoid conflicts with JSX.
         */
        '@typescript-eslint/consistent-type-assertions': 'warn',

        /**
         * RATIONALE:     Types offer everything that interfaces do, and more (e.g. union types, intersection types, etc.)
         *                and when used consistently, they make code more readable.
         */
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

        /**
         * RATIONALE:     Object-oriented programming organizes code into "classes" that associate
         *                data structures (the class's fields) and the operations performed on those
         *                data structures (the class's members).  Studying the fields often reveals the "idea"
         *                behind a class.  The choice of which class a field belongs to may greatly impact
         *                the code readability and complexity.  Thus, we group the fields prominently at the top
         *                of the class declaration.  We do NOT enforce sorting based on public/protected/private
         *                or static/instance, because these designations tend to change as code evolves, and
         *                reordering methods produces spurious diffs that make PRs hard to read.  For classes
         *                with lots of methods, alphabetization is probably a more useful secondary ordering.
         */
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/member-ordering': [
          'warn',
          {
            default: 'never',
            classes: ['field', 'constructor', 'method'],
          },
        ],

        /**
         * NOTE: This new rule replaces several deprecated rules from @typescript-eslint/eslint-plugin@2.3.3:
         *
         * - @typescript-eslint/camelcase
         * - @typescript-eslint/class-name-casing
         * - @typescript-eslint/interface-name-prefix
         * - @typescript-eslint/member-naming
         *
         * Docs: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
         */
        // '@typescript-eslint/naming-convention': [
        //   'warn',
        //   ...macros.expandNamingConventionSelectors([
        //     {
        //       /**
        //        * We should be stricter about 'enumMember', but it often functions legitimately as an ad hoc namespace.
        //        */
        //       selectors: ['variable', 'enumMember', 'function'],

        //       format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        //       leadingUnderscore: 'allow',

        //       filter: {
        //         regex: [
        //           /**
        //            * This is a special exception for naming patterns that use an underscore to separate two camel-cased parts.
        //            * Example:  "checkBox1_onChanged" or "_checkBox1_onChanged"
        //            */
        //           '^_?[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*_[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*$',
        //         ]
        //           .map((x) => `(${x})`)
        //           .join('|'),
        //         match: false,
        //       },
        //     },
        //     {
        //       selectors: ['parameter'],

        //       format: ['camelCase'],

        //       filter: {
        //         regex: [
        //           /**
        //            * Silently accept names with a double-underscore prefix; we would like to be more strict about this,
        //            * pending a fix for https://github.com/typescript-eslint/typescript-eslint/issues/2240
        //            */
        //           '^__',
        //         ]
        //           .map((x) => `(${x})`)
        //           .join('|'),
        //         match: false,
        //       },
        //     },

        //     /**
        //      * Genuine properties
        //      */
        //     {
        //       selectors: ['parameterProperty', 'accessor'],
        //       enforceLeadingUnderscoreWhenPrivate: true,
        //       format: ['camelCase', 'UPPER_CASE'],
        //       filter: {
        //         regex: [
        //           /**
        //            * Silently accept names with a double-underscore prefix; we would like to be more strict about this,
        //            * pending a fix for https://github.com/typescript-eslint/typescript-eslint/issues/2240
        //            */
        //           '^__',
        //           /**
        //            * Ignore quoted identifiers such as { "X+Y": 123 }.  Currently @typescript-eslint/naming-convention
        //            * cannot detect whether an identifier is quoted or not, so we simply assume that it is quoted
        //            * if-and-only-if it contains characters that require quoting.
        //            */
        //           '[^a-zA-Z0-9_]',
        //           /**
        //            * This is a special exception for naming patterns that use an underscore to separate two camel-cased parts.
        //            * Example:  "checkBox1_onChanged" or "_checkBox1_onChanged"
        //            */
        //           '^_?[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*_[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*$',
        //         ]
        //           .map((x) => `(${x})`)
        //           .join('|'),
        //         match: false,
        //       },
        //     },

        //     /**
        //      * Properties that incorrectly match other contexts
        //      * See issue https://github.com/typescript-eslint/typescript-eslint/issues/2244
        //      */
        //     {
        //       selectors: ['property'],
        //       enforceLeadingUnderscoreWhenPrivate: true,
        //       /**
        //        * The @typescript-eslint/naming-convention "property" selector matches cases like this:
        //        *
        //        *     someLegacyApiWeCannotChange.invokeMethod({ SomeProperty: 123 });
        //        *
        //        * and this:
        //        *
        //        *     const { CONSTANT1, CONSTANT2 } = someNamespace.constants;
        //        *
        //        * Thus for now "property" is more like a variable than a class member.
        //        */
        //       format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        //       leadingUnderscore: 'allow',

        //       filter: {
        //         regex: [
        //           /**
        //            * Silently accept names with a double-underscore prefix; we would like to be more strict about this,
        //            * pending a fix for https://github.com/typescript-eslint/typescript-eslint/issues/2240
        //            */
        //           '^__',
        //           /**
        //            * Ignore quoted identifiers such as { "X+Y": 123 }.  Currently @typescript-eslint/naming-convention
        //            * cannot detect whether an identifier is quoted or not, so we simply assume that it is quoted
        //            * if-and-only-if it contains characters that require quoting.
        //            */
        //           '[^a-zA-Z0-9_]',
        //           /**
        //            * This is a special exception for naming patterns that use an underscore to separate two camel-cased parts.
        //            * Example:  "checkBox1_onChanged" or "_checkBox1_onChanged"
        //            */
        //           '^_?[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*_[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*$',
        //         ]
        //           .map((x) => `(${x})`)
        //           .join('|'),
        //         match: false,
        //       },
        //     },

        //     {
        //       selectors: ['method'],
        //       enforceLeadingUnderscoreWhenPrivate: true,
        //       /**
        //        * A PascalCase method can arise somewhat legitimately in this way:
        //        *
        //        *     class MyClass {
        //        *         public static MyReactButton(props: IButtonProps): JSX.Element {
        //        *             . . .
        //        *         }
        //        *     }
        //        */
        //       format: ['camelCase', 'PascalCase'],
        //       leadingUnderscore: 'allow',
        //       filter: {
        //         regex: [
        //           /**
        //            * Silently accept names with a double-underscore prefix; we would like to be more strict about this,
        //            * pending a fix for https://github.com/typescript-eslint/typescript-eslint/issues/2240
        //            */
        //           '^__',
        //           /**
        //            * This is a special exception for naming patterns that use an underscore to separate two camel-cased parts.
        //            * Example:  "checkBox1_onChanged" or "_checkBox1_onChanged"
        //            */
        //           '^_?[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*_[a-z][a-z0-9]*([A-Z][a-z]?[a-z0-9]*)*$',
        //         ]
        //           .map((x) => `(${x})`)
        //           .join('|'),
        //         match: false,
        //       },
        //     },

        //     /**
        //      * Types should use PascalCase
        //      */
        //     {
        //       /**
        //        * Group selector for: class, interface, typeAlias, enum, typeParameter
        //        */
        //       selectors: ['class', 'typeAlias', 'enum', 'typeParameter'],
        //       format: ['PascalCase'],
        //       leadingUnderscore: 'allow',
        //     },
        //     {
        //       selectors: ['typeAlias'],
        //       format: ['PascalCase'],
        //       custom: {
        //         regex: '^_?T[A-Z]',
        //         match: true,
        //       },
        //     },
        //     {
        //       selectors: ['interface'],
        //       /**
        //        * It is very common for a class to implement an interface of the same name.
        //        * For example, the Widget class may implement the IWidget interface.  The "I" prefix
        //        * avoids the need to invent a separate name such as "AbstractWidget" or "WidgetInterface".
        //        * In TypeScript it is also common to declare interfaces that are implemented by primitive
        //        * objects, here the "I" prefix also helps by avoiding spurious conflicts with classes
        //        * by the same name.
        //        */
        //       format: ['PascalCase'],
        //       custom: {
        //         regex: '^_?I[A-Z]',
        //         match: true,
        //       },
        //     },
        //   ]),
        // ],

        /**
         * RATIONALE:     Code is more readable when the type of every variable is immediately obvious.
         *                Even if the compiler may be able to infer a type, this inference will be unavailable
         *                to a person who is reviewing a diff.  This rule makes writing code harder, but writing
         *                code is a much less important activity than reading it.
         */
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: false,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],

        /**
         * RATIONALE:     The "any" keyword disables static type checking, the main benefit of using TypeScript.
         *                This rule should be suppressed only in very special cases such as JSON.stringify()
         *                where the type really can be anything.  Even if the type is flexible, another type
         *                may be more appropriate such as "unknown", "{}", or "Record<k,V>".
         */
        '@typescript-eslint/no-explicit-any': 'warn',

        /**
         * RATIONALE:     Catches a common coding mistake.
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * RATIONALE:     The "namespace" keyword is not recommended for organizing code because JavaScript lacks
         *                a "using" statement to traverse namespaces.  Nested namespaces prevent certain bundler
         *                optimizations.  If you are declaring loose functions/variables, it's better to make them
         *                static members of a class, since classes support property getters and their private
         *                members are accessible by unit tests.  Also, the exercise of choosing a meaningful
         *                class name tends to produce more discoverable APIs: for example, search+replacing
         *                the function "reverse()" is likely to return many false matches, whereas if we always
         *                write "Text.reverse()" is more unique.  For large scale organization, it's recommended
         *                to decompose your code into separate NPM packages, which ensures that component
         *                dependencies are tracked more conscientiously.
         */
        '@typescript-eslint/no-namespace': [
          'warn',
          {
            allowDeclarations: false, // Discourage "namespace" in .ts and .tsx files
            allowDefinitionFiles: false, // Allow it in .d.ts files that describe legacy libraries
          },
        ],

        /**
         * RATIONALE:     Parameter properties provide a shorthand such as "constructor(public title: string)"
         *                that avoids the effort of declaring "title" as a field.  This TypeScript feature makes
         *                code easier to write, but arguably sacrifices readability:  In the notes for
         *                "@typescript-eslint/member-ordering" we pointed out that fields are central to
         *                a class's design, so we wouldn't want to bury them in a constructor signature
         *                just to save some typing.
         */
        '@typescript-eslint/parameter-properties': 'warn',

        /**
         * RATIONALE:     When left in shipping code, unused variables often indicate a mistake.  Dead code may impact performance.
         */
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            /**
             * Unused function arguments often indicate a mistake in JavaScript code.  However in TypeScript code,
             * the compiler catches most of those mistakes, and unused arguments are fairly common for type signatures
             * that are overriding a base class method or implementing an interface.
             */
            args: 'none',
          },
        ],

        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            /**
             * Base ESLint options
             *
             * We set functions=false so that functions can be ordered based on exported/local visibility
             * similar to class methods.  Also the base lint rule incorrectly flags a legitimate case like:
             *
             *     function a(n: number): void {
             *         if (n > 0) {
             *             b(n-1); //   lint error
             *         }
             *     }
             *
             *     function b(n: number): void {
             *         if (n > 0) {
             *             a(n-1);
             *         }
             *     }
             */
            functions: false,
            classes: true,
            variables: true,

            /**
             * TypeScript extensions
             */
            enums: true,
            typedefs: true,
            // ignoreTypeReferences: true
          },
        ],

        /**
         * RATIONALE:     The "module" keyword is deprecated except when describing legacy libraries.
         */
        '@typescript-eslint/prefer-namespace-keyword': 'warn',

        /**
         * RATIONALE:     Prevent ambiguity with Records & Tuples
         */
        '@typescript-eslint/consistent-indexed-object-style': ['warn', 'index-signature'],

        /**
         * RATIONALE:     Force type safety
         */
        '@typescript-eslint/method-signature-style': 'warn',

        /**
         * RATIONALE:     Using `@ts-ignore` to suppress TypeScript compiler errors reduces the
         *                effectiveness of TypeScript overall
         */
        '@typescript-eslint/ban-ts-comment': 'warn',

        /**
         * RATIONALE:     This rule warns if setters are defined without getters, which is probably a mistake.
         */
        'accessor-pairs': 'error',

        /**
         * RATIONALE:     In TypeScript, if you write x["y"] instead of x.y, it disables type checking.
         */
        'dot-notation': [
          'warn',
          {
            allowPattern: '^_',
          },
        ],

        /**
         * RATIONALE:     Prevents situations where a function is called and doesnt return
         */
        curly: ['error', 'all'],

        /**
         * RATIONALE:     Catches a common coding mistake
         */
        'no-implied-eval': 'error',
        'no-label-var': 'error',
        'no-multi-str': 'error',
        'no-return-assign': 'error',
        'no-self-compare': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unused-expressions': 'warn',

        /**
         * RATIONALE:     Catches code that is likely to be incorrect
         */
        eqeqeq: 'error',
        'no-duplicate-case': 'error',
        'no-ex-assign': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-regex-spaces': 'error',
        'no-shadow-restricted-names': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',

        /**
         * RATIONALE:     If you have more than 2,000 lines in a single source file, it's probably time to refactor
         *                or to split up your code.
         */
        'max-lines': ['warn', { max: 2000 }],

        // RATIONALE:
        //

        /**
         * RATIONALE:     "|" and "&" are relatively rare, and are more likely to appear as a mistake when
         *                someone meant "||" or "&&".  (But nobody types the other operators by mistake.)
         */
        'no-bitwise': [
          'warn',
          {
            allow: ['^', '<<', '>>', '>>>', '^=', '<<=', '>>=', '>>>=', '~'],
          },
        ],

        /**
         * RATIONALE:     Deprecated language feature.
         */
        'no-caller': 'error',

        /**
         * RATIONALE:     Eval is a security concern and a performance concern
         */
        'no-eval': 'warn',

        /**
         * RATIONALE:     System types are global and should not be tampered with in a scalable code base.
         *                If two different libraries (or two versions of the same library) both try to modify
         *                a type, only one of them can win.  Polyfills are acceptable because they implement
         *                a standardized interoperable contract, but polyfills are generally coded in plain
         *                JavaScript.
         */
        'no-extend-native': 'error',

        /**
         * RATIONALE:     Eliminates redundant code.
         */
        'no-lone-blocks': 'warn',

        /**
         * RATIONALE:     It's generally a bad practice to call "new Thing()" without assigning the result to
         *                a variable.  Either it's part of an awkward expression like "(new Thing()).doSomething()",
         *                or else implies that the constructor is doing nontrivial computations, which is often
         *                a poor class design.
         */
        'no-new': 'warn',

        /**
         * RATIONALE:     Obsolete language feature that is deprecated.
         */
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-sparse-arrays': 'error',
        'no-with': 'error',

        /**
         * RATIONALE:     Obsolete notation.
         */
        'no-new-wrappers': 'warn',

        /**
         * RATIONALE:     Security risk.
         */
        'no-script-url': 'warn',

        /**
         * RATIONALE:     This avoids statements such as "while (a = next(), a && a.length);" that use
         *                commas to create compound expressions. In general code is more readable if each
         *                step is split onto a separate line. This also makes it easier to set breakpoints
         *                in the debugger.
         */
        'no-sequences': 'error',

        /**
         * RATIONALE:     Although in theory JavaScript allows any possible data type to be thrown as an exception,
         *                such flexibility adds pointless complexity, by requiring every catch block to test
         *                the type of the object that it receives. Whereas if catch blocks can always assume
         *                that their object implements the "Error" contract, then the code is simpler, and
         *                we generally get useful additional information like a call stack.
         */
        'no-throw-literal': 'error',

        /**
         * RATIONALE:     Avoids a potential performance problem.
         */
        'no-useless-concat': 'warn',

        /**
         * RATIONALE:     The "var" keyword is deprecated because of its confusing "hoisting" behavior.
         *                Always use "let" or "const" instead.
         */
        'no-var': 'error',

        /**
         * RATIONALE:     Generally not needed in modern code.
         */
        'no-void': 'error',

        /**
         * RATIONALE:     Makes logic easier to understand, since constants always have a known value
         */
        'prefer-const': 'warn',

        /**
         * RATIONALE:     Catches a common coding mistake where "resolve" and "reject" are confused.
         */
        'promise/param-names': 'error',

        /**
         * RATIONALE:     "Use strict" is redundant when using the TypeScript compiler.
         */
        strict: ['error', 'never'],

        'no-async-promise-executor': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-constant-condition': 'warn',
        'no-control-regex': 'error',
        'no-debugger': 'warn',
        'no-delete-var': 'error',
        'no-empty': 'warn',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'error',
        'no-func-assign': 'warn',
        'no-invalid-regexp': 'error',
        'no-misleading-character-class': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'warn',
        'no-useless-catch': 'warn',
        'require-yield': 'warn',

        'for-direction': 'warn',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-array-constructor': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
    {
      /**
       * For unit tests, we can be a little bit less strict.  The settings below revise the defaults specified above.
       */
      files: [
        /**
         * Test Files
         */
        '*.test.ts',
        '*.test.tsx',
        '*.spec.ts',
        '*.spec.tsx',

        /**
         * Facebook convention
         */
        '**/__mocks__/*.ts',
        '**/__mocks__/*.tsx',
        '**/__tests__/*.ts',
        '**/__tests__/*.tsx',

        /**
         * Microsoft Convention
         */
        '**/test/*.ts',
        '**/test/*.tsx',

        /**
         * Under Convention
         */
        '**/__tests__/*.ts',
        '**/__tests__/*.tsx',
      ],
      rules: {
        /**
         * Unit tests sometimes use a standalone statement like "new Thing(123);" to test a constructor.
         */
        'no-new': 'off',

        /**
         * Jest's mocking API is designed in a way that produces compositional data types that often have
         * no concise description.  Since test code does not ship, and typically does not introduce new
         * concepts or algorithms, the usual arguments for prioritizing readability over writability can be
         * relaxed in this case.
         */
        '@typescript-eslint/typedef': [
          'warn',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: true,
            objectDestructuring: false,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: false, // <--- special case for test files
            variableDeclarationIgnoreFunction: true,
          },
        ],
      },
    },

    // Node
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true,
      },
    },
  ],
}
