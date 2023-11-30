<template>
  <BaseStep
    :steps="[
      {
        component: Step1,
      },
    ]"
  />
</template>
<script setup lang="ts">
import Step1 from './step1.vue'
</script>
<style lang="scss" scoped></style>
