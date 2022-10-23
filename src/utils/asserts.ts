/**
 * 
 * @param { boolean } condition 
 * @param { string | undefined } message 
 * @return asserts condition
 */
export function assert(condition: boolean, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }
}

export function assertIsDefined<T>(
  value: T | undefined
): asserts value is T {
  assert(value !== undefined)
}