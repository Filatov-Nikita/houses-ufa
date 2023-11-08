<template>
  <BaseWait :waiting="loadingComplex">
    <template #loader>
      <div class="tw-container tw-space-y-8">
        <BaseSkeleton
          class="tw-w-full tw-h-[300px]"
          v-for="_i in 5"
        />
      </div>
    </template>

    <section>
      <div class="tw-container">
        <ComplexHeader />
      </div>
    </section>

    <section>
      <div class="tw-container">
        <ApartFilter />
      </div>
    </section>

    <section>
      <div class="wrapper">
        <ComplexAbout />
      </div>
    </section>

    <section>
      <div class="wrapper">
        <ComplexAdvantages />
      </div>
    </section>

    <section>
      <div class="wrapper">
        <PurchaseMethods />
      </div>
    </section>

    <section>
      <div class="wrapper">
        <div class="section__top">
          <h2 class="section__title">Типы планировок в {{ complex?.name }}</h2>
        </div>
        <ComplexFlatGroups />
      </div>
    </section>

    <section>
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
