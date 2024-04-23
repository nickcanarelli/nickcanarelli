import { useLoaderData } from "@remix-run/react";
import { motion, useInView } from "framer-motion";
import { DotIcon } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef, memo, useRef } from "react";

import {
  AWSLogo,
  CypressLogo,
  DynamoDBLogo,
  ESLintLogo,
  FigmaLogo,
  GitHubLogo,
  GitLogo,
  JavascriptLogo,
  JestLogo,
  MongoDBLogo,
  NextJSLogo,
  NodeLogo,
  PlaywrightLogo,
  PrettierLogo,
  ReactLogo,
  RemixLogo,
  StorybookLogo,
  TailwindLogo,
  TurborepoLogo,
  TypescriptLogo,
  ViteLogo,
  WebpackLogo,
  WordpressLogo,
} from "~/assets/logos";
import { loader } from "~/routes/_index";
import { cn } from "~/utils";

type TTechStack = ComponentPropsWithoutRef<"div">;

const dimensions = {
  height: 45,
  width: 45,
};

const stack = [
  {
    id: "react",
    name: "React",
    logo: <ReactLogo {...dimensions} />,
  },
  {
    id: "next",
    name: "Next.js",
    logo: (
      <NextJSLogo
        width={85}
        height={55}
        fill="rgb(var(--color-text-primary) / 1)"
      />
    ),
  },
  {
    id: "remix",
    name: "Remix",
    logo: (
      <RemixLogo
        height={55}
        width={55}
        fill="rgb(var(--color-text-primary) / 1)"
      />
    ),
  },
  {
    id: "typescript",
    name: "Typescript",
    logo: <TypescriptLogo {...dimensions} />,
  },
  {
    id: "javascript",
    name: "Javascript",
    logo: <JavascriptLogo {...dimensions} />,
  },
  {
    id: "mongo",
    name: "MongoDB",
    logo: <MongoDBLogo width={31} height={65} />,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    logo: <TailwindLogo width={52} height={32} />,
  },
  {
    id: "figma",
    name: "Figma",
    logo: <FigmaLogo {...dimensions} />,
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    logo: <DynamoDBLogo width={65} height={55} />,
  },
  {
    id: "aws",
    name: "AWS",
    logo: (
      <AWSLogo
        width={65}
        height={55}
        fill="rgb(var(--color-text-primary) / 1)"
      />
    ),
  },
  {
    id: "git",
    name: "Git",
    logo: <GitLogo {...dimensions} />,
  },
  {
    id: "node",
    name: "Node",
    logo: <NodeLogo {...dimensions} />,
  },
  {
    id: "cypress",
    name: "Cypress",
    logo: (
      <CypressLogo {...dimensions} fill="rgb(var(--color-text-primary) / 1)" />
    ),
  },
  {
    id: "playwright",
    name: "Playwright",
    logo: <PlaywrightLogo {...dimensions} />,
  },
  {
    id: "jest",
    name: "Jest",
    logo: <JestLogo {...dimensions} />,
  },
  {
    id: "vite",
    name: "Vite",
    logo: <ViteLogo {...dimensions} />,
  },
  {
    id: "turborepo",
    name: "Turborepo",
    logo: (
      <TurborepoLogo
        {...dimensions}
        fill="rgb(var(--color-text-primary) / 1)"
      />
    ),
  },
  {
    id: "github",
    name: "Github",
    logo: (
      <GitHubLogo {...dimensions} fill="rgb(var(--color-text-primary) / 1)" />
    ),
  },
  {
    id: "prettier",
    name: "Prettier",
    logo: <PrettierLogo {...dimensions} />,
  },
  {
    id: "webpack",
    name: "Webpack",
    logo: <WebpackLogo {...dimensions} />,
  },
  {
    id: "storybook",
    name: "Storybook",
    logo: <StorybookLogo {...dimensions} />,
  },
  {
    id: "eslint",
    name: "ESLint",
    logo: <ESLintLogo {...dimensions} />,
  },
  {
    id: "wordpress",
    name: "Wordpress",
    logo: <WordpressLogo {...dimensions} />,
  },
];

const TechStack = memo(
  forwardRef<HTMLDivElement, TTechStack>(({ className, ...props }, ref) => {
    /** Pick a random quote from the list of quotes to display to the user */
    const [quote] = useLoaderData<typeof loader>();

    const listRef = useRef<HTMLUListElement>(null);
    const isInView = useInView(listRef, { once: true });

    const jsxCode = `
    <stack>
      <tech name='React' />
      <tech name='NextJS' />
      <tech name='Remix' />
      <tech name='Typescript' />
      <tech name='MongoDB' />
      ...
    </stack>
  `;

    return (
      <div
        ref={ref}
        className={cn("container relative pb-20", className)}
        {...props}
      >
        <div className="absolute bottom-[calc(100%-10%)] left-[calc(100%-30px)]">
          <pre>
            <code className="text-base text-tertiary">{jsxCode}</code>
          </pre>
        </div>
        <div className="relative z-10 grid grid-cols-[35%_1fr] gap-16">
          <motion.div
            className="flex flex-col justify-center gap-2"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { delay: 0.4 } },
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <p className="text-lg">"{quote.text}"</p>
            <p className="text-tertiary">- {quote.author}</p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <p className="base -ml-14 text-tertiary">
              const stack: TTech[] = [
            </p>
            <motion.ul
              ref={listRef}
              className="grid grid-cols-6 gap-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {stack.map((tech) => (
                <motion.li
                  key={tech.id}
                  className="flex h-[150px] flex-col items-center justify-center space-y-6 rounded-md bg-secondary"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                >
                  <div className="flex h-10 items-center sm:h-20">
                    {tech.logo}
                  </div>
                  <p className="text-center text-sm">{tech.name}</p>
                </motion.li>
              ))}
            </motion.ul>
            <p className="-ml-14 flex text-sm text-tertiary">
              {Array.from({ length: 3 }).map((_, i) => (
                <DotIcon key={i} className="-mr-3" />
              ))}
            </p>
            <p className="base -ml-14 text-tertiary">]</p>
          </div>
        </div>
      </div>
    );
  })
);

export { TechStack as default, type TTechStack };
