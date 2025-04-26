<script setup lang="ts">
import type { MoniDropdownProps } from '@/components/MoniDropdown/types'
import type { MoniTooltipInstance } from '@/components/MoniTooltip/types'
import { onMounted, ref, toRefs } from 'vue'
import MoniTooltip from '@/components/MoniTooltip/MoniTooltip.vue'
import MoniSelectList from '@/components/common/MoniSelectList/MoniSelectList.vue'
import type {
  MoniSelectListOption
} from '@/components/common/MoniSelectList/types'

const props = withDefaults(defineProps<MoniDropdownProps>(), {
  trigger: 'click',
  offset: 2,
  closeAfterChoose: true,
  menuOptions: () => []
})
const { trigger, closeAfterChoose } = toRefs(props)
const { menuOptions } = toRefs(props)
const emits = defineEmits<{
  (e: 'visual-change', value: boolean ): void
  (e: 'select', value: string | number): void
}>()
const tooltipRef = ref<MoniTooltipInstance | undefined>()

function visualChange(bool: boolean) {
  emits('visual-change', bool)
}
function chooseItem(item: MoniSelectListOption) {
  if (item.disabled) return
  if (closeAfterChoose.value && tooltipRef.value) tooltipRef.value.close()
  emits('select', item.key)
}

onMounted(() => {
  if (tooltipRef.value) tooltipRef.value.open()
})
</script>

<template>
<div class="moni-dropdown">
  <MoniTooltip ref="tooltipRef"
    placement="top"
    :close-delay="0" :trigger :offset :padding-x="0" :padding-y="5"
    @visual-change="visualChange">
    <template #trigger>
      <slot name="default"></slot>
    </template>
    <template #default>
      <MoniSelectList :options="menuOptions" @select="chooseItem"></MoniSelectList>
    </template>
  </MoniTooltip>
</div>
</template>

<style src="./style.scss"></style>
