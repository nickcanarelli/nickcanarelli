import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'

import { words } from '~/constants'
import { cn } from '~/utils'

import TypewriterEffect from '../typewriter'

type THero = ComponentPropsWithoutRef<'div'>

const Hero = memo(
  forwardRef<HTMLDivElement, THero>(({ className, ...props }, ref): JSX.Element => {
    return (
      <section ref={ref} className={cn('container relative -mt-16 h-screen', className)} {...props}>
        <div className='flex h-full flex-col justify-center space-y-4'>
          <p className='text-base text-tertiary'>
            hello()
            <br />
            const name: <span className='text-quaternary'>string</span> = "Nick"
          </p>

          <h1 className='flex max-w-6xl flex-col gap-x-2 text-3xl font-medium md:text-5xl md:!leading-[60px] lg:text-6xl lg:!leading-[70px]'>
            A software engineer
            <span className='flex h-full min-h-0 flex-wrap gap-x-5 text-wrap md:gap-x-8'>
              building <TypewriterEffect words={words} />
            </span>
            interfaces that deliver results.
          </h1>
          <p className='inline-flex gap-x-1.5 text-base text-tertiary'>
            with the team at{' '}
            <a
              href='https://under.io'
              target='_blank'
              rel='noreferrer'
              className='group inline-flex cursor-pointer gap-x-2 px-1 transition duration-150 ease-in-out hover:bg-gray-950 hover:text-white hover:dark:bg-white hover:dark:text-black'
            >
              UNDER.IO
              <span className='opacity-0 group-hover:opacity-100'>🔥</span>
            </a>
          </p>
          {/* <div>
              <button className="rounded-full border border-success-utility-200 bg-success-utility-50 px-2 py-0.5 text-xs font-medium text-success-utility-700">
                Available
              </button>
            </div> */}
        </div>
      </section>
    )
  })
)

export { Hero as default, type THero }
