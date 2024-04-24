import type { LoaderFunction, MetaFunction } from '@remix-run/node'

import { GetInTouch, Hero, MyWork, TechStack } from '~/components'
import { quotes } from '~/constants'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
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
