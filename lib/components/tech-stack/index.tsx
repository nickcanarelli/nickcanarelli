import { useLoaderData } from '@remix-run/react'
import { motion, useInView } from 'framer-motion'
import { DotIcon } from 'lucide-react'
import { cloneElement, ComponentPropsWithoutRef, forwardRef, memo, useRef } from 'react'

import { stack } from '~/constants'
import { loader } from '~/routes/_index'
import { cn } from '~/utils'

type TTechStack = ComponentPropsWithoutRef<'div'>

const TechStack = memo(
  forwardRef<HTMLDivElement, TTechStack>(({ className, ...props }, ref) => {
    /** Pick a random quote from the list of quotes to display to the user */
    const [quote] = useLoaderData<typeof loader>()

    const listRef = useRef<HTMLUListElement>(null)
    const isInView = useInView(listRef, { once: true })

    const jsxCode = `
    <stack>
      <tech name='React' />
      <tech name='NextJS' />
      <tech name='Remix' />
      <tech name='Typescript' />
      <tech name='MongoDB' />
      ...
    </stack>
  `

    return (
      <div ref={ref} className={cn('container relative py-12 sm:py-20', className)} {...props}>
        <div className='absolute bottom-[calc(100%-10%)] left-[calc(100%-30px)]'>
          <pre>
            <code className='text-base text-tertiary'>{jsxCode}</code>
          </pre>
        </div>
        <div className='relative z-10 grid gap-16 lg:grid-cols-[35%_1fr]'>
          <motion.div
            className='order-2 flex flex-col justify-center gap-2 lg:order-1'
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { delay: 0.4 } },
            }}
            initial='hidden'
            animate={isInView ? 'show' : 'hidden'}
          >
            <p className='text-2xl'>"{quote.text}"</p>
            <p className='text-tertiary'>- {quote.author}</p>
          </motion.div>

          <div className='order-1 flex flex-col gap-6 lg:order-2'>
            <p className='text-base text-tertiary md:-ml-14'>const stack: TTech[] = [</p>
            <motion.ul
              ref={listRef}
              className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6'
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              initial='hidden'
              animate={isInView ? 'show' : 'hidden'}
            >
              {stack.map((tech) => (
                <motion.li
                  key={tech.id}
                  className='flex flex-col items-center justify-center space-y-6 rounded-md bg-secondary p-3'
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                >
                  <div className='flex h-20 items-center'>
                    {cloneElement(tech.logo, {
                      className: 'w-full h-full max-w-[55px] max-h-[45px]',
                    })}
                  </div>
                  <p className='text-center text-sm'>{tech.name}</p>
                </motion.li>
              ))}
            </motion.ul>
            <p className='flex text-sm text-tertiary md:-ml-14'>
              {Array.from({ length: 3 }).map((_, i) => (
                <DotIcon key={i} className='-mr-3' />
              ))}
            </p>
            <p className='text-base text-tertiary md:-ml-14'>]</p>
          </div>
        </div>
      </div>
    )
  })
)

export { TechStack as default, type TTechStack }
