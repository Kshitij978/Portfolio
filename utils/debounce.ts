/**
 * Debounces a callback function to limit its execution frequency.
 *
 * @param {Function} callback - The function to be debounced.
 * @param {number} wait - The time in milliseconds to wait before executing the callback.
 * @param {boolean} [immediate=false] - Whether to immediately execute the callback when called.
 * @return {Function} - The debounced function.
 */
export function debounce(callback: Function, wait: number, immediate = false) {
  let timeout: NodeJS.Timeout

  return function (this: any, ...args: any[]) {
    const callNow = immediate && !timeout
    const next = () => callback.apply(this, args)

    clearTimeout(timeout)
    timeout = setTimeout(next, wait)

    if (callNow) {
      next()
    }
  }
}
