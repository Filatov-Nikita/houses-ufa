<template>
  <div class="purchase-promo-grid">
    <div class="purchase-promo-img purchase-promo-grid__item">
      <img class="purchase-promo-img__img" src="../../images/family-promo.jpg" width="1005" height="600" alt="фото интерьера">
    </div>
    <article class="purchase-promo-card promo-item purchase-promo-grid__item">
      <h2 class="purchase-promo-card__title">
        <span class="purchase-promo-card__text-accent">
          Вы недавно стали родителями?
        </span>
        <br>
        Принимайте поздравления!
      </h2>
      <p class="promo-item__body">
        Во-первых, дети – это счастье, а во-вторых, теперь вы можете использовать материнский капитал для приобретения абсолютно любой недвижимости от ГК «Жилой Квартал» — квартиру, коттедж или таунхаус!
      </p>
      <div class="purchase-promo-card__action">
        <BaseButton to="/main-filter.vue">
          Выбрать недвижимость
        </BaseButton>
      </div>
    </article>
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
