<script setup lang="ts">
import type { MoniTooltipInstance, MoniTooltipProps } from '@/components/MoniTooltip/types'
import { computed, ref, watch, toRefs } from 'vue'
import { autoUpdate, flip, offset, useFloating, arrow } from '@floating-ui/vue'
import { omit } from '@/utils/Object.ts'
import useClickOutside from '@/hooks/useClickOutside'
import { instantDebounce } from '@/utils/Function.ts'

const props = withDefaults(defineProps<MoniTooltipProps>(), {
  placement: 'top',
  trigger: 'hover',
  manual: false,
  offset: 5,
  keepInDisplay: true,
  openDelay: 0,
  closeDelay: 0
})
const emits = defineEmits<{ (e: 'visual-change', value: boolean): void }>()
const { placement, trigger, manual, offset: floatingOffset, keepInDisplay, popperOptions, openDelay, closeDelay } = toRefs(props)

const tooltipNode = ref<HTMLElement | null>(null)
const triggerNode = ref<HTMLElement | null>(null)
const popperNode = ref<HTMLElement | null>(null)
const popperArrowNode = ref<HTMLElement | null>(null)
const flag = ref<boolean>(false)
watch(flag, (newValue) => emits('visual-change', newValue))

const events = computed<Record<string, () => void>>(() => {
  if (manual.value) return {}
  const events: Record<string, () => void> = {}
  switch (trigger.value) {
    case 'hover':
      events.mouseenter = updateFlag.bind(null, true)
      events.mouseleave = updateFlag.bind(null, false)
      break
    case 'click':
      events.click = updateFlag.bind(null, !flag.value)
      break
  }
  return events
})
const outerEvents = computed(() => omit(events.value, ['mouseenter', 'click']))
const triggerEvents = computed(() => omit(events.value, ['mouseleave']))
useClickOutside(tooltipNode, () => !manual.value && trigger.value === 'click',() => updateFlag(false))

const { floatingStyles } = useFloating(triggerNode, popperNode, {
  placement,
  middleware: [offset(floatingOffset.value), keepInDisplay.value ? flip() : undefined],
  whileElementsMounted: autoUpdate,
  ...popperOptions.value
})

function _updateFlag(bool: boolean) {
  flag.value = bool
}
function updateFlag(bool: boolean) {
  instantDebounce(_updateFlag, () => bool ? openDelay.value : closeDelay.value, bool)
}

defineExpose<MoniTooltipInstance>({
  open: updateFlag.bind(null, true),
  close: updateFlag.bind(null, false),
})
</script>

<template>
  <div class="moni-tooltip" ref="tooltipNode" v-on="outerEvents">
    <div class="moni-tooltip__trigger" ref="triggerNode" v-on="triggerEvents">
      <slot name="trigger"></slot>
    </div>
    <Transition name="moni-tooltip--transition">
      <div class="moni-tooltip__popper" ref="popperNode" :style="floatingStyles" v-if="flag">
        <slot name="default"></slot>
      </div>
    </Transition>
  </div>
</template>
