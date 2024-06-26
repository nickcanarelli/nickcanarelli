import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TESLintLogo = ComponentPropsWithoutRef<'svg'>

const ESLintLogo = forwardRef<SVGSVGElement, TESLintLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      className={cn('', className)}
      {...props}
    >
      <path
        d='M19.353 24.35l12.155-7.018a.98.98 0 01.983 0l12.156 7.018c.304.176.492.5.492.852V39.24c0 .35-.188.676-.492.852L32.49 47.1a.98.98 0 01-.983 0l-12.154-7a.984.984 0 01-.492-.852V25.203c0-.35.188-.676.492-.852'
        fill='#8080f2'
      />
      <path
        d='M63.604 30.744L49.08 5.478c-.527-.914-1.5-1.578-2.556-1.578H17.477c-1.055 0-2.03.674-2.557 1.587L.396 30.7a3 3 0 000 2.98L14.92 58.73c.528.914 1.502 1.38 2.557 1.38h29.047c1.055 0 2.03-.453 2.557-1.367l14.523-25.1a2.85 2.85 0 000-2.898m-12.026 12.15c0 .37-.224.715-.546.9l-18.5 10.673a1.05 1.05 0 01-1.047 0L12.972 43.795c-.322-.186-.547-.53-.547-.9V21.547a1.06 1.06 0 01.544-.9l18.5-10.673a1.05 1.05 0 011.046 0L51.03 20.646c.322.186.55.53.55.9z'
        fill='#4b32c3'
      />
    </svg>
  )
})

export { ESLintLogo as default, type TESLintLogo }
