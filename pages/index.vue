<template>
  <section class="section">
    <div class="wrapper">
      <EstateTypeCards />
    </div>
  </section>

  <EstateSaleList class="section" />

  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">География наших комплексов</h2>
      </div>
      <OurObjectMap/>
    </div>
  </section>

  <EstateGridList class="section" />

  <div class="section">
    <div class="wrapper">
      <EstateMiniFilter />
    </div>
  </div>

  <section class="section">
    <div class="wrapper">
      <div class="section-2el">
        <h1 class="section__title">Квартиры в Уфе</h1>
        <div class="section__link section__link--desktop">
          <LinksShowAll to="/ipoteka">
            Все ипотечные предложения
          </LinksShowAll>
        </div>
      </div>
      <CreditListShort />
      <div class="section__link section__link--mobile tw-pt-6">
        <LinksShowAll to="/ipoteka">
          Все ипотечные предложения
        </LinksShowAll>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Познакомимся поближе</h2>
      </div>
      <CompanyShortInfo />
    </div>
  </section>

  <SectionNews class="section" />
</template>

<script setup lang="ts">
import SectionNews from '@/other-modules/last-news-list/components/SectionNews.vue';
import EstateSaleList from '@/other-modules/estate-sale-list/index.vue';
import EstateGridList from '@/other-modules/estate-list-grid/index.vue';
import EstateMiniFilter from '@/other-modules/estate-mini-filter/index.vue';
import EstateTypeCards from '@/other-modules/estate-type-cards/index.vue';
import CompanyShortInfo from '@/other-modules/company-short-info/index.vue';
import CreditListShort from '@/other-modules/credit-list-short/index.vue';
import OurObjectMap from '@/other-modules/our-object-map/index.vue';
import { data } from '@/seo/pages/index';

useHead({
  title: data.title,
  meta: [
    { name: 'description', content: data.description },
  ],
});
</script>
