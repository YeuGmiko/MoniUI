<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoniCollapseItem'
})
</script>
<script setup lang="ts">
import type { CollapseContext, MoniCollapseItemProps } from './types'
import { inject, computed } from 'vue'
import { collapseContextKey } from '@/components/MoniCollapse/constants.ts'
import TransitionHeight from '@/components/TransitionHeight/TransitionHeight.vue'
import MoniIcon from '@/components/MoniIcon/MoniIcon.vue'

const { name, disabled, title } = defineProps<MoniCollapseItemProps>()
const { activeNames, handleItemClick } = inject<CollapseContext>(collapseContextKey) ?? {}

const isActive = computed(() => (!disabled && activeNames?.value.includes(name)) ?? false)
const handleClick = () => {
  if (disabled || !handleItemClick) return
  handleItemClick(name)
}
</script>

<template>
<div class="moni-collapse-item">
  <div class="moni-collapse-item__header" :class="{ disabled, active: isActive }" :id="`item-header-${name}`" @click.prevent="handleClick">
    <slot name="header">{{ title }}</slot>
    <MoniIcon class="moni-collapse-header__arrow" icon="uil:angle-right-b" />
  </div>
  <TransitionHeight>
    <div class="moni-collapse__wrapper" v-show="isActive">
      <div class="moni-collapse-item__content" :id="`item-content-${name}`">
        <slot name="default"></slot>
      </div>
    </div>
  </TransitionHeight>
</div>
</template>
