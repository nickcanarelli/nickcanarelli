import { ComponentPropsWithoutRef, forwardRef, memo } from "react";

import { cn } from "~/utils";

type TGetInTouch = ComponentPropsWithoutRef<"div">;

const socials = [
  {
    id: "github",
    name: "github",
    url: "https://github.com/nickcanarelli",
  },
  {
    id: "linkedIn",
    name: "linkedIn",
    url: "https://www.linkedin.com/in/nickcanarelli",
  },
];

const GetInTouch = memo(
  forwardRef<HTMLDivElement, TGetInTouch>(
    ({ className, ...props }, ref): JSX.Element => {
      return (
        <div
          ref={ref}
          className={cn("container py-12 sm:py-20 relative", className)}
          {...props}
        >
          <div className="absolute bottom-[calc(100%-10%)] left-[calc(100%-30px)]">
            <pre>
              <code className="text-7xl text-brand-500">=</code>
            </pre>
          </div>
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-center order-2 sm:order-1">
              <div className="space-y-4">
                <p className="text-base text-tertiary">/* Find me on */</p>
                <ul className="space-y-4 text-2xl font-medium text-center sm:text-left">
                  {socials.map((social) => (
                    <li key={social.id}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:animate-pulse"
                      >
                        {social.name}()
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4 order-1 sm:order-2">
              <div className="sm:max-w-lg space-y-4 text-center sm:text-left ">
                <p className="text-base text-tertiary ">/* Get in touch */</p>
                <p className="text-2xl font-medium">
                  Have a project in mind? Lets create something great together.
                </p>
                <p>
                  <a
                    href="#contact"
                    className="text-2xl text-brand-500 animate-pulse font-medium"
                  >
                    contact()
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  )
);

export { GetInTouch as default, type TGetInTouch };
