<template>
  <section class="section" v-if="dataItem">
    <div class="wrapper">
      <div class="tw-grid tw-gap-6 lg:tw-grid-cols-2 lg:tw-gap-5">
        <Map
          class="tw-h-[480px] lg:tw-h-auto"
          id="transport-map"
          :locations="[]"
          :objectData="{
            name: town.name,
            latitude: town.latitude,
            longitude: town.longitude,
            sight_picture: town.sight_picture
          }"
        />
        <div class="tw-bg-white tw-rounded-2xl tw-px-4 tw-py-6 lg:tw-p-6">
          <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-6 lg:tw-mb-8">
            Транспортная доступность
          </h2>
          <p class="tw-mb-6 lg:tw-mb-8">
            {{ dataItem.text }}
          </p>
          <div class="tw-grid tw-gap-4 lg:tw-grid-cols-2 lg:tw-gap-5">
            <div
              class="tw-bg-base00 tw-p-4 tw-rounded-2xl tw-grid tw-gap-10"
              v-for="item in dataItem.items"
            >
              <div class="tw-flex tw-gap-4 tw-items-center">
                <img
                  :src="item.img"
                  alt=""
                  class="tw-object-cover tw-w-12 tw-h-12 tw-rounded-full"
                />
                <h4>{{ item.name }}</h4>
              </div>
              <div>
                <div class="tw-text-h4 lg:tw-text-h5 tw-mb-1">{{ item.len }}</div>
                <p class="tw-text-text02 tw-text-body_m">{{ item.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
  import Map from '@/components/Estate/Location/Map.vue'
  import { data } from './model/data';
  import type { EstateCard } from '@/types/estate/estate-card';

  const props = defineProps<{
    townSlug: string,
    town: EstateCard,
  }>();

  const dataItem = computed(() => data[props.townSlug]);
</script>
<style lang="scss" scoped></style>
