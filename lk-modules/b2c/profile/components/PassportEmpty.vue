<template>
  <section class="passport-empty">
    <div class="passport-empty__decor">
      <BaseIcon class="passport-empty__icon" name="profile-card" />
    </div>
    <h2 class="passport-empty__title">Паспортные данные</h2>
    <p class="passport-empty__text">
      Безопасное хранение паспортных данных облегчит оформление бронирование и ипотеки
    </p>
    <BaseButton @click="onClick">
      Заполнить
    </BaseButton>
  </section>
</template>

<script setup lang="ts">
  import { useClientProfile } from '../store';

  const profile = useClientProfile();

  function onClick() {
    profile.editPassport = true;
  }
</script>


<style scoped lang="scss">
  .passport-empty {
    padding: 40px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @apply tw-bg-white;

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 16px;
    }

    &__title {
      text-align: center;
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 8px;
      @apply tw-text-text00;
    }

    &__text {
      text-align: center;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 32px;
      @apply tw-text-text02;

      @include sm {
        margin-bottom: 16px;
      }
    }

    &__decor {
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 32px;
      @apply tw-bg-base00 tw-text-text01;

      @include sm {
        margin-bottom: 16px;
      }
    }

    &__icon {
      width: 32px;
      height: 32px;
    }
  }
</style>
