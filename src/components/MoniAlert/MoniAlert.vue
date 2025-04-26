<script setup lang="ts">
import type { MoniAlertProps, MoniAlertExpose } from './types'
import { computed, ref, useSlots } from 'vue'
import MoniIcon from '@/components/common/MoniIcon/MoniIcon.vue'
import { IconRecord, ThemeColor } from './constants.ts'

const { type, effect } = withDefaults(defineProps<MoniAlertProps>(), {
  type: 'info',
  closable: true,
  showIcon: true,
  effect: 'light'
})

const flag = ref<boolean>(true)
const hasDescription = computed<boolean>(() => Boolean(useSlots().default))

function closeAlert() {
  flag.value = false
}

defineExpose<MoniAlertExpose>({
  close: closeAlert
})
</script>

<template>
  <Transition name="moni-alert--close">
    <div class="moni-alert" v-if="flag" :class="[{ [`moni-alert--${ThemeColor[type]}`]: type }, effect]">
      <span v-if="showIcon" class="moni-alert__prefix" :class="{ big: hasDescription }">
        <slot name="prefix"><MoniIcon :icon="IconRecord[type][effect]"></MoniIcon></slot>
      </span>
      <div class="moni-alert__content" :class="{ 'has-description': hasDescription  }">
        <div class="moni-alert__title">
          <span><slot name="title"></slot></span>
          <span v-if="closable" @click="closeAlert">
            <slot name="suffix">
              <MoniIcon class="moni-alert__close" icon="ion:close"></MoniIcon>
            </slot>
        </span>
        </div>
        <p class="moni-alert_description"><slot name="default">{{ description }}</slot></p>
      </div>
    </div>
  </Transition>
</template>

<style src="./style.scss"></style>
