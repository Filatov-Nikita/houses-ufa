<template>
  <Form ref="formRef" class="tender-form" @submit="onSubmit">
      <!-- v-model="store.form.first_name" -->
    <div class="tender-form__section">
      <BaseInput
        class="tender-form__column"
        rules="required"
        label="Имя"
        name="name"
        placeholder="Иван"
        />
      <BaseInput
        class="tender-form__column"
        label="Организация"
        name="text"
        placeholder="ООО СтройЭкспертПро"
        />
      <BaseInput
        class="tender-form__column"
        rules="required"
        label="Телефон"
        name="phone"
        placeholder="+7 (XXX) XXX XX XX"
        maska="+7 (###) ### ## ##"
        />
        <!-- v-model="store.form.phone" -->
      <BaseInput
        class="tender-form__column"
        rules="required|email"
        label="E-mail"
        name="email"
        placeholder="name@gmail.com"
        />
        <!-- v-model="store.form.email" -->
    </div>
      <!-- v-model="store.form.message" -->
    <div class="tender-form__actions">
      <div class="tender-form__section">
        <p class="tender-form__column tender-form__perc">
          Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="/docs/sogl.pdf" target="_blank">условиями обработки персональных данных</a>
        </p>
        <!-- :disabled="store.loading" -->
        <BaseButton class="tender-form__column" type="submit">
          Отправить
        </BaseButton>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { useGoal } from '@/composables/useGoal';
  import { data } from '@/composables/useGoal/data';

  // const store = useConsultForm();
  const formRef = ref<any>(null);
  async function onSubmit() {
    // try {
    //   await store.send();
    //   formRef.value.resetForm();
    //   orderGoal.execute();
    // } catch(e) {}
  }
</script>

<style scoped lang="scss">
  .tender-form {
    display: flex;
    flex-direction: column;

    &__column {
      margin: 10px;
      width: calc(50% - 20px);

      @include sm {
        width: calc(100% - 20px);
      }

      & + & {
        @include sm {
          margin-top: 16px;
        }
      }
    }

    &__section {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__actions {
      margin-top: 32px;
    }

    &__perc {
      @apply tw-text-sm tw-text-text02;

      a {
        @apply tw-text-primary;
      }
    }
  }
</style>
