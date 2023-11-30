<template>
  <HeaderAgent :lengthSteps="steps.length - 1" :currentStep="step" />
  <BaseStep :steps="steps" @currentStep="(e) => (step = e)" />
</template>
<script setup lang="ts">
import HeaderAgent from './header.vue'
import Step1 from './step1.vue'
import Step2 from './step2.vue'
import SuccessAgent from '../successAgent.vue'
const steps = [
  {
    component: Step1,
  },
  {
    component: Step2,
  },
  {
    component: SuccessAgent,
  },
]
const step = ref(0)
</script>
<style lang="scss" scoped></style>
