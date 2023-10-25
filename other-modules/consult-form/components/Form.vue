<template>
  <Form class="consult-form">
    <BaseInput class="consult-form__item" rules="required" label="Имя" name="name" placeholder="Иван" />
    <div class="consult-form__section consult-form__item">
      <BaseInput
        class="consult-form__column"
        rules="required"
        label="Телефон"
        name="phone"
        placeholder="+7 (XXX) XXX XX XX"
        maska="+7 (###) ### ## ##"
      />
      <BaseInput
        class="consult-form__column"
        rules="required|email"
        label="E-mail"
        name="email"
        placeholder="name@gmail.com"
      />
    </div>
    <BaseInput
      class="consult-form__item consult-form__item"
      label="Сообщение"
      name="text"
      placeholder="У меня есть вопрос..."
    />
    <div class="consult-form__section consult-form__item">
      <p class="consult-form__column consult-form__perc">
        Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="#">условиями обработки персональных данных</a>
      </p>
      <BaseButton class="consult-form__column" type="submit">Получить консультацию</BaseButton>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
</script>

<style scoped lang="scss">
  .consult-form {
    &__column {
      margin: 0 10px;
      width: calc(50% - 20px);
    }

    &__section {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }

    &__perc {
      @apply tw-text-sm tw-text-text02;

      a {
        @apply tw-text-primary;
      }
    }

    &__bottom {
      margin-top: 32px;
    }

    &__item + &__item {
      margin-top: 20px;
    }

    &__item:last-child {
      margin-top: 32px;
    }
  }
</style>
