import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'

import { cn } from '~/utils'

type TRecentBlogPosts = ComponentPropsWithoutRef<'div'>

const RecentBlogPosts = memo(
  forwardRef<HTMLDivElement, TRecentBlogPosts>(({ className, ...props }, ref): JSX.Element => {
    const jsxCode = `
        /*
         * TODO: Recent Blog Posts
         */`
    return (
      <div ref={ref} className={cn('container py-6', className)} {...props}>
        <div className='flex items-center justify-center'>
          <pre>
            <code className='text-base text-orange-500'>{jsxCode}</code>
          </pre>
        </div>
      </div>
    )
  })
)

export { RecentBlogPosts as default, type TRecentBlogPosts }
