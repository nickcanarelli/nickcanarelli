import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TStorybookLogo = ComponentPropsWithoutRef<'svg'>

const StorybookLogo = forwardRef<SVGSVGElement, TStorybookLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 17 20'
      className={cn('', className)}
      {...props}
    >
      <path
        d='M.62 18.43L0 1.92A1.006 1.006 0 01.944.88l14.04-.878a1.005 1.005 0 011.069 1.004v17.989a1.006 1.006 0 01-1.051 1.004L1.58 19.396a1.006 1.006 0 01-.96-.966z'
        fill='#FF4785'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.88.071l-1.932.12-.094 2.267a.15.15 0 00.24.126l.88-.668.744.586a.15.15 0 00.243-.123L13.88.071zm-1.504 7.59c-.353.275-2.989.462-2.989.071.056-1.493-.612-1.558-.984-1.558-.352 0-.946.106-.946.906 0 .815.868 1.275 1.887 1.815 1.447.767 3.2 1.696 3.2 4.032 0 2.24-1.82 3.476-4.14 3.476-2.395 0-4.488-.969-4.252-4.328.093-.394 3.138-.3 3.138 0-.038 1.386.278 1.794 1.076 1.794.613 0 .891-.338.891-.906 0-.861-.904-1.369-1.945-1.953-1.409-.791-3.067-1.722-3.067-3.859 0-2.132 1.466-3.554 4.084-3.554 2.618 0 4.047 1.4 4.047 4.064z'
        fill='#fff'
      />
    </svg>
  )
})

export { StorybookLogo as default, type TStorybookLogo }
