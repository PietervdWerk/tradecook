import { mergeProps } from 'solid-js'

/**
 * Merge the provided `props` object with the `defaults` object, allowing any optional properties
 * in `props` to be assigned default values. The resulting type is adjusted to match defaults.
 *
 * @param {T} props - The props of a component.
 * @param defaults - An object of any optional properties of `props` and a default value.
 * @example
 * const props: { name: string, age?: number } = { name: 'John' }
 * const props2 = defaultProps(props, { age: 100 }) // { name: string, age: number }
 *
 * @returns a merged object of `props` and `defaults`, with all properties in default made required.
 */
export function defaultProps<T, K extends KeyOfOptionals<T>>(
  props: T,
  defaults: Required<Pick<T, K>>,
): Prettify<T & Required<Pick<T, K>>> {
  return mergeProps(defaults, props) as Prettify<T & Required<Pick<T, K>>>
}
