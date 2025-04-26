<script setup lang="ts">
import RenderVNode from '@/components/common/RenderVNode.ts'
import MoniTooltip from '@/components/MoniTooltip/MoniTooltip.vue'
import type { MoniDropdownProps } from '@/components/MoniDropdown/types'
import { toRefs } from 'vue'

const props = withDefaults(defineProps<MoniDropdownProps>(), {
  menuOptions: () => []
})
const { menuOptions } = toRefs(props)
const emits = defineEmits<{
  (e: 'visual-change', value: boolean ): void
  (e: 'select', value: string | number): void
}>()

function visualChange(bool: boolean) {
  emits('visual-change', bool)
}
</script>

<template>
<div class="moni-dropdown">
  <MoniTooltip placement="bottom" trigger="click" @visual-change="visualChange">
    <template #trigger>
      <slot name="default"></slot>
    </template>
    <template #default>
      <ul class="moni-dropdown__options">
        <li class="moni-dropdown-option__item" :class="{ disabled: option.disabled }"
            v-for="option in menuOptions" :key="option.key">
          <RenderVNode :v-node="option.label ?? ''"></RenderVNode>
        </li>
      </ul>
    </template>
  </MoniTooltip>
</div>
</template>

<style scoped>

</style>
