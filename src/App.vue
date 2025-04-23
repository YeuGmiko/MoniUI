<script setup lang="ts">
// import MoniButtonDisplay from '@/views/MoniButtonDisplay.vue'
// import MoniCollapseDisplay from '@/views/MoniCollapseDisplay.vue'
// import MoniAlertDisplay from '@/views/MoniAlertDisplay.vue'
import MoniTooltip from '@/components/MoniTooltip/MoniTooltip.vue'
import MoniButton from '@/components/MoniButton/MoniButton.vue'
</script>

<template>
<!--  <MoniButtonDisplay></MoniButtonDisplay>-->
<!--  <MoniCollapseDisplay></MoniCollapseDisplay>-->
<!--  <MoniAlertDisplay></MoniAlertDisplay>-->
  <MoniTooltip ref="tooltip" placement="top" trigger="click" :open-delay="500">
    <template #trigger><MoniButton>Trigger</MoniButton></template>
    <template #default>Hello Tooltip</template>
  </MoniTooltip>
</template>
