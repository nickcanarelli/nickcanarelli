import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '~/utils'

type TWebpackLogo = ComponentPropsWithoutRef<'svg'>

const WebpackLogo = forwardRef<SVGSVGElement, TWebpackLogo>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 38 42'
      className={cn('', className)}
      {...props}
    >
      <path
        d='M36.771 32.37L19.748 42v-7.498l10.605-5.836 6.418 3.704zm1.166-1.054V11.182l-6.227 3.6v12.943l6.227 3.591zM1.23 32.37L18.251 42v-7.498l-10.61-5.837-6.41 3.705zM.066 31.316V11.182l6.226 3.6v12.943L.066 31.316zm.73-21.44L18.252 0v7.248L6.978 13.453.796 9.875zm36.408 0L19.748 0v7.248l11.274 6.199 6.182-3.572z'
        fill='#8ED6FB'
      />
      <path
        d='M18.252 33.124L7.786 27.366V15.968l10.466 6.043v11.113zm1.496 0l10.467-5.753V15.965l-10.467 6.046v11.113zM8.495 14.65L19 8.876l10.505 5.776L19 20.715 8.495 14.65z'
        fill='#1C78C0'
      />
    </svg>
  )
})

export { WebpackLogo as default, type TWebpackLogo }
