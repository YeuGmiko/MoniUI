import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

type Condition = () => boolean
type Callback = (e: MouseEvent) => void
/**
 * @author: YeuGmiko
 * @description 传入一个目标element对象，当document触发click事件后，若事件对象的target不在目标element内或不为目标element本身，
 * 并且此时调用condition返回的值为true，则调用传入的回调函数
 * @param targetElement 目标element对象
 * @param condition 每次触发callback前都会调用一次，若返回值为false，则不会触发callback
 * @param callback 触发事件后的回调函数
 */
const useClickOutside = (targetElement: Ref<HTMLElement | undefined>, condition: Condition, callback: Callback)  => {
  const handler = (event: MouseEvent) => {
    if (!targetElement.value || !event.target) return
    if (targetElement.value.contains(event.target as HTMLElement) || targetElement.value === event.target) return
    if(condition()) callback(event)
  }
  onMounted(() => document.addEventListener('click', handler))
  onUnmounted(() => document.removeEventListener('click', handler))
}

export default useClickOutside
