<template>
  <div class="form-referral">
    <h2 class="section__title section__top">
      Заявка на рекомендацию клиента
    </h2>
    <div class="form-referral__wrap">
      <FormValues class="form-referral__form" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import FormValues from './FormValues.vue';
</script>

<style scoped lang="scss">
  .form-referral {
    &__wrap {
      padding: 40px;
      border-radius: 16px;
      @apply tw-bg-white;

      @include lg {
        padding: 24px;
      }

      @include sm {
        padding: 24px 16px;
      }
    }

    &__form {
      max-width: 500px;
    }
  }
</style>
