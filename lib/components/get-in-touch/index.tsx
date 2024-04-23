import { ComponentPropsWithoutRef, forwardRef, memo } from "react";

import { cn } from "~/utils";

type TGetInTouch = ComponentPropsWithoutRef<"div">;

const socials = [
  {
    id: "github",
    name: "github",
    url: "",
  },
  {
    id: "linkedIn",
    name: "linkedIn",
    url: "",
  },
];

const GetInTouch = memo(
  forwardRef<HTMLDivElement, TGetInTouch>(
    ({ className, ...props }, ref): JSX.Element => {
      return (
        <div ref={ref} className={cn("container py-20", className)} {...props}>
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <div className="grid space-y-4">
                <p className="text-base text-tertiary">/* Find me on */</p>
                <ul className="space-y-4 text-3xl font-medium ">
                  {socials.map((social) => (
                    <li key={social.id}>
                      <a href={social.url}>{social.name}()</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="text-base text-tertiary">/* Get in touch */</p>
            </div>
          </div>
        </div>
      );
    }
  )
);

export { GetInTouch as default, type TGetInTouch };
