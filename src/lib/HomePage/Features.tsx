import clsx, { ClassValue } from 'clsx'
import Container from '../core/Container'
import { Component, JSX, mergeProps } from 'solid-js'
import { defaultProps } from '~/utils/solidjs'

const leftCol = 'col-span-5 md:col-start-2 lg:col-start-3 md:justify-self-start md:text-left'
const rightCol = 'col-span-5 md:col-start-7 lg:col-start-10 md:justify-self-end md:text-right'

export const Feature: Component<
  {
    title: string
    description: string
    illustration: Component<JSX.HTMLAttributes<SVGElement>>
    illustrationClass?: ClassValue
    variant?: 'text-left' | 'text-right'
  } & Partial<JSX.HTMLAttributes<HTMLDivElement>>
> = (props) => {
  props = defaultProps(props, { variant: 'text-left' })

  const Text = () => (
    <span class={clsx(props.variant === 'text-left' ? leftCol : rightCol, 'max-w-md')}>
      <h4 class="text-2xl font-semibold">{props.title}</h4>
      <p class="text-lg text-color">{props.description}</p>
    </span>
  )

  const CustomIllustration = () => (
    <props.illustration
      class={clsx(
        'mt-8 md:mt-0',
        props.variant === 'text-left' ? rightCol : leftCol,
        props.illustrationClass,
      )}
    />
  )

  return (
    <div class={clsx('items-center overflow-hidden pt-32 text-center', props.class)}>
      <Container
        class={clsx(
          'flex items-center justify-center justify-items-center gap-x-8 px-6 md:grid md:grid-cols-12 lg:grid-cols-16 lg:px-10',
          props.variant === 'text-left' ? 'flex-col' : 'flex-col-reverse',
        )}
      >
        {props.variant === 'text-left' ? (
          <>
            <Text />
            <CustomIllustration />
          </>
        ) : (
          <>
            <CustomIllustration />
            <Text />
          </>
        )}
      </Container>
    </div>
  )
}
