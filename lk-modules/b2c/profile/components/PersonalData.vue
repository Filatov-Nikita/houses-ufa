<template>
  <BaseSkeleton v-if="profile.loadingProfile" class="tw-h-[200px] tw-rounded-2xl tw-w-full" />
  <div v-else-if="data" class="personal-data">
    <h1 class="personal-data__title">Профиль</h1>
    <p class="personal-data__fio">{{ data.full_name }}</p>
    <div class="personal-data__items">
      <div class="personal-data__item">
        <p class="personal-data__label">E-mail</p>
        <p class="personal-data__value">
          {{ data.email }}
        </p>
      </div>
      <div class="personal-data__item">
        <p class="personal-data__label">Телефон</p>
        <p class="personal-data__value">
          {{ data.cellphone }}
        </p>
      </div>
      <div v-if="data.passport" class="personal-data__item">
        <p class="personal-data__label">Дата рождения</p>
        <p class="personal-data__value">
          {{ $formatDate(data.passport.birthday) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useClientProfile } from '../store';

  const profile = useClientProfile();

  const data = computed(() => {
    return profile.profileData?.data;
  });
</script>

<style scoped lang="scss">
  .personal-data {
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
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;

      @include sm {
        font-size: 24px;
        line-height: 1.3;
        margin-bottom: 24px;
      }
    }

    &__fio {
      margin-bottom: 32px;
      @apply tw-text-text00 tw-text-2xl;

      @include sm {
        margin-bottom: 16px;
        @apply tw-text-xl;
      }
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      column-gap: 48px;
      row-gap: 24px;

      @include sm {
        row-gap: 16px;
      }
    }

    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__value {
      font-size: 20px;
      line-height: 1.6;
      @apply tw-text-text00;

      @include sm {
        font-size: 16px;
      }
    }
  }
</style>
