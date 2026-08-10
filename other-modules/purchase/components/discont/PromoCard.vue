<template>
  <div class="purchase-promo-grid">
    <article class="purchase-promo-card promo-item purchase-promo-grid__item">
      <h2 class="purchase-promo-card__title">
        Зарабатывайте на <span class="purchase-promo-card__text-accent">рекомендациях</span>!
      </h2>
      <p class="promo-item__body tw-max-w-[546px]">
        Рекомендуйте ГК&nbsp;«Жилой&nbsp;Квартал» своим&nbsp;друзьям и&nbsp;получайте вознаграждение после заключения сделки:
      </p>
      <div class="profit-block promo-item__profit">
        <div class="profit-block__item">
          <p class="profit-block__title">Коттедж</p>
          <p class="profit-block__value">100 000 рублей</p>
        </div>
        <div class="profit-block__item">
          <p class="profit-block__title">Квартира</p>
          <p class="profit-block__value">50 000 рублей</p>
        </div>
      </div>
    </article>
    <div class="purchase-promo-img purchase-promo-grid__item">
      <img class="purchase-promo-img__img" src="../../images/discont-promo.jpg" width="1005" height="600" alt="фото интерьера">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .promo-item {
    &__body {
      margin-top: 24px;
      font-size: 18px;
      line-height: 1.5;
      @apply tw-text-text01;

      @include sm {
        margin-top: 16px;
        font-size: 16px;
        line-height: 1.75;
      }
    }

    &__profit {
      margin-top: 40px;

      @include sm {
        margin-top: 24px;
      }
    }
  }

  .profit-block {
    padding: 24px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include sm {
      padding: 16px;
    }

    &__item {
      & + & {
        margin-top: 12px;
      }
    }

    &__title {
      font-size: 18px;
      line-height: 1.75;
      @apply tw-text-text01;

      @include sm {
        font-size: 16px;
      }
    }

    &__value {
      margin-top: 4px;
      font-weight: 400;
      font-size: 40px;
      line-height: 1.1;
      @apply tw-text-primary tw-font-freesetdemi;

      @include sm {
        font-size: 28px;
        line-height: 1.375;
      }
    }
  }
</style>
