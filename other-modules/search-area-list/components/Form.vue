<template>
  <Form ref="formRef" class="search-form" v-slot="{ isSubmitting }" @submit="onSubmit">
    <div class="search-form__section">
      <BaseInput
        class="search-form__column"
        rules="required"
        label="Имя"
        name="name"
        placeholder="Иван"
        v-model="form.first_name"
      />
      <BaseInput
        class="search-form__column"
        rules="required"
        label="Организация"
        name="text"
        placeholder="ООО СтройЭкспертПро"
        v-model="form.entity"
      />
      <BaseInput
        class="search-form__column"
        rules="required"
        label="Телефон"
        name="phone"
        placeholder="+7 (XXX) XXX XX XX"
        maska="+7 (###) ### ## ##"
        v-model="form.phone"
      />
      <BaseInput
        class="search-form__column"
        rules="required|email"
        label="E-mail"
        name="email"
        placeholder="name@gmail.com"
        v-model="form.email"
      />
    </div>
    <div class="search-form__actions">
      <div class="search-form__section">
        <p class="search-form__column search-form__perc">
          Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="/docs/sogl.pdf" target="_blank">условиями обработки персональных данных</a>
        </p>

        <BaseButton class="search-form__column" type="submit" :disabled="isSubmitting">
          Отправить
        </BaseButton>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { useNotifyStore } from '@/stores/notify';
  import { Form } from 'vee-validate';
  import { cleanPhone } from '@/helpers/index';
  import type { AreaOne } from '../types';

  const props = defineProps<{
    item?: AreaOne,
  }>();

  const emit = defineEmits<{
    (event: 'success'): void,
  }>();

  const notify = useNotifyStore();
  const formRef = ref<any>(null);

  const form = reactive({
    first_name: '',
    phone: '',
    email: '',
    entity: '',
  });

  async function onSubmit() {
    const { error } = await useDataFetch('/lead/recall', {
      method: 'POST',
      body: {
        ...form,
        phone: cleanPhone(form.phone),
        theme: `Заявка на земельный участок №${props.item!.id}`,
      },
    });

    if(error.value) {
      notify.create({ type: 'error', message: 'Не удалось создать заявку' });
    } else {
      emit('success');
      formRef.value.resetForm();
      notify.create({ type: 'success', message: 'Заявка успешно отправлена' });
    }
  }
</script>

<style scoped lang="scss">
  .search-form {
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
