<script setup lang="ts">
import type { MoniTooltipInstance, MoniTooltipProps } from '@/components/MoniTooltip/types'
import type { Middleware } from '@floating-ui/vue'
import { autoUpdate, flip, offset, shift, arrow, useFloating } from '@floating-ui/vue'
import { computed, ref, toRefs, watch } from 'vue'
import { omit } from '@/utils/Object.ts'
import useClickOutside from '@/hooks/useClickOutside'
import { instantDebounce } from '@/utils/Function.ts'

const props = withDefaults(defineProps<MoniTooltipProps>(), {
  placement: 'top',
  trigger: 'hover',
  arrow: true,
  arrowWidth: 10,
  manual: false,
  offset: 5,
  keepInDisplay: true,
  openDelay: 0,
  closeDelay: 0,
  paddingX: 10,
  paddingY: 10
})
const emits = defineEmits<{ (e: 'visual-change', value: boolean): void }>()
const {
  placement,
  trigger,
  arrow: hasArrow,
  arrowWidth,
  manual,
  offset: floatingOffset,
  keepInDisplay,
  popperOptions,
  openDelay,
  closeDelay,
  paddingX,
  paddingY
} = toRefs(props)

const tooltipNode = ref<HTMLElement | undefined>(undefined)
const triggerNode = ref<HTMLElement | undefined>(undefined)
const popperNode = ref<HTMLElement | undefined>(undefined)
const popperArrowNode = ref<HTMLElement | undefined>(undefined)
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
const popperEvents = computed(() => omit(events.value, ['click']))
useClickOutside(
  tooltipNode,
  () => !manual.value && trigger.value === 'click',
  () => updateFlag(false),
)

const middleware = computed<Middleware[]>(() => {
  const middleware: Middleware[] = [offset(floatingOffset.value + (hasArrow.value ? arrowWidth.value : 0))]
  if (keepInDisplay.value) middleware.push(flip(), shift())
  if (hasArrow.value) middleware.push(arrow({ element: popperArrowNode }))
  return middleware
})
const { floatingStyles, middlewareData, placement: floatingPlacement } = useFloating(triggerNode, popperNode, {
  placement,
  middleware,
  whileElementsMounted: autoUpdate,
  ...popperOptions.value,
})

function _updateFlag(bool: boolean) {
  flag.value = bool
}
function updateFlag(bool: boolean) {
  instantDebounce(_updateFlag, () => (bool ? openDelay.value : closeDelay.value), bool)
}

defineExpose<MoniTooltipInstance>({
  open: updateFlag.bind(null, true),
  close: updateFlag.bind(null, false),
})

const arrowBindStyles = computed(() => ({
  arrowWidth: `${arrowWidth.value}px`,
  arrowTop: `${middlewareData.value.arrow?.y || 0}px`,
  arrowLeft: `${middlewareData.value.arrow?.x || 0}px`,
  popperPadding: `${paddingY.value}px ${paddingX.value}px`
}))
</script>

<template>
  <div class="moni-tooltip" ref="tooltipNode" v-on.prevent="outerEvents">
    <div class="moni-tooltip__trigger" ref="triggerNode" v-on.prevent="triggerEvents">
      <slot name="trigger"></slot>
    </div>
    <Transition name="moni-tooltip--transition">
      <div class="moni-tooltip__popper__wrapper"  v-if="flag">
        <div class="moni-tooltip__popper" ref="popperNode" :style="floatingStyles" v-on.prevent="popperEvents">
          <div class="moni-tooltip__popper-arrow" v-if="hasArrow" :data-popper-placement="`${floatingPlacement}`" ref="popperArrowNode">
            <span class="moni-tooltip-popper-arrow__inner"></span>
          </div>
          <slot name="default"></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.moni-tooltip {
  --moni-tooltip-popper-padding: v-bind(arrowBindStyles.popperPadding);
  --moni-tooltip-arrow-width: v-bind(arrowBindStyles.arrowWidth);
  --moni-tooltip-arrow-top: v-bind(arrowBindStyles.arrowTop);
  --moni-tooltip-arrow-left: v-bind(arrowBindStyles.arrowLeft);
}
</style>
