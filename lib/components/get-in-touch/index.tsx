import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'

import { socials } from '~/constants'
import { cn } from '~/utils'

type TGetInTouch = ComponentPropsWithoutRef<'div'>

const GetInTouch = memo(
  forwardRef<HTMLDivElement, TGetInTouch>(({ className, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} className={cn('container relative py-12 sm:py-20', className)} {...props}>
        <div className='absolute bottom-[calc(100%-10%)] left-[calc(100%-30px)]'>
          <pre>
            <code className='text-7xl text-brand-500'>=</code>
          </pre>
        </div>
        <div className='grid gap-12 sm:grid-cols-2'>
          <div className='order-2 flex flex-col items-center justify-center sm:order-1'>
            <div className='space-y-4'>
              <p className='text-base text-tertiary'>/* Find me on */</p>
              <ul className='space-y-4 text-center text-2xl font-medium sm:text-left'>
                {socials.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target='_blank'
                      rel='noreferrer'
                      className='hover:animate-pulse'
                    >
                      {social.name}()
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='order-1 space-y-4 sm:order-2'>
            <div className='space-y-4 text-center sm:max-w-lg sm:text-left '>
              <p className='text-base text-tertiary '>/* Get in touch */</p>
              <p className='text-2xl font-medium'>
                Have a project in mind? Lets create something great together.
              </p>
              <p>
                <a href='#contact' className='animate-pulse text-2xl font-medium text-brand-500'>
                  contact()
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  })
)

export { GetInTouch as default, type TGetInTouch }
