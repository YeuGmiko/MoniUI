const debounceMap: WeakMap<object, number> = new WeakMap()

type DebounceFn = (...args: any) => void
type DebounceTimeGetter = () => number

/**
 * @author YeuGmiko
 * @description 防抖函数
 * @param callback 回调函数，在函数最后一次调用后的waitTime毫秒后执行
 * @param waitTime 返回一个防抖时间的函数，返回值的单位为毫秒ms
 * @param args 传递给回调函数的参数
 */
export function instantDebounce(callback: DebounceFn, waitTime: number | DebounceTimeGetter, ...args: any[]) {
  let timer = debounceMap.get(callback)
  clearTimeout(timer)
  timer = setTimeout(callback.bind(null, ...args), typeof waitTime === 'number' ? waitTime : waitTime())
  debounceMap.set(callback, timer)
}
/**
 * @author YeuGmiko
 * @description 防抖函数
 * @param callback 回调函数，在函数最后一次调用后的waitTime毫秒后执行
 * @param waitTime 防抖时间，单位为毫秒ms
 * @param args 传递给回调函数的参数
 * @return 返回一个防抖效果的函数
 */
export function debounce(callback: DebounceFn, waitTime: number | DebounceTimeGetter, ...args: never[]) {
  let timer: number | undefined
  return function() {
    clearTimeout(timer)
    timer = setTimeout(callback.bind(null, ...args), typeof waitTime === 'number' ? waitTime : waitTime())
  }
}
