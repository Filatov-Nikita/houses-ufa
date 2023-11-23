<template>
  <div class="question-form">
    <div class="question-form__grid">
      <div class="question-form__left">
        <p class="question-form__title">Остались вопросы?</p>
        <p class="question-form__text">
          Оставьте свои контактные данные и&nbsp;мы&nbsp;свяжемся с&nbsp;вами
        </p>
      </div>
      <div class="question-form__right">
        <Form ref="formRef" class="question-form__form" @submit="onSubmit">
          <BaseInput
            rules="required"
            class="question-form__input"
            name="name"
            label="Имя"
            placeholder="Иван"
            v-model="store.form.first_name"
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
          <BaseSelect
            rules="required"
            class="question-form__input"
            name="time1"
            label="Когда позвонить"
            v-bind="selectProps(time1)"
            v-model="store.form.callback_date"
          />
          <BaseSelect
            rules="required"
            class="question-form__input"
            name="time2"
            label="Во сколько позвонить"
            v-bind="selectProps(time2)"
            v-model="store.form.callback_time"
          />
          <div class="question-form__bottom">
            <div class="question-form__actions">
              <p class="question-form__perc question-form__input">
                Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="#">условиями обработки персональных данных</a>
              </p>
              <BaseButton class="question-form__input" type="submit" :disabled="store.loading">
                Отправить
              </BaseButton>
            </div>
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
    'Сегодня',
    'Завтра',
  ];

  const time2 = [
   '10:00-12:00',
   '14:00-16:00',
   '16:00-18:00',
  ];

  const formRef = ref<any>(null);

  async function onSubmit() {
    try {
      await store.send();
      formRef.value.resetForm();
    } catch(e) {}
  }

  function selectProps<T extends string>(options: T[]) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt,
        isActive: (opt: T, v: T | null) => opt === v,
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v || 'не выбрано',
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

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }

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

      @include lg {
        background-size: cover;
        background-position-x: -114px;
      }

      @include md {
        display: none;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__left {
      margin: 10px;
      width: calc(100% / 12 * 6 - 20px);

      @include md {
        width: calc(100% - 20px);
      }
    }

    &__right {
      margin: 10px;
      width: calc(100% / 12 * 6 - 20px);

      @include md {
        width: calc(100% - 20px);
      }
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 8px;
      @apply tw-text-text00;

    }

    &__text {
      @apply tw-text-text02 tw-text-base;

      @include lg {
        max-width: 300px;
      }
    }

    &__form {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__input {
      width: calc(100% / 12 * 6 - 20px);
      margin: 10px;

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__bottom {
      width: calc(100% - 20px);
      margin: 10px;
      padding-top: 12px;

      @include sm {
        padding-top: 0px;
      }
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__perc {
      @apply tw-text-text02 tw-text-sm;
      a {
        @apply tw-text-primary;
      }

      @include lg {
        @apply tw-text-xs;
      }

      @include sm {
        order: 10;
      }
    }
  }
</style>
