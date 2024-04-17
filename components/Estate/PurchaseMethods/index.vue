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
  import { usePublicHeader } from '@/other-modules/public-header/store';

  const items = [
    {
      title: 'Получить предложение',
      text: 'Условия покупки и специальные предложения.',
      icon: 'wallet',
      tag: 'button',
      onClick: () => usePublicHeader().toggleForm(),
    },
    {
      title: 'Купить онлайн',
      text: 'Условия покупки и специальные предложения.',
      icon: 'read',
      tag: resolveComponent('NuxtLink'),
      to: '/purchase',
      target: '_blank',
    },
    {
      title: 'Взять ипотеку',
      text: 'Условия покупки и специальные предложения.',
      icon: 'rub',
      tag: resolveComponent('NuxtLink'),
      to: '/ipoteka',
      target: '_blank',
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
