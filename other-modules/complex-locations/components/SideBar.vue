<template>
  <div class="location-sidebar">
    <button
      v-for="item in types"
      :key="item.value"
      class="loc-item"
      :class="{ 'loc-item--active': item.value === store.currentType }"
      @click="setCurrentType(item.value)"
    >
      <div class="loc-item__wrap">
        <div
          v-if="item.value === 'all'"
          class="loc-item__icon-cover loc-item__icon-cover--all"
          :style="{ '--color': '#4FBA78' }"
        ></div>
        <div
          v-if="data[item.value]"
          class="loc-item__icon-cover"
          :style="{ '--color': data[item.value].color }"
        >
          <BaseIcon class="loc-item__icon" :name="data[item.value].icon" />
        </div>
        <span class="loc-item__name">{{ item.title }}</span>
      </div>
      <span class="loc-item__count">{{ item.count }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useComplexLocations } from '../store';
  import { data } from '../data';

  const store = useComplexLocations();

  const locations = computed(() => store.data?.data ?? []);

  const types = computed(() => {
    const list: Record<string, { title: string, value: string, count: number }> = {};

    list['all'] = {
      title: 'Все категории', value: 'all', count: locations.value.length,
    };

    locations.value.forEach(location => {
      if(!list[location.type.value]) {
        list[location.type.value] = Object.assign(location.type, { count: 1 });
      } else {
        list[location.type.value].count++;
      }
    });
    return Object.values(list);
  });

  function setCurrentType(value: string): void {
    store.currentType = value;
  }
</script>


<style scoped lang="scss">
  .location-sidebar {
    border-radius: 16px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07);
    padding: 16px;
    @apply tw-bg-white;
  }

  .loc-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 8px 16px 8px 8px;
    width: 100%;
    @apply tw-bg-base00;

    &:hover {
      @apply tw-bg-secondary-hover;
    }

    &--active {
      @apply tw-bg-secondary-press;
    }

    & + & {
      margin-top: 8px;
    }

    &__count {
      @apply tw-text-text02 tw-text-sm;
    }

    &__name {
      @apply tw-text-text00 tw-text-base;
    }

    &__wrap {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__icon-cover {
      border-radius: 8px;
      padding: 4px;
      background: var(--color);
      width: 32px;
      height: 32px;
      @apply tw-text-white;

      &--all {
        padding: 6px;
        &::before {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          @apply tw-bg-white;
        }
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
