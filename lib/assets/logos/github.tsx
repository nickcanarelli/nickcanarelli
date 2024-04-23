import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TGitHubLogo = ComponentPropsWithoutRef<'svg'>

const GitHubLogo = forwardRef<SVGSVGElement, TGitHubLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 29'
      className={cn('', className)}
      {...props}
    >
      <path
        d='M15 0C6.718 0 0 6.657 0 14.867c0 6.568 4.298 12.14 10.259 14.107.748.137.991-.324.991-.715V25.49c-4.173.9-5.041-1.754-5.041-1.754-.683-1.718-1.666-2.175-1.666-2.175-1.362-.924.103-.904.103-.904 1.506.104 2.299 1.533 2.299 1.533 1.338 2.272 3.509 1.615 4.365 1.235.134-.96.522-1.617.952-1.987-3.33-.378-6.833-1.653-6.833-7.348 0-1.624.586-2.95 1.545-3.99-.155-.376-.669-1.888.146-3.935 0 0 1.26-.399 4.126 1.524A14.508 14.508 0 0115 7.19a14.55 14.55 0 013.758.5c2.863-1.923 4.12-1.524 4.12-1.524.817 2.048.303 3.56.148 3.935.963 1.04 1.544 2.367 1.544 3.99 0 5.71-3.509 6.967-6.849 7.335.538.461 1.029 1.366 1.029 2.753v4.08c0 .395.24.86 1.001.713C25.707 27.005 30 21.433 30 14.867 30 6.657 23.284 0 15 0z'
        fill={props.fill || '#000'}
      />
    </svg>
  )
})

export { GitHubLogo as default, type TGitHubLogo }
