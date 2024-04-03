<template>
  <div class="block-entrance">
    <div class="block-entrance__left">
      <ComplexParams
        class="block-entrance__params"
        :houses="complex?.houses ?? []"
        :entrances="liter?.entrances ?? []"
        :house="liter"
        :entrance="entrance"
        :house-id="liter?.id"
        :entrance-id="entrance?.id"
        @update:entrance-id="$emit('update:entranceId', $event)"
        @update:house-id="$emit('update:houseId', $event)"
      />
      <StoreyGrid :floors="floors" :storey-id="storeyId" @update:storey-id="$emit('update:storeyId', $event)" />
    </div>
    <div class="block-entrance__right">
      <div class="block-entrance__head">
        <BaseButton class="block-liter__back" theme="gray" @click="$emit('back')">
          <div class="tw-flex tw-gap-4">
            <BaseIcon class="tw-w-6 tw-h-6" name="back" />
            <span>Назад</span>
          </div>
        </BaseButton>
        <div class="tw-max-w-full tw-overflow-y-hidden scroll-y">
          <BaseTabsGroup class="head-filter__tabs" theme="gray" v-model="head.currentFlatFilter">
            <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="genplan">
              На фасаде
            </BaseTabsGroupItem>
            <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="plan">
              Шахматка
            </BaseTabsGroupItem>
            <BaseTabsGroupItem class="head-filter__tab" theme="gray" name="list">
              Списком
            </BaseTabsGroupItem>
          </BaseTabsGroup>
        </div>
      </div>
      <StoreyPlan class="block-entrance__storey-plan" :streets="entrance?.streets ?? null" :storey="storey" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Entrance } from './types/entrance';
  import type { House } from './types/house';
  import type { Complex } from './types/complex';
  import type { Storey } from './types/storey';
  import StoreyGrid from './StoreyGrid.vue';
  import ComplexParams from './ComplexParams.vue';
  import StoreyPlan from './StoreyPlan.vue';
  import { useFilterHead } from '../../store/filter-head';

  const props = defineProps<{
    entrance: Entrance | null,
    liter: House | null,
    complex: Complex | null,
    storey: Storey | null,
    houseId: number | null,
    entranceId: number | null,
    storeyId: number | null,
  }>();

  const emits = defineEmits<{
    (event: 'back'): void,
    (event: 'update:houseId', id: number | null): void,
    (event: 'update:entranceId', id: number | null): void,
    (event: 'update:storeyId', id: number | null): void,
  }>();

  const head = useFilterHead();

  const floors = computed(() => {
    if(!props.entrance) return [];
    return [ ...props.entrance.floors ].reverse();
  });

  const availableFloors = computed(() => {
    return floors.value.filter(f => f.flats_free_count > 0);
  });

  watch(() => props.entrance, (newEntrance) => {
    if(newEntrance !== null && availableFloors.value[0]) {
      emits('update:storeyId',  availableFloors.value[0].id);
    }
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .block-entrance {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @include lg {
      gap: 20px;
    }

    &__params {
      padding-bottom: 16px;
      margin-bottom: 16px;
      @apply tw-border-b tw-border-solid tw-border-border00;
    }

    &__left {
      flex-basis: 285px;
      border-radius: 16px;
      padding: 16px;
      @apply tw-bg-white;

      @include lg {
        flex-basis: 200px;
      }

      @include md {
        flex-basis: 100%;
        width: 100%;
      }
    }

    &__right {
      flex-grow: 1;
      flex-basis: 500px;
      padding: 24px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      @apply tw-bg-white;

      @include md {
        flex-basis: 100%;
        width: 100%;
      }

      @include sm {
        padding: 16px;
      }
    }

    &__head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 56px;
    }

    &__storey-plan {
      flex-grow: 1;
    }
  }
</style>
