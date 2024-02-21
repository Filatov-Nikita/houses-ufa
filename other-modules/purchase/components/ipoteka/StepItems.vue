<template>
  <div class="purchase-step-items">
    <article class="purchase-card-item purchase-step-items__item">
      <div class="purchase-card-item__top">
        <div class="purchase-card-item__icon-wrap">
          <BaseIcon fit :name="items[0].icon" />
        </div>
        <span class="purchase-card-item__number">0{{ 1 }}</span>
      </div>
      <div class="purchase-card-item__body">
        <p v-html="items[0].body"></p>
      </div>
      <div class="bank-items">
        <span class="bank-items__item">
          <img width="24px" height="24px" src="../../images/banks/sber.svg" />
        </span>
        <span class="bank-items__item">
          <img width="24px" height="24px" src="../../images/banks/domrf.svg" />
        </span>
        <span class="bank-items__item">
          <img width="24px" height="24px" src="../../images/banks/vtb.svg" />
        </span>
        <span class="bank-items__item">
          <img width="24px" height="24px" src="../../images/banks/sel.svg" />
        </span>
        <span class="bank-items__item">
          <img width="24px" height="24px" src="../../images/banks/gaz.svg" />
        </span>
      </div>
    </article>
    <article class="purchase-card-item purchase-step-items__item">
      <div class="purchase-card-item__top">
        <div class="purchase-card-item__icon-wrap">
          <BaseIcon fit :name="items[1].icon" />
        </div>
        <span class="purchase-card-item__number">0{{ 2 }}</span>
      </div>
      <div class="purchase-card-item__body">
        <p>{{ items[1].body }}</p>
      </div>
    </article>
    <article class="purchase-card-item purchase-step-items__item">
      <div class="purchase-card-item__top">
        <div class="purchase-card-item__icon-wrap">
          <BaseIcon fit :name="items[2].icon" />
        </div>
        <span class="purchase-card-item__number">0{{ 3 }}</span>
      </div>
      <div class="purchase-card-item__body">
        <p v-html="items[2].body"></p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      body: 'Выбор банка',
      icon: 'bank',
    },
    {
      body: 'Одобрение банком суммы кредита и одобрение сделки',
      icon: 'rub',
    },
    {
      body: 'Первоначальный взнос',
      icon: 'percent',
    },
  ];
</script>

<style scoped lang="scss">
  .bank-items {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    &__item {
      border-radius: 8px;
      width: 40px;
      height: 40px;
      padding: 8px;
      @apply tw-bg-white;

      img {
        width: 100%;
      }
    }
  }
</style>
