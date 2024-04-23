import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TReactLogo = ComponentPropsWithoutRef<'svg'>

const ReactLogo = forwardRef<SVGSVGElement, TReactLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='-11.5 -10.23174 23 20.46348'
      className={cn('', className)}
      {...props}
    >
      <circle r={2.05} fill='#61dafb' />
      <g stroke='#61dafb' fill='none'>
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform='rotate(60)' />
        <ellipse rx={11} ry={4.2} transform='rotate(120)' />
      </g>
    </svg>
  )
})

export { ReactLogo as default, type TReactLogo }
