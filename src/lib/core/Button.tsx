import clsx from 'clsx'
import { Component, JSX, mergeProps, splitProps } from 'solid-js'
import { A } from 'solid-start'
import { defaultProps } from '~/utils/solidjs'

type Colors = 'highlighter' | 'primary'
type Variants = 'solid' | 'outline' | 'none'
type VariantColors = { [key in Variants]: { [key in Colors]: string } }

const baseButtonStyle = 'py-3 px-12 rounded-4xl text-sm'
const variantStyles: VariantColors = {
  solid: {
    highlighter: `bg-highlighter-main text-highlighter-text hover:bg-highlighter-hover shadow-md`,
    primary: `bg-primary-main text-primary-text hover:bg-primary-hover shadow-md`,
  },
  outline: {
    highlighter: `border border-highlighter-main text-highlighter-main hover:bg-highlighter-hover hover:text-highlighter-text shadow-md`,
    primary: `border border-primary-main text-primary-main hover:bg-primary-hover hover:text-primary-text shadow-md`,
  },
  none: {
    highlighter: 'text-inherit no-underline',
    primary: 'text-inherit no-underline text-decoration-color:red',
  },
}

const CONTROLLED_PROPS = ['class', 'children', 'ref', 'variant', 'color'] as const
type ButtonProps = {
  variant?: Variants
  color?: Colors
}

type LinkButtonProps = ButtonProps &
  RequiredKeys<JSX.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export const LinkButton: Component<LinkButtonProps> = (props) => {
  const [controlled, restProps] = splitProps(props, CONTROLLED_PROPS)
  const _props = defaultProps(controlled, { color: 'highlighter', variant: 'outline' })
  const _class = clsx(variantStyles[_props.variant][_props.color], baseButtonStyle, _props.class)

  return (
    <A class={_class} {...restProps}>
      {controlled.children}
    </A>
  )
}

type ActionButtonProps = ButtonProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>

export const ActionButton: Component<ActionButtonProps> = (props) => {
  const [controlled, restProps] = splitProps(props, CONTROLLED_PROPS)
  const _props = defaultProps(controlled, { variant: 'solid', color: 'highlighter' })
  const _class = clsx(variantStyles[_props.variant][_props.color], baseButtonStyle, _props.class)

  return (
    <button class={_class} {...restProps}>
      {props.children}
    </button>
  )
}
