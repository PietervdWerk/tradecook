import { Component, JSX } from 'solid-js'
import { clsx } from 'clsx'

const Container: Component<JSX.HTMLAttributes<HTMLDivElement>> = ({
  class: divClasses,
  ...props
}) => {
  return <div class={clsx('mx-auto max-w-7xl px-6', divClasses)} {...props} />
}

export default Container
