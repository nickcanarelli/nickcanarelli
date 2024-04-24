import { Link } from '@remix-run/react'
import { ComponentPropsWithoutRef, forwardRef, memo, useCallback, useEffect, useState } from 'react'
import { Theme, useTheme } from 'remix-themes'

import { cn } from '~/utils'

type THeader = ComponentPropsWithoutRef<'div'>

const Header = memo(
  forwardRef<HTMLDivElement, THeader>(({ className, ...props }, ref): JSX.Element => {
    const [clientTheme, setClientTheme] = useState<string | null>()
    const [theme, setTheme] = useTheme()

    /** Needed for hydration to work properly. */
    useEffect(() => {
      setClientTheme(theme)
    }, [theme])

    const toggleTheme = useCallback(() => {
      setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))
    }, [setTheme])

    return (
      <header ref={ref} className={cn('container relative z-10', className)} {...props}>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex items-center gap-x-4'>
            <Link
              to='/'
              className='group flex gap-x-1 space-x-1 text-2xl font-bold tracking-tight text-primary'
            >
              <span className='text-brand-500 group-hover:animate-pulse'>{`<`}</span>
              <div>
                <span>nick</span>
                <span className='font-normal'>canarelli</span>
              </div>
              <span className='text-brand-500 group-hover:animate-pulse'>{`/>`}</span>
            </Link>
          </div>

          <button
            onClick={toggleTheme}
            className='group text-sm text-tertiary transition duration-150 ease-in-out'
          >
            toggleTheme(
            <span className='font-bold text-primary group-hover:animate-pulse'>{clientTheme}</span>)
          </button>
        </div>
      </header>
    )
  })
)

export { Header as default, type THeader }
