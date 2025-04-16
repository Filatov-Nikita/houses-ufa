<template>
  <section class="section">
    <div class="wrapper">
      <TownHeader />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Ход строительства</h2>
      </div>
      <TownProgress :complex-id="townOneStore.townId!" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import TownHeader from '@/other-modules/town-header/index.vue'
  import TownProgress from '@/other-modules/town-progress/index.vue';
  import { useTownOne } from '@/stores/pages/town-one'
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  useCanonical();

  const route = useRoute();

  const bread = useBreadcrumbsStore();

  const townOneStore = useTownOne();

  await useAsyncData(() => {
    townOneStore.townId = parseInt(route.params.id as string);
    return townOneStore.showOne();
  }, {
    watch: [
      () => route.params.id,
    ],
  });

  watch(() => townOneStore.town, (town) => {
    if(town) {
      bread.set([
        { label: 'Главная', to: '/' },
        { label: 'Ход строительства', to: { name: 'progress' } },
        { label: town.data.name } ]);
    }
  }, { immediate: true });
</script>
