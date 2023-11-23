<template>
  <BaseWait :waiting="loadingComplex">
    <template #loader>
      <div class="wrapper tw-space-y-8">
        <BaseSkeleton
          class="tw-w-full tw-h-[300px]"
          v-for="_i in 5"
        />
      </div>
    </template>

    <section class="section">
      <div class="wrapper">
        <ComplexHeader />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <ApartFilter />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <ComplexAbout />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <ComplexAdvantages />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <div class="section__top">
          <h2 class="section__title">Расположение и инфраструктура</h2>
        </div>
        <ComplexLocations />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <div class="section__top">
          <h2 class="section__title">Галерея</h2>
        </div>
        <ComplexGallery />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <div class="section__top">
          <h2 class="section__title">Генплан жилого комплекса {{ complex?.name }}</h2>
        </div>
        <ComplexGenplan />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <div class="section__top">
          <h2 class="section__title">Как купить</h2>
        </div>
        <PurchaseMethods />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <div class="section__top">
          <h2 class="section__title">Типы планировок в {{ complex?.name }}</h2>
        </div>
        <ComplexFlatGroups />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <div class="section__top">
          <h2 class="section__title">Ход строительства</h2>
        </div>
        <ComplexProgress />
      </div>
    </section>

    <section class="section">
      <div class="wrapper">
        <QuestionForm />
      </div>
    </section>
  </BaseWait>
</template>
<script lang="ts" setup>
import ApartFilter from '@/other-modules/apart-filter/index.vue';
import QuestionForm from '@/other-modules/question-form/index.vue';
import ComplexAbout from '@/other-modules/complex-about/index.vue';
import ComplexHeader from '@/other-modules/complex-header/index.vue';
import ComplexAdvantages from '@/other-modules/complex-advantages/index.vue';
import ComplexFlatGroups from '@/other-modules/complex-flat-groups/index.vue';
import ComplexGenplan from '@/other-modules/complex-genplan/index.vue';
import ComplexLocations from '@/other-modules/complex-locations/index.vue';
import ComplexGallery from '@/other-modules/complex-gallery/index.vue';
import ComplexProgress from '@/other-modules/complex-progress/index.vue';
import PurchaseMethods from '@/components/Estate/PurchaseMethods/index.vue';
import { useComplexOne } from '@/stores/pages/complex-one';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

const bread = useBreadcrumbsStore();

const complexOneStore = useComplexOne();
const { setComplexId, showOne, showHouses } = complexOneStore;

const route = useRoute();

const complexId = computed<number>(() => parseInt(route.params.id as string));
const complex = computed(() => complexOneStore.complex?.data ?? null);
const loadingComplex = computed(() => complexOneStore.loadingComplex);

await useLazyAsyncData(() => {
  setComplexId(complexId.value);
  return Promise.all([showOne(), showHouses()]);
});

watch(complex, () => {
  if(complex.value) {
    bread.set([ { label: 'Главная', to: '/' }, { label: complex.value?.name ?? '' } ]);
  }
}, { immediate: true });
</script>
