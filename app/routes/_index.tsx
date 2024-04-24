import type { LoaderFunction, MetaFunction } from '@remix-run/node'

import { GetInTouch, Hero, MyWork, TechStack } from '~/components'
import { quotes } from '~/constants'

export const meta: MetaFunction = () => {
  return [
    { title: 'Nick Canarelli | Freelance Software Engineer' },
    {
      name: 'description',
      content:
        'Dedicated software engineer passionate about building innovative solutions that deliver results.',
    },
  ]
}

export const loader: LoaderFunction = async () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  return [quote]
}

export default function Index(): JSX.Element {
  return (
    <>
      <Hero />
      <TechStack />
      <MyWork />
      <GetInTouch />
    </>
  )
}
