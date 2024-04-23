import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TViteLogo = ComponentPropsWithoutRef<'svg'>

const ViteLogo = forwardRef<SVGSVGElement, TViteLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 46 46'
      className={cn('', className)}
      {...props}
    >
      <path
        d='M45.19 7.021L23.893 44.955a1.16 1.16 0 01-2.016.009L.155 7.024c-.486-.848.243-1.877 1.21-1.705l21.32 3.796c.137.024.276.024.412 0l20.876-3.79c.963-.175 1.696.845 1.218 1.696z'
        fill='url(#paint0_linear_3_733)'
      />
      <path
        d='M32.842.34L17.081 3.416a.58.58 0 00-.467.532l-.97 16.31a.574.574 0 00.442.594.583.583 0 00.267.001l4.388-1.008a.578.578 0 01.697.677l-1.304 6.359a.578.578 0 00.735.666l2.711-.82c.42-.127.824.24.735.668l-2.072 9.989c-.13.625.705.965 1.053.43l.232-.358 12.844-25.53a.577.577 0 00-.627-.824l-4.517.869a.577.577 0 01-.666-.726l2.948-10.18a.577.577 0 00-.667-.725z'
        fill='url(#paint1_linear_3_733)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_3_733'
          x1={-0.375423}
          y1={8.37962}
          x2={22.476}
          y2={39.5385}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#41D1FF' />
          <stop offset={1} stopColor='#BD34FE' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_3_733'
          x1={24.6619}
          y1={1.17522}
          x2={29.3505}
          y2={33.4669}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FFEA83' />
          <stop offset={0.083} stopColor='#FFDD35' />
          <stop offset={1} stopColor='#FFA800' />
        </linearGradient>
      </defs>
    </svg>
  )
})

export { ViteLogo as default, type TViteLogo }
