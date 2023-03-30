<template>
  <div>
    <m-progress :percentage="50" :animation="true"></m-progress>
    <m-progress :percentage="100" :animation="true" status="success" />
    <m-progress type="circle" :percentage="100" :animation="true" status="success" />
  </div>
</template>

<script setup lang="ts">
</script>