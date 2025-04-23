<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoniIcon'
})
</script>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { IconProps } from '@/components/MoniIcon/types'
import { omit } from '@/utils/Object';
import { computed } from 'vue'

const props = withDefaults(defineProps<IconProps>(), {
  type: 'default'
})
const { color, type } = props
const iconifyProps = computed(() => omit(props, ['color']))
const customStyles = computed(() => {
  return Object.assign({}, { color })
})
</script>

<template>
<i class="moni-icon" :class="{ [`moni-icon--${type}`]: type && type !== 'default' }" :style="customStyles">
  <Icon v-bind="iconifyProps"></Icon>
</i>
</template>
