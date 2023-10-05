<template>
  <div class="floors-grid">
    <div class="plan">
      <FloorsNumbers class="plan__floors" :numbers="floorsNumbers" />
      <div class="plan__grid">
        <div
          class="plan__floor"
          v-for="floor in floorsList"
          :key="floor.number"
        >
          <GridItem
            class="plan__item"
            v-for="flat in floor.flats"
            :key="flat.id"
            :flat="flat"
          />
        </div>
      </div>
    </div>
    <div class="floors-grid__section">Подъезд {{ sectionName }}</div>
  </div>
</template>

<script setup lang="ts">
  import GridItem from './GridItem.vue';
  import FloorsNumbers from './FloorsNumbers.vue';
  import type { GridItem as GridItemType } from '../../store/filter-plan/composables/usePlan';

  interface Props {
    grid: GridItemType,
  }

  const props = defineProps<Props>();

  const sectionName = computed(() => props.grid.name);
  const floorsNumbers = computed<number[]>(() => props.grid.floors.map(floor => floor.number));
  const floorsList = computed(() => props.grid.floors);
</script>

<style lang="scss">
  .plan {
    &__item {
      flex-grow: 1;
    }
  }
</style>
<style scoped lang="scss">
  .floors-grid {
    &__section {
      padding: 24px 16px;
      @apply tw-text-text00 tw-text-base tw-text-center;
    }
  }

  .plan {
    padding-left: 60px;
    position: relative;

    &__floors {
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 100%;
      padding: 16px 0;
    }

    &__grid {
      padding: 16px;
      border-radius: 16px;
      @apply tw-border tw-border-solid tw-border-border00;
    }

    &__floor {
      display: flex;
      gap: 6px;

      & + & {
        margin-top: 6px;
      }
    }
  }
</style>
