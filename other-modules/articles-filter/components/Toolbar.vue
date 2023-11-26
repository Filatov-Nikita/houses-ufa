<template>
  <div class="toolbar">
    <div class="toolbar__tabs">
      <BaseTabsGroup class="toolbar__group" v-model="filter.currentTab">
        <BaseTabsGroupItem class="toolbar__tab" name="tiding" theme="white">
          Новости
        </BaseTabsGroupItem>
        <BaseTabsGroupItem class="toolbar__tab" name="mass_media" theme="white">
          СМИ о нас
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
    <div class="toolbar__params">
      <SelectYears />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SelectYears from './SelectYears.vue';
  import { useArticlesFilter } from '../store';

  const filter = useArticlesFilter();
</script>

<style scoped lang="scss">
  .toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 32px;

    @include sm {
      gap: 16px;
    }

    &__tabs {
      @include sm {
        width: 100%;
      }
    }

    &__group {
      @include sm {
        width: 100%;
      }
    }

    &__tab {
      @include sm {
        width: 100%;
      }
    }

    &__params {
      flex-basis: 160px;

      @include sm {
        flex-basis: auto;
        width: 100%;
      }
    }
  }
</style>
