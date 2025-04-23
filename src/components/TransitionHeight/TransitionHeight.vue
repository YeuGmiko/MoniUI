<script setup lang="ts">
import type { TransitionProps } from 'vue'

defineProps<TransitionProps>()

const transitionEvents: TransitionProps = {
  onBeforeEnter(el) {
    (el as HTMLElement).style.height = '0';
    (el as HTMLElement).style.overflow = 'hidden'
  },
  onEnter(el) {
    (el as HTMLElement).style.height = `${el.scrollHeight}px`
  },
  onAfterEnter(el) {
    (el as HTMLElement).style.height = 'auto';
  },
  onBeforeLeave(el) {
    (el as HTMLElement).style.height = `${el.scrollHeight}px`;
    (el as HTMLElement).style.overflow = 'hidden'
  },
  onLeave(el) {
    (el as HTMLElement).style.height = `0`
  }
}
</script>

<template>
  <Transition
    v-bind="{ ...$attrs, ...transitionEvents }"
    name="height-transition"
  >
    <slot name="default"></slot>
  </Transition>
</template>

<style scoped>
.height-transition-enter-active,
.height-transition-leave-active {
  transition: height var(--moni-transition-duration) ease-in-out;
}
</style>
