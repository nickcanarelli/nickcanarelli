import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TGitLogo = ComponentPropsWithoutRef<'svg'>

const GitLogo = forwardRef<SVGSVGElement, TGitLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 92 92'
      className={cn('', className)}
      {...props}
    >
      <defs>
        <clipPath id='a'>
          <path d='M0 .113h91.887V92H0zm0 0' />
        </clipPath>
      </defs>
      <g clipPath='url(#a)'>
        <path
          d='M90.156 41.965L50.036 1.848a5.918 5.918 0 00-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 017.23 1.684 7.034 7.034 0 011.669 7.277l10.187 10.184a7.028 7.028 0 017.278 1.672 7.04 7.04 0 010 9.957 7.05 7.05 0 01-9.965 0 7.044 7.044 0 01-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 011.86 11.29 7.04 7.04 0 01-9.957 0 7.04 7.04 0 010-9.958 7.06 7.06 0 012.304-1.539V33.926a7.049 7.049 0 01-3.82-9.234l-10.418-10.42L1.73 41.777a5.925 5.925 0 000 8.371L41.852 90.27a5.925 5.925 0 008.37 0l39.934-39.934a5.925 5.925 0 000-8.371'
          fill='#f03c2e'
        />
      </g>
    </svg>
  )
})

export { GitLogo as default, type TGitLogo }
