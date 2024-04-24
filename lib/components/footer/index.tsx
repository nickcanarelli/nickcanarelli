import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'

import { cn } from '~/utils'

type TFooter = ComponentPropsWithoutRef<'div'>

const Footer = memo(
  forwardRef<HTMLDivElement, TFooter>(({ className, ...props }, ref): JSX.Element => {
    return (
      <footer ref={ref} className={cn('container py-6', className)} {...props}>
        <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
          <p className='text-center text-sm text-tertiary sm:text-left'>
            /* Built with ❤️ using Typescript, Vite, React, Remix, and Tailwind. */
          </p>

          <p className='text-sm text-tertiary'>bye()</p>
        </div>
      </footer>
    )
  })
)

export { Footer as default, type TFooter }

// ;<p className='flex flex-col text-sm text-tertiary'>
//   <span>/* </span>
//   <span className='ml-2'> * Built with ❤️ using Typescript, Vite, React, Remix, and Tailwind.</span>
//   <span className='ml-2'> */ </span>
// </p>
