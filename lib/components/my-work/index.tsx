import { motion, useInView } from "framer-motion";
import { DotIcon } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef, memo, useRef } from "react";
import { myWork } from "~/constants";

import { cn } from "~/utils";

type TMyWork = ComponentPropsWithoutRef<"div">;

const MyWork = memo(
  forwardRef<HTMLDivElement, TMyWork>(({ className, ...props }, ref) => {
    const listRef = useRef<HTMLUListElement>(null);
    const isInView = useInView(listRef, { once: true });

    const jsxCode = `
    type TWork = {
      task: string
      passion: Infinity
    }
  `;

    return (
      <div
        ref={ref}
        className={cn("container relative py-12 sm:py-20", className)}
        {...props}
      >
        <div className="flex flex-col gap-6">
          <p className="text-base text-tertiary">
            /* Projects i've contributed to */
          </p>
          <p className="text-base text-tertiary">
            {jsxCode}
            <br />
            const myWork: TWork[] = [
          </p>
          <motion.ul
            ref={listRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-14"
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
            {myWork.map((work) => (
              <motion.li
                key={work.id}
                className="text-2xl font-medium"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
              >
                {work.description}
              </motion.li>
            ))}
          </motion.ul>
          <p className="-ml-2 flex text-base text-tertiary">
            {Array.from({ length: 3 }).map((_, i) => (
              <DotIcon key={i} className="-mr-3" />
            ))}
          </p>
          <p className="text-base text-tertiary">]</p>
        </div>
      </div>
    );
  })
);

export { MyWork as default, type TMyWork };
