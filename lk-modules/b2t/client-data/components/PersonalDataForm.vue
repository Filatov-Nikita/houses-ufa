<template>
  <div>
    <section class="book-passport-form">
      <h2 class="book-passport-form__title">
        Личные данные
      </h2>
      <Form class="book-passport-form-grid">
        <div class="book-passport-form-grid__items">
          <BaseInput
            class="book-passport-form-grid__item"
            name="full_name"
            label="ФИО"
            disabled
            :model-value="fullName"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="cellphone"
            label="Телефон"
            disabled
            :model-value="phone"
          />
        </div>
      </Form>
    </section>
    <section class="book-passport-form">
      <h2 class="book-passport-form__title">
        Паспортные данные
      </h2>
      <Form class="book-passport-form-grid" @submit="onSubmit" v-slot="{ isSubmitting }">
        <div class="book-passport-form-grid__items">
          <BaseInput
            class="book-passport-form-grid__item"
            name="birthday"
            label="Дата рождения"
            v-model="form.birthday"
            type="date"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="series_and_number"
            label="Серия и номер паспорта"
            v-model="form.series_and_number"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="issue_date"
            label="Дата выдачи"
            type="date"
            v-model="form.issue_date"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="department_code"
            label="Код подразделения"
            v-model="form.department_code"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="issued_by"
            label="Выдан"
            v-model="form.issued_by"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="registration_address"
            label="Адрес регистрации"
            v-model="form.registration_address"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="snils"
            label="СНИЛС"
            v-model="form.snils"
          />
          <BaseInput
            class="book-passport-form-grid__item"
            name="inn"
            label="ИНН"
            v-model="form.inn"
          />
        </div>
        <div class="book-passport-form-grid__actions">
          <BaseButton type="submit" theme="green" :disabled="isSubmitting">
            Продолжить
          </BaseButton>
        </div>
      </Form>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { type PassportData, useClientProfile } from '@/lk-modules/b2t/client-data/store/index';
  import { Form, SubmissionHandler } from 'vee-validate';

  const props = defineProps<{
    phone: string,
    fullName: string,
    passport: PassportData | null,
  }>();

  const emit = defineEmits<{
    (event: 'next'): void,
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
      if(props.passport === null) {
        data = await profile.createPassport(form);
      } else {
        data = await profile.updatePassport(form);
      }
      Object.assign(form, data);
      emit('next');
    } catch(e) {
      const { data } = e as { data: { message: string, errors: Record<string, string[]> } };
      ctx.setErrors(data.errors);
    }
  }
</script>

<style scoped lang="scss">
  .book-passport-form {
    &__title {
      font-size: 24px;
      line-height: 1.3;
      margin-bottom: 16px;
      @apply tw-text-text00;
    }

    & + & {
      margin-top: 40px;
    }
  }

  .book-passport-form-grid {
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
      padding-top: 40px;
    }
  }
</style>
