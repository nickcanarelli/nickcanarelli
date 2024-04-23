import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TGraghQLLogo = ComponentPropsWithoutRef<'svg'>

const GraghQLLogo = forwardRef<SVGSVGElement, TGraghQLLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      className={cn('', className)}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M50 6.903l37.323 21.549v43.096L50 93.097 12.677 71.548V28.451L50 6.903zM16.865 30.87v31.656L44.28 15.041 16.864 30.87zM50 13.51L18.398 68.246h63.205L50 13.509zm27.415 58.924h-54.83L50 88.261l27.415-15.828zm5.72-9.908L55.72 15.041 83.136 30.87v31.656z'
        fill='#E10098'
      />
      <path
        d='M50 18.14A8.82 8.82 0 1050 .5a8.82 8.82 0 000 17.64zM85.23 38.48a8.82 8.82 0 100-17.64 8.82 8.82 0 000 17.64zM85.23 79.16a8.82 8.82 0 100-17.64 8.82 8.82 0 000 17.64zM50 99.5a8.82 8.82 0 100-17.64 8.82 8.82 0 000 17.64zM14.766 79.16a8.82 8.82 0 100-17.64 8.82 8.82 0 000 17.64zM14.766 38.48a8.82 8.82 0 100-17.64 8.82 8.82 0 000 17.64z'
        fill='#E10098'
      />
    </svg>
  )
})

export { GraghQLLogo as default, type TGraghQLLogo }
