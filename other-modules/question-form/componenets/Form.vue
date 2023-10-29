<template>
  <div class="question-form">
    <div class="question-form__grid">
      <div class="question-form__left">
        <p class="question-form__title">Остались вопросы?</p>
        <p class="question-form__text">
          Оставьте свои контактные данные и мы свяжемся с вами
        </p>
      </div>
      <div class="question-form__right">
        <Form class="question-form__form">
          <div class="question-form__section">
            <BaseInput
              rules="required"
              class="question-form__input"
              name="name"
              label="Имя"
              placeholder="Иван"
              v-model="store.form.name"
            />
            <BaseInput
              rules="required"
              class="question-form__input"
              name="phone"
              label="Телефон"
              placeholder="+7 (XXX) XXX XX XX"
              maska="+7 (###) ### ## ##"
              v-model="store.form.phone"
            />
          </div>
          <div class="question-form__section">
            <BaseSelect
              rules="required"
              class="question-form__input"
              name="time1"
              label="Когда позвонить"
              v-bind="selectProps(time1)"
            />
            <BaseSelect
              rules="required"
              class="question-form__input"
              name="time2"
              label="Во сколько позвонить"
              v-bind="selectProps(time2)"
            />
          </div>
          <div class="question-form__section">
            <p class="question-form__perc question-form__input">
              Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="#">условиями обработки персональных данных</a>
            </p>
            <BaseButton class="question-form__input" type="submit">Отправить</BaseButton>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { useQuestionForm } from '../store';

  const store = useQuestionForm();

  const time1 = [
    { label: 'Сегодня', value: 'today' },
    { label: 'Завтра', value: 'tomorrow' },
  ];

  const time2 = [
    { label: '10:00-12:00', value: 'first' },
    { label: '14:00-16:00', value: 'second' },
    { label: '16:00-18:00', value: 'third' },
  ];

  function selectProps<T extends { label: string, value: string }>(options: T[]) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt.label,
        isActive: (opt: T, v: T | null) => opt.value === v?.value,
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v?.label || 'не выбрано',
      }
    };
  }
</script>

<style lang="scss" scoped>
  .question-form {
    padding: 40px;
    border-radius: 16px;
    position: relative;
    z-index: 0;
    @apply tw-bg-white;

    &::before {
      content: '';
      display: block;
      background: url(../assets/images/decor.svg);
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 16px 0 0 16px;
      top: 0;
      left: 0;
      width: calc(50% - 30px);
      height: 100%;
      position: absolute;
      z-index: -1;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__left {
      margin: 10px;
      width: calc(100% / 12 * 6 - 20px);
    }

    &__right {
      margin: 10px;
      width: calc(100% / 12 * 6 - 20px);
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 8px;
      @apply tw-text-text00;

    }

    &__text {
      @apply tw-text-text02 tw-text-base;
    }

    &__section {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
    }

    &__input {
      width: calc(100% / 12 * 6 - 20px);
      margin: 10px;
    }

    &__perc {
      @apply tw-text-text02 tw-text-sm;
      a {
        @apply tw-text-primary;
      }
    }
  }
</style>