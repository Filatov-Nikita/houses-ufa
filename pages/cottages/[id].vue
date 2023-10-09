<template>
  <section>
    <div class="tw-container">
      <CardsPlot v-if="houseBuilding" />
      <CardsHomeBuilding v-else :is-buildinghouse="true" />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div
        class="tw-grid lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4 lg:tw-gap-5"
      >
        <CardsApartmentMini
          v-for="n in 4"
          v-bind="{
            title: 'Брайтон Плюс',
            type: 'Коттедж',
            square: '409.52',
            src: ['/images/img/test.png', '/images/img/test.png'],
          }"
        />
      </div>
      <BaseButton theme="white" class="tw-w-full tw-mt-6 xl:tw-mt-8">
        Показать ещё 8 из 128
      </BaseButton>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Ипотека</h2>
      </div>
      <CardsIpotekaForm />
    </div>
  </section>
  <section>
    <div class="tw-container">
      <FormCard1 />
    </div>
  </section>
</template>
<script lang="ts" setup>
const houseBuilding = ref(false)
</script>
<style lang="scss" scoped></style>
