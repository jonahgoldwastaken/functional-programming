import { unwrapArrayValueAtIndex } from '../utilities/array.js'
export { unwrapSingleItemArray }

function unwrapSingleItemArray(arr) {
  return unwrapArrayValueAtIndex(0)(arr)
}
