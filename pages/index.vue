<template>
  <section>
    <div class="wrapper">
      <EstateTypeCards />
    </div>
  </section>
  <EstateSaleList />
  <EstateGridList />
  <div>
    <div class="wrapper">
      <EstateMiniFilter />
    </div>
  </div>
  <section>
    <div class="wrapper">
      <div class="section-2el">
        <h2 class="section__title">Варианты покупки объектов недвижимости</h2>
        <LinksShowAll to="/ipoteka">Все ипотечные предложения</LinksShowAll>
      </div>
      <CreditListShort />
    </div>
  </section>
  <section>
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Познакомимся поближе</h2>
      </div>
      <CompanyShortInfo />
    </div>
  </section>
  <SectionNews />
</template>

<script setup lang="ts">
import SectionNews from '@/other-modules/last-news-list/components/SectionNews.vue';
import EstateSaleList from '@/other-modules/estate-sale-list/index.vue';
import EstateGridList from '@/other-modules/estate-list-grid/index.vue';
import EstateMiniFilter from '@/other-modules/estate-mini-filter/index.vue';
import EstateTypeCards from '@/other-modules/estate-type-cards/index.vue';
import CompanyShortInfo from '@/other-modules/company-short-info/index.vue';
import CreditListShort from '@/other-modules/credit-list-short/index.vue';
</script>
