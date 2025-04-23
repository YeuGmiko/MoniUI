<script setup lang="ts">
import MoniAlert from '@/components/MoniAlert/MoniAlert.vue'
</script>

<template>
  <p><strong>& Light</strong></p>
  <MoniAlert type="success">
    <template #title>Success alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="success">
    <template #title>Success alert</template>
  </MoniAlert>
  <MoniAlert type="warning">
    <template #title>Warning alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="warning">
    <template #title>Warning alert</template>
  </MoniAlert>
  <MoniAlert type="error">
    <template #title>Error alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="error">
    <template #title>Error alert</template>
  </MoniAlert>
  <MoniAlert type="info">
    <template #title>Info alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="info">
    <template #title>Info alert</template>
  </MoniAlert>
  <p><strong>& Dark</strong></p>
  <MoniAlert type="success" effect="dark">
    <template #title>Success alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="success" effect="dark">
    <template #title>Success alert</template>
  </MoniAlert>
  <MoniAlert type="warning" effect="dark">
    <template #title>Warning alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="warning" effect="dark">
    <template #title>Warning alert</template>
  </MoniAlert>
  <MoniAlert type="error" effect="dark">
    <template #title>Error alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="error" effect="dark">
    <template #title>Error alert</template>
  </MoniAlert>
  <MoniAlert type="info" effect="dark">
    <template #title>Info alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="info" effect="dark">
    <template #title>Info alert</template>
  </MoniAlert>
  <p><strong>& No-Icon</strong></p>
  <MoniAlert type="success" :show-icon="false">
    <template #title>Success alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="success" :show-icon="false">
    <template #title>Success alert</template>
  </MoniAlert>
  <MoniAlert type="warning" :show-icon="false">
    <template #title>Warning alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="warning" :show-icon="false">
    <template #title>Warning alert</template>
  </MoniAlert>
  <MoniAlert type="error" :show-icon="false">
    <template #title>Error alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="error" :show-icon="false">
    <template #title>Error alert</template>
  </MoniAlert>
  <MoniAlert type="info" :show-icon="false">
    <template #title>Info alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="info" :show-icon="false">
    <template #title>Info alert</template>
  </MoniAlert>
  <p><strong>& Non-closeable</strong></p>
  <MoniAlert type="success" :closable="false">
    <template #title>Success alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="success" :closable="false">
    <template #title>Success alert</template>
  </MoniAlert>
  <MoniAlert type="warning" :closable="false">
    <template #title>Warning alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="warning" :closable="false">
    <template #title>Warning alert</template>
  </MoniAlert>
  <MoniAlert type="error" :closable="false">
    <template #title>Error alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="error" :closable="false">
    <template #title>Error alert</template>
  </MoniAlert>
  <MoniAlert type="info" :closable="false">
    <template #title>Info alert</template>
    <template #default>More text description</template>
  </MoniAlert>
  <MoniAlert type="info" :closable="false">
    <template #title>Info alert</template>
  </MoniAlert>
</template>

<style scoped>

</style>
