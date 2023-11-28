<template>
  <div class="company-header">
    <BaseBreadcrumbs class="company-header__bread" />
    <div class="company-header__bottom">
      <h1 class="company-header__title">Жилой Квартал</h1>
      <p class="company-header__text">— признанный бренд в Республике Башкортостан</p>
      <p class="company-header__caption">с 22 летней историей и сложившейся репутацией надежного партнера</p>
    </div>
    <img class="company-header__img" src="/images/img/about.png" alt="Коттеджный поселок">
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .company-header {
    border-radius: 16px;
    position: relative;
    height: 640px;
    padding: 64px 40px;
    display: flex;
    flex-direction: column;
    @apply tw-text-white;

    @include lg {
      padding: 40px;
      height: 540px;
    }

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 32px 16px;
      height: 450px;
    }

    &__text {
      font-size: 24px;
      line-height: 1.3;

      @include sm {
        @apply tw-text-lg;
      }
    }

    &__caption {
      margin-top: 16px;
      @apply tw-text-base;

      @include sm {
        @apply tw-text-sm;
      }
    }

    &__bottom {
      margin-top: auto;
    }

    &__title {
      margin-bottom: 24px;
      line-height: 1.2;
      font-size: 48px;
      @apply tw-font-freesetdemi;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__img {
      position: absolute;
      z-index: -2;
      object-position: center;
      object-fit: cover;
      border-radius: 16px;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      @apply tw-inset-0;
    }

    &::after {
      content: '';
      border-radius: 16px;
      display: block;
      z-index: -1;
      position: absolute;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%);
      @apply tw-inset-0;
    }
  }
</style>
