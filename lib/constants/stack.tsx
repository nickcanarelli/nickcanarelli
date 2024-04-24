import {
  AWSLogo,
  CSSLogo,
  CypressLogo,
  DynamoDBLogo,
  ESLintLogo,
  FigmaLogo,
  GitHubLogo,
  GitLogo,
  HTML5Logo,
  JavascriptLogo,
  JestLogo,
  MongoDBLogo,
  NextJSLogo,
  NodeLogo,
  PlaywrightLogo,
  PrettierLogo,
  ReactLogo,
  RemixLogo,
  SassLogo,
  StorybookLogo,
  TailwindLogo,
  TurborepoLogo,
  TypescriptLogo,
  ViteLogo,
  WebpackLogo,
  WordpressLogo,
} from '~/assets/logos'

const stack = [
  {
    id: 'react',
    name: 'React',
    logo: <ReactLogo />,
  },
  {
    id: 'next',
    name: 'Next.js',
    logo: <NextJSLogo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'remix',
    name: 'Remix',
    logo: <RemixLogo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'typescript',
    name: 'Typescript',
    logo: <TypescriptLogo />,
  },
  {
    id: 'javascript',
    name: 'Javascript',
    logo: <JavascriptLogo />,
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    logo: <MongoDBLogo />,
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    logo: <TailwindLogo />,
  },
  {
    id: 'figma',
    name: 'Figma',
    logo: <FigmaLogo />,
  },
  {
    id: 'dynamodb',
    name: 'DynamoDB',
    logo: <DynamoDBLogo />,
  },
  {
    id: 'aws',
    name: 'AWS',
    logo: <AWSLogo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'git',
    name: 'Git',
    logo: <GitLogo />,
  },
  {
    id: 'node',
    name: 'Node',
    logo: <NodeLogo />,
  },
  {
    id: 'cypress',
    name: 'Cypress',
    logo: <CypressLogo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'playwright',
    name: 'Playwright',
    logo: <PlaywrightLogo />,
  },
  {
    id: 'jest',
    name: 'Jest',
    logo: <JestLogo />,
  },
  {
    id: 'vite',
    name: 'Vite',
    logo: <ViteLogo />,
  },
  {
    id: 'turborepo',
    name: 'Turborepo',
    logo: <TurborepoLogo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'github',
    name: 'Github',
    logo: <GitHubLogo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'prettier',
    name: 'Prettier',
    logo: <PrettierLogo />,
  },
  {
    id: 'webpack',
    name: 'Webpack',
    logo: <WebpackLogo />,
  },
  {
    id: 'storybook',
    name: 'Storybook',
    logo: <StorybookLogo />,
  },
  {
    id: 'eslint',
    name: 'ESLint',
    logo: <ESLintLogo />,
  },
  {
    id: 'wordpress',
    name: 'Wordpress',
    logo: <WordpressLogo />,
  },
  {
    id: 'html5',
    name: 'HTML5',
    logo: <HTML5Logo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'css',
    name: 'CSS',
    logo: <CSSLogo fill='rgb(var(--color-text-primary) / 1)' />,
  },
  {
    id: 'sass',
    name: 'Sass',
    logo: <SassLogo />,
  },
]

export default stack
