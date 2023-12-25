<template>
  <section class="passport-data">
    <div class="passport-data__head">
      <h2 class="passport-data__title">
        Паспортные данные
      </h2>
      <button class="edit-btn" @click="onEdit">
        <BaseIcon class="edit-btn__icon" name="edit" />
        <span>Редактировать</span>
      </button>
    </div>
    <div class="passport-show">
      <div class="passport-show__item">
        <p class="passport-show__label">
          Серия и номер паспорта
        </p>
        <p class="passport-show__value">
          {{ passport.series_and_number }}
        </p>
      </div>
      <div class="passport-show__item">
        <p class="passport-show__label">
          Дата выдачи
        </p>
        <p class="passport-show__value">
          {{ $formatDate(passport.issue_date) }}
        </p>
      </div>
      <div class="passport-show__item">
        <p class="passport-show__label">
          Код подразделения
        </p>
        <p class="passport-show__value">
          {{ passport.department_code }}
        </p>
      </div>
      <div class="passport-show__item">
        <p class="passport-show__label">
          Выдан
        </p>
        <p class="passport-show__value">
          {{ passport.issued_by }}
        </p>
      </div>
      <div class="passport-show__item">
        <p class="passport-show__label">
          Адрес регистрации
        </p>
        <p class="passport-show__value">
          {{ passport.registration_address }}
        </p>
      </div>
      <div class="passport-show__item">
        <p class="passport-show__label">
          СНИЛС
        </p>
        <p class="passport-show__value">
          {{ passport.snils }}
        </p>
      </div>
      <div class="passport-show__item">
        <p class="passport-show__label">
          ИНН
        </p>
        <p class="passport-show__value">
          {{ passport.snils }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { PassportData } from '../store';
  import { useClientProfile } from '../store';

  defineProps<{
    passport: PassportData,
  }>();

  const profile = useClientProfile();

  function onEdit() {
    profile.editPassport = true;
  }
</script>

<style scoped lang="scss">
  .passport-data {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__title {
      font-size: 24px;
      line-height: 1.3;
      margin-bottom: 24px;
      @apply tw-text-text01;
    }

    &__head {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
    }
  }

  .passport-show {
    &__item {
      & + & {
        margin-top: 24px;
      }
    }

    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__value {
      font-size: 16px;
      line-height: 1.5;
      @apply tw-text-text00;
    }
  }

  .edit-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    @apply tw-text-primary tw-text-base;

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
