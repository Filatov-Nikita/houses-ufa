<template>
  <div class="tw-py-6 tw-px-4 lg:tw-p-6 xl:tw-p-12 tw-rounded-2xl tw-bg-base01">
    <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-2  ">
      Остались вопросы? <br class="lg:tw-hidden"> Напишите нам
    </h2>
    <p class=" tw-text-text02 tw-mb-6 lg:tw-mb-8">
      Оставьте свои контактные данные, ваш вопрос и мы свяжемся с вами
    </p>
    <Form ref="formRef" @submit="onSubmit">
      <div class="tw-grid lg:tw-grid-cols-3 tw-gap-6 lg:tw-gap-5 tw-mb-6 xl:tw-mb-8">
        <BaseInput
          rules="required"
          name="name"
          label="Имя"
          placeholder="Иван"
          theme="white"
          v-model="store.form.first_name"
        />
        <BaseInput
          rules="required"
          name="phone"
          label="Телефон"
          placeholder="+7 (XXX) XXX XX XX"
          theme="white"
          maska="+7 (###) ### ## ##"
          v-model="store.form.phone"
        />
        <BaseInput
          rules="required|email"
          name="email"
          label="E-mail"
          placeholder="mail@mail.ru"
          theme="white"
          v-model="store.form.email"
        />
        <BaseInput
          name="message"
          label="Вопрос"
          placeholder="Я бы хотел (-а) узнать..."
          theme="white"
          class="lg:tw-col-span-3"
          v-model="store.form.message"
        />
      </div>
      <BaseButton
        theme="white"
        class="tw-mb-4"
        type="submit"
        :disabled="store.loading"
      >
        Отправить
      </BaseButton>
      <p class=" tw-text-text02 tw-text-body_xs lg:tw-text-body_m">
        Нажимая кнопку, вы соглашаетесь
        <a href="#" class="tw-text-primary">
          с условиями обработки персональных данных
        </a>
      </p>
    </Form>
  </div>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { useCompanyForm } from '../store'

  const store = useCompanyForm();
  const formRef = ref<any>(null);

  async function onSubmit() {
    try {
      await store.send();
      formRef.value.resetForm();
    } catch(e) {}
  }
</script>
