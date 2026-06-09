<template>
  <FormSection class="ref-form">
    <template #title>«Пригласи друга»</template>
    <template #text>Оставьте свои данные и данные друга</template>
    <FormValues class="form-referral__form" />
  </FormSection>
</template>

<script setup lang="ts">
  import FormSection from '@/other-modules/question-form/componenets/Section.vue';
  import FormValues from './FormValues.vue';
</script>

<style scoped>
  .ref-form {
    --bg-size: cover;
    --bg-size-lg: cover;
    --bg-x: right;
    --bg-x-lg: right;
  }
</style>
