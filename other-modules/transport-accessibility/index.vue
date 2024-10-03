<template>
  <section class="section">
    <div class="wrapper">
      <div class="tw-grid tw-gap-6 lg:tw-grid-cols-2 lg:tw-gap-5">
        <Map class="tw-h-[480px] lg:tw-h-auto" />
        <div class="tw-bg-white tw-rounded-2xl tw-px-4 tw-py-6 lg:tw-p-6">
          <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-6 lg:tw-mb-8">
            Транспортная доступность
          </h2>
          <p class="tw-mb-6 lg:tw-mb-8">
            Современный загородный квартал в 15 км от МКАД по Дмитровскому шоссе
            в живописном посёлке Шолохово. В 2023 году до близлежащего поселка
            «Северный» дотянется Люблинско-Дмитровская линия метро.
          </p>
          <div class="tw-grid tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-5">
            <div class="tw-bg-base00 tw-p-4 tw-rounded-2xl tw-grid tw-gap-10">
              <div class="tw-flex tw-gap-4 tw-items-center">
                <img
                  src="/images/img/country_real_estate.png"
                  alt=""
                  class="tw-object-cover tw-w-12 tw-h-12 tw-rounded-full"
                />
                <h4>Монумент Дружбы</h4>
              </div>
              <div>
                <div class="tw-text-h4 lg:tw-text-h5 tw-mb-1">5 км</div>
                <p class="tw-text-text02 tw-text-body_m">22 мин</p>
              </div>
            </div>
            <div class="tw-bg-base00 tw-p-4 tw-rounded-2xl tw-grid tw-gap-10">
              <div class="tw-flex tw-gap-4 tw-items-center">
                <img
                  src="/images/img/country_real_estate.png"
                  alt=""
                  class="tw-object-cover tw-w-12 tw-h-12 tw-rounded-full"
                />
                <h4>Монумент Дружбы</h4>
              </div>
              <div>
                <div class="tw-text-h4 lg:tw-text-h5 tw-mb-1">5 км</div>
                <p class="tw-text-text02 tw-text-body_m">22 мин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import Map from './components/Map.vue'
</script>
<style lang="scss" scoped></style>
