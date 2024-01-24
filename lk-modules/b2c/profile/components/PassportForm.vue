<template>
  <section class="passport-form">
    <h2 class="passport-form__title">
      Паспортные данные
    </h2>
    <p class="passport-form__text">
      Безопасное хранение паспортных данных облегчит оформление бронирование и ипотеки
    </p>
    <Form class="passport-form-grid" @submit="onSubmit" v-slot="{ isSubmitting }">
      <div class="passport-form-grid__items">
        <BaseInput
          class="passport-form-grid__item"
          name="birthday"
          label="Дата рождения"
          v-model="form.birthday"
          type="date"
        />
        <BaseInput
          class="passport-form-grid__item"
          name="series_and_number"
          label="Серия и номер паспорта"
          maska="#### ######"
          v-model="form.series_and_number"
        />
        <BaseInput
          class="passport-form-grid__item"
          name="issue_date"
          label="Дата выдачи"
          type="date"
          v-model="form.issue_date"
        />
        <BaseInput
          class="passport-form-grid__item"
          name="department_code"
          label="Код подразделения"
          maska="###-###"
          v-model="form.department_code"
        />
        <BaseInput
          class="passport-form-grid__item"
          name="issued_by"
          label="Выдан"
          v-model="form.issued_by"
        />
        <BaseInput
          class="passport-form-grid__item"
          name="registration_address"
          label="Адрес регистрации"
          v-model="form.registration_address"
        />
        <BaseInput
          class="passport-form-grid__item"
          name="snils"
          label="СНИЛС"
          v-model="form.snils"
        />
        <BaseInput
          class="passport-form-grid__item"
          name="inn"
          label="ИНН"
          v-model="form.inn"
        />
      </div>
      <div class="passport-form-grid__actions">
        <BaseButton type="submit" theme="green" :disabled="isSubmitting">
          Сохранить
        </BaseButton>
        <BaseButton theme="gray" @click="onCancel">
          Отмена
        </BaseButton>
      </div>
    </Form>
  </section>
</template>

<script setup lang="ts">
  import  { type PassportData, useClientProfile } from '../store';
  import { Form, SubmissionHandler } from 'vee-validate';

  const props = defineProps<{
    passport: PassportData | null,
  }>();

  const profile = useClientProfile();

  const form: PassportData = reactive(initForm(props.passport));

  function initForm(initial: PassportData | null): PassportData {
    const form = {
      birthday:             '',
      department_code:      '',
      inn:                  '',
      issue_date:           '',
      issued_by:            '',
      registration_address: '',
      series_and_number:    '',
      snils:                '',
    }

    return Object.assign(form, initial ?? {});
  }

  const onSubmit: SubmissionHandler = async function(_, ctx) {
    try {
      let data: PassportData;

      const body = {
        ...form,
        department_code: form.department_code.replace(/[^0-9]+/, ''),
        series_and_number: form.series_and_number.replace(/[^0-9]+/, ''),
      };

      if(props.passport === null) {
        data = await profile.createPassport(body);
      } else {
        data = await profile.updatePassport(body);
      }
      Object.assign(form, data);
      profile.editPassport = false;
    } catch(e) {
      const { data } = e as { data: { message: string, errors: Record<string, string[]> } };
      ctx.setErrors(data.errors);
    }
  }

  function onCancel() {
    profile.editPassport = false;
  }
</script>

<style scoped lang="scss">
  .passport-form {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 16px;
    }

    &__title {
      font-size: 24px;
      line-height: 1.3;
      margin-bottom: 16px;
      @apply tw-text-text00;

      @include sm {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }

    &__text {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 32px;
      @apply tw-text-text02;

      @include sm {
        margin-bottom: 16px;
      }
    }
  }

  .passport-form-grid {
    &__items {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__item {
      margin: 10px;
      width: calc(100% / 12 * 4 - 20px);

      @include lg {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include md {
        width: calc(100% - 20px);
      }
    }

    &__actions {
      padding-top: 32px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      @include sm {
        padding-top: 24px;
      }
    }
  }
</style>
