import { Check } from 'lucide-solid'
import { ActionButton } from '../core/Button'
import Container from '../core/Container'
import { HeroIllustration } from './Illustrations'
import { Envelope } from './Illustrations/Envelope'
import type { VoidComponent } from 'solid-js'

export const Hero: VoidComponent = () => (
  <div class="items-center overflow-hidden text-center sm:py-32 md:flex-row lg:text-left xl:pb-36">
    <Container class="grid justify-items-center lg:grid-cols-2 lg:px-10">
      <div class="flex max-w-md flex-col items-center lg:items-start lg:justify-self-start">
        <h1 class="flex flex-col text-5xl font-semibold leading-tight text-primary md:text-7xl lg:text-8xl">
          Trade
          <span class="leading-tight text-transparent [-webkit-text-stroke:_0.1px_rgb(255_115_29)]">
            Recipe
          </span>
          Builder
        </h1>
        <p class="mt-6 text-lg text-gray-600">
          Discover the power of trade recipes and spend less time watching price charts with just a
          few clicks.
        </p>
        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
          <SignUp />
        </div>
      </div>
      <HeroIllustration class="mt-10 w-full max-w-xl sm:mt-20 lg:justify-self-end" />
    </Container>
  </div>
)

const SignUp: VoidComponent = () => {
  // const { mutate, isSuccess, isLoading, isIdle } = trpc.allowList.signup.useMutation()
  const mutate = undefined,
    isSuccess = true,
    isLoading = false,
    isIdle = true

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        // mutate({
        //   email: formData.get('email') as string,
        // })
      }}
      class="mt-3 sm:flex "
    >
      <div class="relative mt-1 rounded-full shadow-md">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Envelope class="h-5 w-5 text-color-light" aria-hidden="true" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          class="block h-full w-full rounded-full border-gray-300 pl-14 pr-6 focus:border-primary focus:ring-primary sm:text-sm"
          placeholder="you@example.com"
        />
      </div>
      <ActionButton
        type="submit"
        class={`relative mx-2 overflow-hidden pr-12
        ${
          isSuccess && !isLoading && !isIdle
            ? 'bg-secondary pl-6 transition-all duration-1000 hover:bg-secondary'
            : ''
        }`}
      >
        {isSuccess && !isLoading ? 'Will do!' : 'Notify me'}
        <div
          class={`absolute top-0 right-[-40px] flex h-11 w-11 items-center justify-center rounded-full opacity-0 shadow-md ${
            isSuccess && !isLoading && !isIdle
              ? 'right-0 opacity-100 transition-all duration-1000'
              : ''
          }`}
        >
          <Check
            size="20"
            class={
              isSuccess && !isLoading && !isIdle
                ? 'stroke-dashoffset-[0] delay-1000 duration-1000'
                : 'stroke-dashoffset-[32]'
            }
          />
        </div>
      </ActionButton>
    </form>
  )
}