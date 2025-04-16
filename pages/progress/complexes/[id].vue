<template>
  <section class="section">
    <div class="wrapper">
      <ComplexHeader />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Ход строительства</h2>
      </div>
      <ComplexProgress :complex-id="complexOneStore.complexId!" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ComplexHeader from '@/other-modules/complex-header/index.vue';
  import ComplexProgress from '@/other-modules/complex-progress/index.vue';
  import { useComplexOne } from '@/stores/pages/complex-one';
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  useCanonical();

  const route = useRoute();

  const bread = useBreadcrumbsStore();

  const complexOneStore = useComplexOne();

  await useAsyncData(() => {
    complexOneStore.complexId = parseInt(route.params.id as string);
    return complexOneStore.showOne();
  }, {
    watch: [
      () => route.params.id,
    ],
  });

  watch(() => complexOneStore.complex, (complex) => {
    if(complex) {
      bread.set([
        { label: 'Главная', to: '/' },
        { label: 'Ход строительства', to: { name: 'progress' } },
        { label: complex.data.name } ]);
    }
  }, { immediate: true });

  useSeoMeta({
    title: () => 'Ход строительства | ' + complexOneStore.complex?.data.name,
    description: () => 'Ход строительства ' + complexOneStore.complex?.data.name,
    keywords: 'Онлайн камеры, ход строительства, жилой комплекс',
  });
</script>
