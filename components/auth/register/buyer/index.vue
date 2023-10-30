<template>
  <BaseStep
    :steps="[
      {
        component: Step1,
      },
      {
        component: AuthRegisterSuccess,
      },
    ]"
  />
</template>
<script setup lang="ts">
import Step1 from './step1.vue'
import AuthRegisterSuccess from '../success.vue'
</script>
<style lang="scss" scoped></style>
