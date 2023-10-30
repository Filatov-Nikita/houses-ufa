<template>
  <BaseStep
    :steps="[
      {
        component: Step1,
      },
      {
        component: Step2,
      },
      {
        component: Step3,
      },
    ]"
  />
</template>
<script setup lang="ts">
import Step1 from './step1.vue'
import Step2 from './step2.vue'
import Step3 from './step3.vue'
</script>
<style lang="scss" scoped></style>
