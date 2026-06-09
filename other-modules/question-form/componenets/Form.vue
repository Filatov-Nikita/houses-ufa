<template>
  <FormSection>
    <template #title>
      Остались вопросы?
    </template>
    <template #text>
      Оставьте свои контактные данные и&nbsp;мы&nbsp;свяжемся с&nbsp;вами
    </template>
    <Form ref="formRef" class="quest-form__form" @submit="onSubmit">
      <BaseInput
        rules="required"
        class="quest-form__input"
        name="name"
        label="Имя"
        placeholder="Иван"
        v-model="store.form.first_name"
      />
      <BaseInput
        rules="required"
        class="quest-form__input"
        name="phone"
        label="Телефон"
        placeholder="+7 (XXX) XXX XX XX"
        maska="+7 (###) ### ## ##"
        v-model="store.form.phone"
      />
      <BaseSelect
        rules="required"
        class="quest-form__input"
        name="time1"
        label="Когда позвонить"
        v-bind="selectProps(time1)"
        v-model="store.form.callback_date"
      />
      <BaseSelect
        rules="required"
        class="quest-form__input"
        name="time2"
        label="Во сколько позвонить"
        v-bind="selectProps(time2)"
        v-model="store.form.callback_time"
      />
      <div class="quest-form__bottom">
        <div class="quest-form__actions">
          <p class="quest-form__perc quest-form__input">
            Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="/docs/sogl.pdf" target="_blank">условиями обработки персональных данных</a>
          </p>
          <BaseButton class="quest-form__input" type="submit" :disabled="store.loading">
            Отправить
          </BaseButton>
        </div>
      </div>
    </Form>
  </FormSection>
</template>

<script setup lang="ts">
  import FormSection from './Section.vue';
  import { Form } from 'vee-validate';
  import { useQuestionForm } from '../store';
  import { useGoal } from '@/composables/useGoal';

  const orderGoal = useGoal('order');

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
      orderGoal.execute();
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

<style scoped src="../assets/style/form.scss"></style>
