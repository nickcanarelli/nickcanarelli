import { ComponentPropsWithoutRef, forwardRef, memo } from "react";

import { cn } from "~/utils";

import TypewriterEffect from "../typewriter";

const words = [
  {
    text: "beautiful",
    className: "text-secondary",
  },
  {
    text: "innovative",
    className: "text-secondary",
  },
  {
    text: "kick ass",
    className: "text-brand-500",
  },
];

type THero = ComponentPropsWithoutRef<"div">;

const Hero = memo(
  forwardRef<HTMLDivElement, THero>(
    ({ className, ...props }, ref): JSX.Element => {
      return (
        <section
          ref={ref}
          className={cn("container relative -mt-16 h-screen", className)}
          {...props}
        >
          <div className="flex h-full flex-col justify-center space-y-4">
            <p className="text-base text-tertiary">
              hello()
              <br />
              const name: <span className="text-quaternary">string</span> =
              "Nick"
            </p>

            <h1 className="flex max-w-6xl flex-col gap-x-2 gap-y-1 text-3xl font-medium sm:gap-y-2 md:text-5xl lg:text-6xl">
              A software engineer
              <span className="flex h-full min-h-0 flex-wrap gap-x-5 md:gap-x-8 text-wrap">
                building <TypewriterEffect words={words} />
              </span>
              websites and apps that work.
            </h1>
            <p className="inline-flex text-base text-tertiary gap-x-1.5">
              with the team at{" "}
              <a
                href="https://under.io"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex cursor-pointer gap-x-2 px-1 transition duration-150 ease-in-out hover:bg-gray-950 hover:text-white hover:dark:bg-white hover:dark:text-black"
              >
                UNDER.IO
                <span className="opacity-0 group-hover:opacity-100">🔥</span>
              </a>
            </p>
          </div>
        </section>
      );
    }
  )
);

export { Hero as default, type THero };
