<template>
  <div class="section">
    <div class="wrapper">
      <CompanyHeader />
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <CompanyShortInfo />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title tw-mb-4 lg:tw-mb-6">Построенные объекты</h2>
      </div>
      <CompanyObjectList />
    </div>
  </section>
  <section class="section" id="history">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title tw-mb-4 lg:tw-mb-6">История</h2>
      </div>
      <History/>
    </div>
  </section>
  <section class="section" id="team">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title tw-mb-4 lg:tw-mb-6">Команда</h2>
      </div>
      <CompanyTeam />
    </div>
  </section>
  <section class="section" id="work">
    <div class="wrapper">
      <CompanyVacancies />
    </div>
  </section>
  <section class="section" id="callback">
    <div class="wrapper">
      <CompanyForm />
    </div>
  </section>
</template>
<script lang="ts" setup>
import CompanyShortInfo from '@/other-modules/company-short-info/index.vue';
import CompanyHeader from '@/other-modules/company-header/index.vue';
import CompanyVacancies from '@/other-modules/company-vacancies/index.vue';
import CompanyForm from '@/other-modules/company-form/index.vue';
import CompanyObjectList from '@/other-modules/company-object-list/index.vue';
import History from '@/components/cards/History.vue';
import CompanyTeam from '@/other-modules/company-team/index.vue';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

const bread = useBreadcrumbsStore();

bread.set([
  { label: 'Главная', to: '/' }, { label: 'О компании', to: '/about' },
]);

await usePageSeo('about.json');
</script>
