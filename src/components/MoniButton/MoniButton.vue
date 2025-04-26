<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoniButton',
})
</script>

<script setup lang="ts">
import type { ButtonInstance, ButtonProps } from './types'
import { ref } from 'vue'
import MoniIcon from '@/components/common/MoniIcon/MoniIcon.vue'

withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'default',
  nativeType: 'button',
  plain: false,
  rounded: false,
  circle: false,
  disabled: false,
  autofocus: false,
  isLoading: false,
})
const _ref = ref<HTMLButtonElement>()
defineExpose<ButtonInstance>({
  ref: _ref,
})
</script>

<template>
  <button
    ref="_ref"
    class="moni-button"
    :class="{
      [`moni-button--${type}`]: type && type !== 'default',
      [`moni-button--${size}`]: size && size !== 'default',
      plain: plain,
      rounded: rounded,
      circle: circle,
      disabled: disabled || isLoading,
    }"
    :disabled="disabled"
    :type="nativeType"
  >
    <span>
        <slot name="prefix">
            <MoniIcon v-if="isLoading" icon="tabler:loader-2"></MoniIcon>
        </slot>
    </span>
    <span>
      <slot name="default">
        <MoniIcon v-if="icon && icon !== ''" :icon></MoniIcon>
      </slot>
    </span>
  </button>
</template>

<style src="./style.scss"></style>
