import { useLoaderData } from "@remix-run/react";
import { motion, useInView } from "framer-motion";
import { DotIcon } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  cloneElement,
  forwardRef,
  memo,
  useRef,
} from "react";

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
    logo: <NextJSLogo fill="rgb(var(--color-text-primary) / 1)" />,
  },
  {
    id: "remix",
    name: "Remix",
    logo: <RemixLogo fill="rgb(var(--color-text-primary) / 1)" />,
  },
  {
    id: "typescript",
    name: "Typescript",
    logo: <TypescriptLogo />,
  },
  {
    id: "javascript",
    name: "Javascript",
    logo: <JavascriptLogo />,
  },
  {
    id: "mongo",
    name: "MongoDB",
    logo: <MongoDBLogo />,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    logo: <TailwindLogo />,
  },
  {
    id: "figma",
    name: "Figma",
    logo: <FigmaLogo />,
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    logo: <DynamoDBLogo />,
  },
  {
    id: "aws",
    name: "AWS",
    logo: <AWSLogo fill="rgb(var(--color-text-primary) / 1)" />,
  },
  {
    id: "git",
    name: "Git",
    logo: <GitLogo />,
  },
  {
    id: "node",
    name: "Node",
    logo: <NodeLogo />,
  },
  {
    id: "cypress",
    name: "Cypress",
    logo: <CypressLogo fill="rgb(var(--color-text-primary) / 1)" />,
  },
  {
    id: "playwright",
    name: "Playwright",
    logo: <PlaywrightLogo />,
  },
  {
    id: "jest",
    name: "Jest",
    logo: <JestLogo />,
  },
  {
    id: "vite",
    name: "Vite",
    logo: <ViteLogo />,
  },
  {
    id: "turborepo",
    name: "Turborepo",
    logo: <TurborepoLogo fill="rgb(var(--color-text-primary) / 1)" />,
  },
  {
    id: "github",
    name: "Github",
    logo: <GitHubLogo fill="rgb(var(--color-text-primary) / 1)" />,
  },
  {
    id: "prettier",
    name: "Prettier",
    logo: <PrettierLogo />,
  },
  {
    id: "webpack",
    name: "Webpack",
    logo: <WebpackLogo />,
  },
  {
    id: "storybook",
    name: "Storybook",
    logo: <StorybookLogo />,
  },
  {
    id: "eslint",
    name: "ESLint",
    logo: <ESLintLogo />,
  },
  {
    id: "wordpress",
    name: "Wordpress",
    logo: <WordpressLogo />,
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
        className={cn("container relative py-12 sm:py-20", className)}
        {...props}
      >
        <div className="absolute bottom-[calc(100%-10%)] left-[calc(100%-30px)]">
          <pre>
            <code className="text-base text-tertiary">{jsxCode}</code>
          </pre>
        </div>
        <div className="relative z-10 grid lg:grid-cols-[35%_1fr] gap-16">
          <motion.div
            className="flex flex-col justify-center gap-2 order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { delay: 0.4 } },
            }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <p className="text-2xl">"{quote.text}"</p>
            <p className="text-tertiary">- {quote.author}</p>
          </motion.div>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <p className="text-base md:-ml-14 text-tertiary">
              const stack: TTech[] = [
            </p>
            <motion.ul
              ref={listRef}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4"
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
                  className="flex flex-col items-center p-3 justify-center space-y-6 rounded-md bg-secondary"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                >
                  <div className="flex items-center h-20">
                    {cloneElement(tech.logo, {
                      className: "w-full h-full max-w-[55px] max-h-[45px]",
                    })}
                  </div>
                  <p className="text-center text-sm">{tech.name}</p>
                </motion.li>
              ))}
            </motion.ul>
            <p className="md:-ml-14 flex text-sm text-tertiary">
              {Array.from({ length: 3 }).map((_, i) => (
                <DotIcon key={i} className="-mr-3" />
              ))}
            </p>
            <p className="text-base md:-ml-14 text-tertiary">]</p>
          </div>
        </div>
      </div>
    );
  })
);

export { TechStack as default, type TTechStack };
