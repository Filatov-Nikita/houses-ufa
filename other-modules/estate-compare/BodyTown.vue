<template>
  <div class="compare__body">
    <CompareItemGroup
      v-if="generalValuesKeys['layout.type.title']"
      title="Тип"
      :data-list="generalValuesKeys['layout.type.title']"
      :border-bottom="true"
    ></CompareItemGroup>
    <CompareItemGroup
      v-if="generalValuesKeys['layout.number_of_floors']"
      title="Этажность"
      :data-list="generalValuesKeys['layout.number_of_floors']"
      :border-bottom="true"
    ></CompareItemGroup>
    <CompareItemGroup
      v-if="generalValuesKeys['layout.area_cottage']"
      title="Площадь дома"
      :data-list="generalValuesKeys['layout.area_cottage']"
      :border-bottom="true"
    >
      <template #item="{ item }">
        {{ $formatValue(item, 'м²') }}
      </template>
    </CompareItemGroup>
    <CompareItemGroup
      v-if="generalValuesKeys['area_land']"
      title="Площадь участка"
      :data-list="generalValuesKeys['area_land']"
      :border-bottom="true"
    >
      <template #item="{ item }">
        {{ $formatValue(getAreaLand(item), 'сот.') }}
      </template>
    </CompareItemGroup>
    <div class="accordion tw-mt-6">
      <div class="accordion__head">
        <div
          @click="openLocation = !openLocation"
          class="tw-text-body_m lg:tw-text-h5 tw-flex tw-gap-2 lg:tw-gap-4 tw-items-center tw-cursor-pointer tw-select-none"
        >
          <span> Расположение </span>
          <svg
            class="tw-w-6 tw-h-6 lg:tw-w-8 lg:tw-h-8 tw-transition-all tw-duration-100 tw-select-none"
            :class="[openLocation ? 'tw-rotate-0' : 'tw-rotate-180']"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7074 20.7083C26.6146 20.8013 26.5043 20.875 26.3829 20.9253C26.2615 20.9757 26.1314 21.0016 25.9999 21.0016C25.8685 21.0016 25.7384 20.9757 25.617 20.9253C25.4956 20.875 25.3853 20.8013 25.2924 20.7083L15.9999 11.4145L6.70745 20.7083C6.5198 20.8959 6.26531 21.0013 5.99995 21.0013C5.73458 21.0013 5.48009 20.8959 5.29245 20.7083C5.1048 20.5206 4.99939 20.2662 4.99939 20.0008C4.99939 19.7354 5.10481 19.4809 5.29245 19.2933L15.2924 9.29329C15.3853 9.20031 15.4956 9.12655 15.617 9.07623C15.7384 9.0259 15.8685 9 15.9999 9C16.1314 9 16.2615 9.0259 16.3829 9.07623C16.5043 9.12655 16.6146 9.20031 16.7074 9.29329L26.7074 19.2933C26.8004 19.3862 26.8742 19.4964 26.9245 19.6178C26.9748 19.7392 27.0007 19.8694 27.0007 20.0008C27.0007 20.1322 26.9748 20.2623 26.9245 20.3837C26.8742 20.5051 26.8004 20.6154 26.7074 20.7083Z"
              fill="#4FBA78"
            />
          </svg>
        </div>
      </div>
      <div class="accordion__body" :class="{ active: openLocation }">
        <div class="accordion__body-content">
          <CompareItemGroup
            v-if="generalValuesKeys['town.location']"
            title="Локация"
            :data-list="generalValuesKeys['town.location']"
            :border-bottom="true"
          />
          <CompareItemGroup
            v-if="generalValuesKeys['number']"
            title="Номер дома"
            :data-list="generalValuesKeys['number']"
            :border-bottom="true"
          />
        </div>
      </div>
    </div>
    <div class="requests tw-mt-5">
      <BaseButton
        v-for="item in generalValuesKeys.id"
        theme="gray"
        class="tw-text-body_s2 -tw-tracking-875 lg:tw-text-body_m"
        @click="headerStore.toggleForm"
      >
        Оставить заявку
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  //@ts-nocheck
  import CompareItemGroup from './ItemGroup.vue';
  import { usePublicHeader } from '@/other-modules/public-header/store';

  const headerStore = usePublicHeader();
  const openLocation = ref(true);

  defineProps({
    generalValuesKeys: Object,
  });

  function getAreaLand(area) {
    return (area / 100).toFixed(1);
  }
</script>


<style scoped lang="scss">
.requests {
  @apply tw-grid tw-grid-cols-2 lg:tw-flex lg:tw-flex-wrap tw-overflow-hidden tw-gap-4 lg:tw-gap-5 tw-justify-between;
  & > button {
    @apply tw-inline-block;

    @screen lg {
      width: calc(33% - 1.25rem);
    }
    @screen xl {
      width: calc(25% - 1.25rem);
    }
  }
}

.accordion {
  &__body {
    @apply tw-grid tw-grid-rows-[0fr] tw-overflow-hidden;
    @apply tw-transition-all tw-duration-100;
    &-content {
      @apply tw-min-h-0;
    }
    &.active {
      grid-template-rows: 1fr;
    }
  }
}
</style>
