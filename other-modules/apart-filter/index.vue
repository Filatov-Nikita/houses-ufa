<template>
  <div class="apart-filter">
    <div class="tab-zone">
      <BaseTabsGroup class="tab-zone__groups" v-model="currentTab">
        <BaseTabsGroupItem class="tab-zone__item" theme="white" name="flats">
          {{ tabLabels[0] }}
        </BaseTabsGroupItem>
        <BaseTabsGroupItem class="tab-zone__item" theme="white" name="objects">
          {{ tabLabels[1] }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
      <BaseTabsTabContent leave-classes="" enter-classes="" v-model="currentTab">
        <BaseTabsTabContentItem name="flats" key="flats">
          <FlatFilter />
        </BaseTabsTabContentItem>
        <BaseTabsTabContentItem name="objects" key="objects">
          2
        </BaseTabsTabContentItem>
      </BaseTabsTabContent>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FlatFilter from './components/FlatFilter.vue';

  const tabLabels = ['Квартиры', 'Машиноместо и кладовые'];
  const currentTab = ref('flats');
</script>
<style scoped lang="scss">
  .tab-zone {
    &__groups {
      width: 100%;
      margin-bottom: 32px;
    }

    &__item {
      flex-grow: 1;
    }
  }
</style>
