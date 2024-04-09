<template>
  <div class="section">
    <div class="wrapper">
      <TownHeader />
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <TownFilter />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <TownAbout />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Генплан коттеджного посёлка {{ townOne.town?.data.name }}</h2>
      </div>
      <TownGenplan :townId="+route.params.id" />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <TownAdvantages />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Инфраструктура</h2>
      </div>
      <TownLocations />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Проекты домов</h2>
      </div>
      <ProjectList :townId="+route.params.id" />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Материалы</h2>
      </div>
      <TownMaterials />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Как купить</h2>
      </div>
      <EstatePurchaseMethods />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>
<script lang="ts" setup>
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import ProjectList from '@/other-modules/project-list/index.vue';
  import TownAdvantages from '@/other-modules/town-advantages/index.vue';
  import TownAbout from '@/other-modules/town-about/index.vue';
  import TownHeader from '@/other-modules/town-header/index.vue';
  import TownFilter from '@/other-modules/town-filter/index.vue';
  import TownGenplan from '@/other-modules/town-genplan/index.vue';
  import TownMaterials from '@/other-modules/town-materials/index.vue';
  import TownLocations from '@/other-modules/town-locations/index.vue';
  import { useTownOne } from '@/stores/pages/town-one';
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  const route = useRoute();

  const townOne = useTownOne();
  const bread = useBreadcrumbsStore();

  townOne.setTownId(+route.params.id);

  await useAsyncData(() => townOne.showOne());

  bread.set([ { label: 'Главная', to: '/' }, { label: townOne.town?.data.name ?? '' } ]);

  await usePageSeo(`towns/slugs/${route.params.id}.json`);
</script>
