<template>
  <div class="purchase-promo-grid">
    <article class="purchase-promo-card promo-item purchase-promo-grid__item">
      <h2 class="purchase-promo-card__title">
        У вас есть
        <span class="purchase-promo-card__text-accent">недвижимость</span>,
        но вы хотите расшириться или улучшить условия проживания?
      </h2>
      <p class="promo-item__body">
        Воспользуйтесь программой Трейд-ин от ГК «Жилой Квартал» и купите абсолютно любой объект от застройщика — квартиру, коттедж или таунхаус
      </p>
      <div class="purchase-promo-card__action">
        <BaseButton to="/main-filter.vue">
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
      margin-top: 24px;
      font-size: 16px;
      line-height: 1.75;
      @apply tw-text-text01;
    }
  }
</style>
