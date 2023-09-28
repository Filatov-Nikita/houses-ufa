<template>
  <div class="subsForm">
    <p class="subsForm__text tw-pt-2">Подпишитесь на рассылку</p>
    <div class="subsForm__right">
      <Form class="subsForm__form">
        <BaseInput class="subsForm__input" theme="white" placeholder="mail@mail.com" name="email" label="" />
        <div class="subsForm__btn">
          <BaseButton class="tw-w-full">Подписаться</BaseButton>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
</script>

<style scoped lang="scss">
  .subsForm {
    padding: 20px 16px;
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 16px;
    row-gap: 24px;
    @apply tw-bg-base00;

    &__text {
      font-size: 20px;
      @apply tw-text-text02;
    }

    &__right {
      flex-basis: 100%;
    }

    &__form {
      display: flex;
      flex-wrap: wrap;
      column-gap: 16px;
    }

    &__input {
      flex-grow: 1;
    }

    &__btn {
      padding-top: 16px;
      flex-basis: 100%;
    }
  }

  @screen lg {
    .subsForm {
      padding: 20px 40px;

      &__text {
        @apply tw-text-2xl;
      }

      &__right {
        flex-basis: 500px;
      }

      &__btn {
        padding-top: 8px;
        flex-basis: auto;
      }
    }
  }
</style>
