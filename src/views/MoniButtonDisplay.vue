<script setup lang="ts">
import MoniButton from '@/components/MoniButton/MoniButton.vue'
</script>

<template>
  <p><strong>Button Base</strong></p>
  <div>
    <MoniButton type="default">default</MoniButton>
    <MoniButton type="primary">primary</MoniButton>
    <MoniButton type="success">success</MoniButton>
    <MoniButton type="info">info</MoniButton>
    <MoniButton type="warning">warning</MoniButton>
    <MoniButton type="danger">danger</MoniButton>
  </div>
  <p><strong> & Plain</strong></p>
  <div>
    <MoniButton type="default" plain>default</MoniButton>
    <MoniButton type="primary" plain>primary</MoniButton>
    <MoniButton type="success" plain>success</MoniButton>
    <MoniButton type="info" plain>info</MoniButton>
    <MoniButton type="warning" plain>warning</MoniButton>
    <MoniButton type="danger" plain>danger</MoniButton>
  </div>
  <p><strong>& Rounded</strong></p>
  <div style="margin-top: 10px">
    <MoniButton type="default" rounded>default</MoniButton>
    <MoniButton type="primary" rounded>primary</MoniButton>
    <MoniButton type="success" rounded>success</MoniButton>
    <MoniButton type="info" rounded>info</MoniButton>
    <MoniButton type="warning" rounded>warning</MoniButton>
    <MoniButton type="danger" rounded>danger</MoniButton>
  </div>
  <p><strong>& Plain & Rounded</strong></p>
  <div style="margin-top: 10px">
    <MoniButton type="default" rounded plain>default</MoniButton>
    <MoniButton type="primary" rounded plain>primary</MoniButton>
    <MoniButton type="success" rounded plain>success</MoniButton>
    <MoniButton type="info" rounded plain>info</MoniButton>
    <MoniButton type="warning" rounded plain>warning</MoniButton>
    <MoniButton type="danger" rounded plain>danger</MoniButton>
  </div>
  <p><strong>& Circle</strong></p>
  <div style="margin-top: 10px">
    <MoniButton type="default" circle>default</MoniButton>
    <MoniButton type="primary" circle>primary</MoniButton>
    <MoniButton type="success" circle>success</MoniButton>
    <MoniButton type="info" circle>info</MoniButton>
    <MoniButton type="warning" circle>warning</MoniButton>
    <MoniButton type="danger" circle>danger</MoniButton>
  </div>
  <p><strong>& Icon</strong></p>
  <div style="margin-top: 10px">
    <MoniButton type="default" icon="tabler:assembly-filled"></MoniButton>
    <MoniButton type="primary" icon="tabler:badge-4k-filled"></MoniButton>
    <MoniButton type="success" icon="tabler:michelin-star-filled"></MoniButton>
    <MoniButton type="info" icon="tabler:info-circle-filled"></MoniButton>
    <MoniButton type="warning"  icon="tabler:alert-circle-filled"></MoniButton>
    <MoniButton type="danger" icon="tabler:bomb-filled"></MoniButton>
  </div>
  <p><strong>& Icon & Plain</strong></p>
  <div style="margin-top: 10px">
    <MoniButton type="default" icon="tabler:assembly" plain></MoniButton>
    <MoniButton type="primary" icon="tabler:badge-4k" plain></MoniButton>
    <MoniButton type="success" icon="tabler:michelin-star" plain></MoniButton>
    <MoniButton type="info" icon="tabler:info-circle" plain></MoniButton>
    <MoniButton type="warning"  icon="tabler:alert-circle" plain></MoniButton>
    <MoniButton type="danger" icon="tabler:bomb" plain></MoniButton>
  </div>
  <p><strong>& Icon & Plain & Rounded</strong></p>
  <div style="margin-top: 10px">
    <MoniButton type="default" icon="tabler:assembly" plain rounded></MoniButton>
    <MoniButton type="primary" icon="tabler:badge-4k" plain rounded></MoniButton>
    <MoniButton type="success" icon="tabler:michelin-star" plain rounded></MoniButton>
    <MoniButton type="info" icon="tabler:info-circle" plain rounded></MoniButton>
    <MoniButton type="warning"  icon="tabler:alert-circle" plain rounded></MoniButton>
    <MoniButton type="danger" icon="tabler:bomb" plain rounded></MoniButton>
  </div>
  <p><strong>& Disabled</strong></p>
  <div>
    <MoniButton type="default" disabled>default</MoniButton>
    <MoniButton type="primary" disabled>primary</MoniButton>
    <MoniButton type="success" disabled>success</MoniButton>
    <MoniButton type="info" disabled>info</MoniButton>
    <MoniButton type="warning" disabled>warning</MoniButton>
    <MoniButton type="danger" disabled>danger</MoniButton>
  </div>
  <p><strong>& Disabled & Plain</strong></p>
  <div>
    <MoniButton type="default" disabled plain>default</MoniButton>
    <MoniButton type="primary" disabled plain>primary</MoniButton>
    <MoniButton type="success" disabled plain>success</MoniButton>
    <MoniButton type="info" disabled plain>info</MoniButton>
    <MoniButton type="warning" disabled plain>warning</MoniButton>
    <MoniButton type="danger" disabled plain>danger</MoniButton>
  </div>
  <p><strong>& Disabled & Plain & Rounded</strong></p>
  <div>
    <MoniButton type="default" disabled plain rounded>default</MoniButton>
    <MoniButton type="primary" disabled plain rounded>primary</MoniButton>
    <MoniButton type="success" disabled plain rounded>success</MoniButton>
    <MoniButton type="info" disabled plain rounded>info</MoniButton>
    <MoniButton type="warning" disabled plain rounded>warning</MoniButton>
    <MoniButton type="danger" disabled plain rounded>danger</MoniButton>
  </div>
</template>
