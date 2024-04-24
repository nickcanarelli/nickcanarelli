import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef, forwardRef, memo, useCallback, useEffect, useRef } from 'react'

import { cn } from '~/utils'

const sleepTime = 50
const sleep = (ms: number): Promise<unknown> => new Promise((resolve) => setTimeout(resolve, ms))

type TTypewriterEffect = ComponentPropsWithoutRef<'div'> & {
  words: {
    text: string
    className?: string
  }[]
  cursorClassName?: string
}

const TypewriterEffect = memo(
  forwardRef<HTMLDivElement, TTypewriterEffect>(
    ({ words, className, cursorClassName, ...props }, ref): JSX.Element => {
      const textRef = useRef<HTMLDivElement>(null)

      const writeLoop = useCallback(async (): Promise<void> => {
        const container = textRef.current

        if (!container) {
          return
        }

        let currentWordIndex = 0
        let shouldContinue = true

        while (shouldContinue) {
          const currentWord = words[currentWordIndex].text

          /** If the previous word had a classname, remove it */
          if (currentWordIndex > 0 && words[currentWordIndex - 1].className) {
            container.classList.remove(words[currentWordIndex - 1].className as string)
          }

          /** If the current word has a classname, add it */
          if (words[currentWordIndex].className) {
            container.classList.add(words[currentWordIndex].className as string)
          }

          /** Write the word, letter by letter */
          for (let i = 0; i < currentWord.length; i++) {
            container.innerText = currentWord.substring(0, i + 1)
            await sleep(sleepTime)
          }

          /** If we're at the last word, stop the loop */
          if (currentWordIndex === words.length - 1) {
            shouldContinue = false
            return
          }

          /** Wait a bit before initiating the delete animation */
          await sleep(sleepTime * 20)

          /** Delete the word, letter by letter */
          for (let i = currentWord.length; i > 0; i--) {
            /** Check for the container to avoid race-condition */
            if (!container) {
              return
            }

            container.innerText = currentWord.substring(0, i - 1)
            await sleep(sleepTime)
          }

          /** Wait a bit before writing the next word */
          await sleep(sleepTime * 5)

          if (currentWordIndex === words.length - 1) {
            shouldContinue = false
          } else {
            currentWordIndex++
          }
        }
      }, [words])

      useEffect(() => {
        ;(async () => {
          await writeLoop()
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      return (
        <div ref={ref} className={cn('flex space-x-1', className)} {...props}>
          <motion.div className='overflow-hidden'>
            <div
              ref={textRef}
              className='font-bold'
              style={{
                whiteSpace: 'nowrap',
              }}
            />{' '}
          </motion.div>
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,

              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className={cn('h-full w-[2px] flex-1 rounded-sm bg-brand-500', cursorClassName)}
          ></motion.span>
        </div>
      )
    }
  )
)

export { TypewriterEffect as default, type TTypewriterEffect }
