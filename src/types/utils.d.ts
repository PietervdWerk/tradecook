/**
 * Provided with an object, make all selected keys required.
 *
 * @example
 * type ABC = { a?: string, b?: number, c: string }
 * type TRequiredKeys = RequiredKeys<ABC, 'a' | 'b'> = { a: string, b: number, c: string }
 */
type RequiredKeys<T, K extends keyof T> = {
  [P in K]-?: T[P]
} & Omit<T, K>

/**
 * Many any object type readable by showing all keys and their types instead of nested types.
 *
 * @example
 * type ABC = { a: string, b: number, c: string }
 * type T = Omit<ABC, 'a' | 'b'>
 * type TPretty = Prettify<T> = { c: string }
 */
type Prettify<T = {}> = {
  [key in keyof T]: T[key]
} & {}

/**
 * Util type that matches some strings literally, but allows any other string as well.
 *
 * @example
 * type T = LiteralUnion<'a' | 'b' | 'c'> = 'a' | 'b' | 'c' | string
 */
type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>)

/**
 *
 */
type KeyOfOptionals<T> = keyof {
  [K in keyof T as T extends Record<K, T[K]> ? never : K]: T[K]
}

type OptionalKeys<T extends {}> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never
}[keyof T]



type ExtractOptionals<T extends {}> = {
  [K in keyof T as undefined extends T[K] ? K : never]?: T[K]
}
