<template>
  <section>
    <div class="wrapper">
      <div class="sale-list-section">
        <div class="section__top">
          <h2 class="section__title">Спецпредложения</h2>
        </div>
        <Filter class="sale-list-section__filter" />
        <List />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Filter from './components/Filter.vue';
  import List from './components/List.vue';
  import { useEstateSaleList } from './store';

  const filter = useEstateSaleList();

  await useAsyncData(() => filter.show(), { lazy: true });
</script>

<style scoped lang="scss">
  .sale-list-section {
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }

    &__filter {
      margin-bottom: 32px;

      @include md {
        margin-bottom: 24px;
      }
    }
  }
</style>
