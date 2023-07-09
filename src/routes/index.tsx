import { Head } from 'solid-start'
import { Feature } from '~/lib/HomePage/Features'
import { Footer } from '~/lib/HomePage/Footer'
import { Hero } from '~/lib/HomePage/Hero'
import {
  CandlesticksIllustration,
  IngredientsIllustration,
  NodesIllustration,
} from '~/lib/HomePage/Illustrations'
import { LinkButton } from '~/lib/core/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>TradeCook</title>
        <meta name="description" content="Trade Recipe Builder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Feature
        variant="text-right"
        title="Learn about ingredients"
        description="Read through the documentation and learn how to use them in your own trading recipe."
        illustration={IngredientsIllustration}
        illustrationClass="max-w-10"
        lima="max-w-10"
      />
      <Feature
        variant="text-left"
        title="Build a recipe"
        description="Create your own trading recipe with the recipe builder, try out all kinds of indicators to find the best one for your taste."
        illustration={NodesIllustration}
        illustrationClass="max-w-sm"
        lima="max-w-sm"
      />
      <Feature
        variant="text-right"
        title="See it live in Trading View"
        description="Get full insights into your recipe by seeing it live in your own Trading View! No magic, just your recipe visualized on any trading pair of your choosing."
        illustration={CandlesticksIllustration}
        illustrationClass="max-w-10 mx-auto"
        lima="max-w-10 mx-auto"
      />
      <div class="mx-auto max-w-7xl py-32 px-4 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">Ready to dive in?</span>
          <span class="block">Start for free today.</span>
        </h2>
        <div class="mt-8 flex justify-center">
          <LinkButton variant="outline" href="" class="inline-flex">
            Learn more
          </LinkButton>
          <LinkButton href="/login" class="ml-3 inline-flex shadow">
            Get started
          </LinkButton>
        </div>
      </div>
      <Footer />
    </>
  )
}
