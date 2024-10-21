<template>
  <div class="section">
    <div class="wrapper">
      <TownHeader />
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <Banner :townId="townOne.townId!" />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <TownFilter />
    </div>
  </section>

  <EstateSaleList class="section" />

  <section class="section">
    <div class="wrapper">
      <TownAbout />
    </div>
  </section>

  <TransportAccessibility />
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">
          Генплан коттеджного посёлка {{ townOne.town?.data.name }}
        </h2>
      </div>
      <TownGenplan :townId="townOne.townId!" />
    </div>
  </section>

  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Разнообразие преимуществ</h2>
      </div>
      <TownAdvantages :townId="townOne.townId!" />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Инфраструктура</h2>
      </div>
      <TownLocations :townId="townOne.townId!" />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Проекты домов</h2>
      </div>
      <ProjectList :townId="townOne.townId!" />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Материалы</h2>
      </div>
      <TownMaterials :townId="townOne.townId!" />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Технологии строительства</h2>
      </div>
      <HouseParts />
    </div>
  </section>
  <div class="section">
    <div class="wrapper">
      <Contacts />
    </div>
  </div>
  <section class="section" v-if="townOne.town && townOne.town.data.documents">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Документы</h2>
      </div>
      <Docs :documents="townOne.town.data.documents" />
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
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">
          Откройте для себя еще больше коттеджей и таунхаусов
        </h2>
      </div>
      <EstateMore />
    </div>
  </section>
</template>
<script lang="ts" setup>
import QuestionForm from '@/other-modules/question-form/index.vue'
import ProjectList from '@/other-modules/project-list/index.vue'
import TownAdvantages from '@/other-modules/town-advantages/index.vue'
import TownAbout from '@/other-modules/town-about/index.vue'
import TownHeader from '@/other-modules/town-header/index.vue'
import TownFilter from '@/other-modules/town-filter/index.vue'
import TownGenplan from '@/other-modules/town-genplan/index.vue'
import HouseParts from '@/other-modules/house-parts/index.vue'
import TownMaterials from '@/other-modules/town-materials/index.vue'
import TownLocations from '@/other-modules/town-locations/index.vue'
import EstateSaleList from '@/other-modules/estate-sale-list/index.vue'
import TransportAccessibility from '@/other-modules/transport-accessibility/index.vue'
import Docs from '@/other-modules/docs-download/index.vue'
import EstateMore from '@/other-modules/estate-more/index.vue'
import Contacts from '@/other-modules/contacts-map/index.vue'
import Banner from '@/other-modules/action-banner/index.vue'
import { useTownOne } from '@/stores/pages/town-one'
import { useBreadcrumbsStore } from '@/stores/breadcrumbs'

useCanonical()

const route = useRoute()

const townOne = useTownOne()
const bread = useBreadcrumbsStore()

const townSlug = computed<string>(() => route.params.id as string)

townOne.setTownId(townSlug.value)

await useAsyncData(() => townOne.showOne())

bread.set([
  { label: 'Главная', to: '/' },
  { label: townOne.town?.data.name ?? '' },
])

usePageMicro(`towns/slugs/${townOne.townId}/local_business.json`)
usePageMicro(`towns/slugs/${townOne.townId}/breadcrumbs.json`)

await usePageSeo(`towns/slugs/${townOne.townId}.json`)
</script>
