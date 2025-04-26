<script setup lang="ts">
import type {
  MoniSelectListOption,
  MoniSelectListOptionKey,
  MoniSelectListProps,
  MoniSelectListInstance
} from '@/components/common/MoniSelectList/types'
import { ref, toRefs } from 'vue'
import RenderVNode from '@/components/common/RenderVNode.ts'

const props = withDefaults(defineProps<MoniSelectListProps>(), {
  options: () => []
})
const { options } = toRefs(props)
const emits = defineEmits<{
  (e: 'select', value: MoniSelectListOption): void
}>()

const currentKey = ref<MoniSelectListOptionKey | undefined>()

function chooseItem(item: MoniSelectListOption, index: number) {
  if (item.disabled) return
  currentKey.value = item.key || index
  emits('select', item)
}
function select(key: MoniSelectListOptionKey) {
  const target = options.value.find(item => item.key === key) || options.value[key]
  if (target) currentKey.value = key
  return Boolean(target)
}

defineExpose<MoniSelectListInstance>({ select, current: currentKey })
</script>

<template>
<div class="moni-select-list">
  <ul class="moni-select-list__inner">
    <li v-for="(item, index) in options" :key="item.key ?? index"
        class="moni-select-list__item"
        :class="{
          active: item.key === currentKey || !item.key && index === currentKey,
          disabled: item.disabled
        }"
        @click="chooseItem(item, index)"
    >
      <RenderVNode :v-node="item.label ?? ''"></RenderVNode>
    </li>
  </ul>
</div>
</template>

<style src="./style.scss"></style>
