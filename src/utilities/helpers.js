import { snakeCase } from 'change-case'

export function makeKey(str, append) {
  const key = append
    ? `${snakeCase(str)}_${append}`
    : snakeCase(str)

  return key
}