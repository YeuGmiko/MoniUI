<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoniCollapse'
})
</script>
<script setup lang="ts">
import { ref, provide, onMounted, watch } from 'vue'
import type { CollapseContext, MoniCollapseEmits, MoniCollapseProps, NameType } from './types'
import { collapseContextKey } from '@/components/MoniCollapse/constants.ts'

const emits = defineEmits<MoniCollapseEmits>()
const { accordion } = withDefaults(defineProps<MoniCollapseProps>(), { accordion: false })
const modelValue= defineModel<NameType[]>({
  required: false
})
const activeNames = ref<NameType[]>(modelValue.value ?? [])
watch(modelValue, newValue => activeNames.value = newValue ?? [])

const handleItemClick = (target: NameType) => {
  const targetIndex = activeNames.value.indexOf(target)
  if (accordion) {
    activeNames.value = target === activeNames.value[0] ? [] : [ target ]
    return
  }
  // add target
  if (targetIndex === -1) activeNames.value.push(target)
  // delete target
  else activeNames.value.splice(targetIndex, 1)
  // emit change event
  emits('change', activeNames.value)
}

provide<CollapseContext>(collapseContextKey, {
  activeNames: activeNames,
  handleItemClick
})

onMounted(() => {
  /* valid props*/
  if (accordion && modelValue.value?.length && modelValue.value.length > 1) console.warn('accordion mode should only have one active item')
})
</script>

<template>
<div class="moni-collapse">
  <slot name="default"></slot>
</div>
</template>

<style src="./style.scss"></style>
