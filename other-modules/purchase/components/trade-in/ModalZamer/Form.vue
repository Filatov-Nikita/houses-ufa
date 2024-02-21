<template>
  <Form ref="formRef" class="milav-form" v-slot="{ isSubmitting }" @submit="onSubmit">
    <BaseInput
      rules="required"
      class="milav-form__input"
      name="name"
      label="Имя"
      placeholder="Иван"
      v-model="form.first_name"
    />
    <BaseInput
      rules="required"
      class="milav-form__input"
      name="phone"
      label="Телефон"
      placeholder="+7 (XXX) XXX XX XX"
      maska="+7 (###) ### ## ##"
      v-model="form.phone"
    />
    <BaseSelect
      rules="required"
      class="milav-form__input"
      name="time1"
      label="Когда позвонить"
      v-bind="selectProps(time1)"
      v-model="form.callback_date"
    />
    <BaseSelect
      rules="required"
      class="milav-form__input"
      name="time2"
      label="Во сколько позвонить"
      v-bind="selectProps(time2)"
      v-model="form.callback_time"
    />
    <div class="milav-form__bottom">
      <div class="milav-form__actions">
        <p class="milav-form__perc milav-form__input">
          Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="/docs/sogl.pdf" target="_blank">условиями обработки персональных данных</a>
        </p>
        <BaseButton class="milav-form__input" type="submit" :disabled="isSubmitting">
          Отправить
        </BaseButton>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { cleanPhone } from '@/helpers/index';
  import { useNotifyStore } from '@/stores/notify';

  const emit = defineEmits<{
    (event: 'success'): void,
  }>();

  const notify = useNotifyStore();
  const formRef = ref<any>();

  const form = reactive({
    first_name: '',
    phone: '',
    callback_date: 'Сегодня',
    callback_time: '10:00-12:00',
  });

  const time1 = [
    'Сегодня',
    'Завтра',
  ];

  const time2 = [
   '10:00-12:00',
   '14:00-16:00',
   '16:00-18:00',
  ];

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

  async function onSubmit() {
    const { error } = await useDataFetch('lead/recall', {
      method: 'POST',
      body: {
        ...form,
        theme: 'Вызвать оценщика - заявка',
        phone: cleanPhone(form.phone),
      }
    });

    if(error.value) {
      notify.create({ type: 'error', message: 'Не удалось отправить заявку' });
    } else {
      formRef.value.resetForm();
      emit('success');
      notify.create({ type: 'success', message: 'Заявка успешно отправлена!' });
    }
  }
</script>

<style scoped lang="scss">
  .milav-form {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

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
