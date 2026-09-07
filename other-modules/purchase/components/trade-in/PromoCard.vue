<template>
  <div class="purchase-promo-grid">
    <article class="purchase-promo-card promo-item purchase-promo-grid__item">
      <h2 class="purchase-promo-card__title">
        У вас есть
        <span class="purchase-promo-card__text-accent">недвижимость</span>,
        но вы хотите расшириться или улучшить условия проживания?
      </h2>
      <p class="promo-item__body">
        Воспользуйтесь программой «Трейд-ин» от ГК «Жилой Квартал», и мы поможем легко продать вашу недвижимость, чтобы купить новую — уютную квартиру или просторный комфортабельный дом в одном из наших проектов.
      </p>
      <div class="purchase-promo-card__action">
        <BaseButton to="/main-filter">
          Смотреть объекты
        </BaseButton>
      </div>
    </article>
    <div class="purchase-promo-img purchase-promo-grid__item">
      <img class="purchase-promo-img__img" src="../../images/trade-in-promo.jpg" width="1005" height="582" alt="фото интерьера">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .promo-item {
    &__body {
      margin: 24px 0;
      font-size: 16px;
      line-height: 1.75;
      @apply tw-text-text01;

      @include sm {
        margin-top: 8px;
        font-size: 14px;
      }
    }
  }
</style>
