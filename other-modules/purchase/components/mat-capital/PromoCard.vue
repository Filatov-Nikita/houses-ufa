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
        Во-первых, дети&nbsp;– это&nbsp;счастье, а&nbsp;во-вторых, теперь вы&nbsp;можете использовать материнский капитал для&nbsp;приобретения недвижимости от&nbsp;ГК&nbsp;«Жилой&nbsp;Квартал»!
      </p>
      <div class="purchase-promo-card__actions">
        <BaseButton class="purchase-promo-card__action" :to="{ name: 'complexes' }">
          Выбрать квартиру
        </BaseButton>
        <BaseButton class="purchase-promo-card__action" theme="white" :to="{ name: 'towns' }">
          Выбрать дом
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
