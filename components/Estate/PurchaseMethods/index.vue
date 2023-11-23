<template>
  <div class="purch-methods">
    <EstatePurchaseMethodsItem
      class="purch-methods__item"
      v-for="item in items"
      :key="item.title"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      title: 'Получить предложение',
      text: 'Условия покупки и специальные предложения.',
      icon: 'wallet',
    },
    {
      title: 'Купить онлайн',
      text: 'Условия покупки и специальные предложения.',
      icon: 'read',
    },
    {
      title: 'Взять ипотеку',
      text: 'Условия покупки и специальные предложения.',
      icon: 'rub',
    },
  ];
</script>

<style scoped lang="scss">
  .purch-methods {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(100% / 12 * 4 - 20px);
      margin: 10px;

      @include md {
        width: calc(100% - 20px);
      }
    }
  }
</style>
