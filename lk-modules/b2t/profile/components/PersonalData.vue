<template>
  <BaseSkeleton v-if="profile.loadingProfile" class="tw-h-[200px] tw-rounded-2xl tw-w-full" />
  <div v-else-if="data" class="personal-data">
    <h1 class="personal-data__title">Профиль</h1>
    <p class="personal-data__fio">{{ data.full_name }}</p>
    <div class="personal-data__grid">
      <div class="personal-data__items">
        <div class="personal-data__item personal-data__item--long">
          <p class="personal-data__label">Агентство</p>
          <p class="personal-data__value">
            {{ data.agency.legal_name }}
          </p>
        </div>
        <div class="personal-data__item">
          <p class="personal-data__label">Телефон</p>
          <p class="personal-data__value">
            {{ data.cellphone }}
          </p>
        </div>
        <div class="personal-data__item personal-data__item--long">
          <p class="personal-data__label">E-mail</p>
          <p class="personal-data__value">
            {{ data.email }}
          </p>
        </div>
        <div class="personal-data__item">
          <p class="personal-data__label">Дата рождения</p>
          <p class="personal-data__value">
            {{ $formatDate(data.birthday) }}
          </p>
        </div>
      </div>
      <slot name="rank"></slot>
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

    &__grid {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 30px;
      justify-content: space-between;
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
        margin-bottom: 24px;
      }
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      column-gap: 48px;
      row-gap: 20px;
      flex-basis: 552px;

      @include sm {
        width: 100%;
        flex-basis: 100%;
      }
    }

    &__item {
      &--long {
        flex-basis: 330px;
      }

      @include sm {
        width: 100%;
        flex-basis: 100%;
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
    }
  }
</style>
