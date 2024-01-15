<template>
  <div class="category-filter">
    <BaseTabsGroup class="category-filter__tabs" v-model="store.favType">
      <BaseTabsGroupItem name="flats" :disabled="store.showedCompare && store.favType !== 'flats'">
        Квартиры
      </BaseTabsGroupItem>
      <BaseTabsGroupItem name="towns" :disabled="store.showedCompare && store.favType !== 'towns'">
        Коттеджи и таунхаусы
      </BaseTabsGroupItem>
      <BaseTabsGroupItem name="places" :disabled="store.showedCompare">Кладовые</BaseTabsGroupItem>
      <BaseTabsGroupItem name="parkings" :disabled="store.showedCompare">Машиноместо</BaseTabsGroupItem>
    </BaseTabsGroup>
    <BaseButton
      v-if="store.favType !== 'parkings' && store.favType !== 'places'"
      :disabled="!canCompare"
      class="compare-btn"
      theme="white"
      padding-classes="tw-p-4"
      @click="store.showedCompare = !store.showedCompare"
    >
      <BaseIcon
        class="compare-btn__icon"
        color="tw-fill-primary"
        :name="store.showedCompare ? 'back' : 'comparison'"
      />
      <span>{{ store.showedCompare ? 'Вернуться' : 'Сравнение' }}</span>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import { useFavList } from '../store';

  const store = useFavList();

  const canCompareFlats = computed(() => {
    return store.favType === 'flats' && store.flats.length > 1;
  });

  const canCompareTowns = computed(() => {
    return store.favType === 'towns' && store.towns.length > 1;
  });

  const canCompare = computed(() => {
    return canCompareFlats.value || canCompareTowns.value;
  });
</script>

<style scoped lang="scss">
  .category-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 20px;

    @include sm {
      gap: 8px;
    }

    &__tabs {
      overflow-y: hidden;
      @include sm {
        width: 100%;
      }
    }
  }

  .compare-btn {
    display: flex !important;
    align-items: center;
    gap: 8px;

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
