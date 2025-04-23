<script setup lang="ts">
import type { NameType } from '@/components/MoniCollapse/types'
import { ref } from 'vue'
import MoniCollapse from '@/components/MoniCollapse/MoniCollapse.vue'
import MoniCollapseItem from '@/components/MoniCollapse/MoniCollapseItem.vue'
const activeNames = ref<NameType[]>(['Consistency', 'Feedback'])
</script>

<template>
<div>
  <MoniCollapse v-model:model-value="activeNames">
    <MoniCollapseItem name="Consistency" title="Consistency">
      <template #header>Consistency</template>
      <template #default>
        <p>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</p>
        <p>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</p>
      </template>
    </MoniCollapseItem>
    <MoniCollapseItem name="Feedback" title="Feedback">
      <template #header>Feedback</template>
      <template #default>
        <p>Operation feedback: enable the users to clearly perceive their operations by style
          updates and interactive effects;</p>
        <p>Visual feedback: reflect current state by updating or rearranging elements of the page.</p>
      </template>
    </MoniCollapseItem>
    <MoniCollapseItem name="Efficiency" title="Efficiency" disabled>
      <template #header>Efficiency</template>
      <template #default>
        <p>Simplify the process: keep operating process simple and intuitive;</p>
        <p>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</p>
        <p>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</p>
      </template>
    </MoniCollapseItem>
    <MoniCollapseItem name="Controllability" title="Controllability">
      <template #header>Controllability</template>
      <template #default>
        <p>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</p>
        <p>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</p>
      </template>
    </MoniCollapseItem>
  </MoniCollapse>
</div>
</template>

<style scoped>

</style>
