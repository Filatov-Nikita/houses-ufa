<template>
  <section class="estate-list-block">
    <div :class="{ 'wrapper': flexible !== true }">
      <div class="section__top" v-if="flexible !== true">
        <h2 class="section__title">Объекты</h2>
      </div>
      <div class="estate-list-block__filter">
        <BaseTabsGroup v-model="filter">
          <BaseTabsGroupItem name="all">Все</BaseTabsGroupItem>
          <BaseTabsGroupItem name="flats_in_ufa_city">Квартиры в Уфе</BaseTabsGroupItem>
          <BaseTabsGroupItem name="flats_in_ufa_district">Квартиры в Уфимском районе</BaseTabsGroupItem>
          <BaseTabsGroupItem name="cottages_and_townhouses">Коттеджи и таунхаусы</BaseTabsGroupItem>
        </BaseTabsGroup>
      </div>
      <div class="estate-list-grid">
        <Item
          v-for="(item, index) in items"
          :key="item.id"
          :class="currentItemClass(index)"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Item from './components/Item.vue';
  import type { PosterItem } from './types';

  defineProps<{
    flexible?: boolean,
  }>();

  type Types = 'all' | 'flats_in_city' | 'flats_out_city' | 'towns';

  const filter = ref<Types>('all');

  const itemClasses = [
    'estate-list-grid__item-l1-i1',
    'estate-list-grid__item-l1-i2',
    'estate-list-grid__item-l1-i3',
    'estate-list-grid__item-l2-i1',
    'estate-list-grid__item-l2-i2',
    'estate-list-grid__item-l3-i1',
    'estate-list-grid__item-l3-i2',
    'estate-list-grid__item-l3-i3',
  ];

  function currentItemClass(ind: number) {
    return itemClasses[ind % itemClasses.length];
  }

  const { data: response } = await useDataFetch<{ data: PosterItem[] }>('/marketing/posters');

  const data = computed(() => response.value?.data ?? []);

  const items = computed(() => {
    if(filter.value === 'all') return data.value;
    return data.value.filter(item => item.type === filter.value);
  });
</script>

<style scoped lang="scss">
  .estate-list-grid {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;

    &__item-l1-i1 {
      width: calc(50% - 16px);
      margin: 8px;

      @include lg {
        width: calc(100% - 16px);
      }
    }

    &__item-l1-i2 {
      width: calc(100% / 12 * 3 - 16px);
      margin: 8px;

      @include lg {
        width: calc(50% - 16px);
      }

      @include sm {
        width: calc(100% - 16px);
      }
    }

    &__item-l1-i3 {
      width: calc(100% / 12 * 3 - 16px);
      margin: 8px;

      @include lg {
        width: calc(50% - 16px);
      }

      @include sm {
        width: calc(100% - 16px);
      }
    }

    &__item-l2-i1 {
      width: calc(100% / 12 * 9 - 16px);
      margin: 8px;

      @include lg {
        width: calc(50% - 16px);
      }

      @include sm {
        width: calc(100% - 16px);
      }
    }

    &__item-l2-i2 {
      width: calc(100% / 12 * 3 - 16px);
      margin: 8px;

      @include lg {
        width: calc(50% - 16px);
      }

      @include sm {
        width: calc(100% - 16px);
      }
    }

    &__item-l3-i1 {
      width: calc(100% / 12 * 3 - 16px);
      margin: 8px;

      @include lg {
        width: calc(50% - 16px);
      }

      @include sm {
        width: calc(100% - 16px);
      }
    }

    &__item-l3-i2 {
      width: calc(100% / 12 * 3 - 16px);
      margin: 8px;

      @include lg {
        width: calc(50% - 16px);
      }

      @include sm {
        width: calc(100% - 16px);
      }
    }

    &__item-l3-i3 {
      width: calc(100% / 12 * 6 - 16px);
      margin: 8px;

      @include lg {
        width: calc(100% - 16px);
      }

      // @include sm {
      //   width: calc(100% - 16px);
      // }
    }
  }

  .estate-list-block {
    &__filter {
      max-width: 100%;
      width: 100%;
      overflow-y: hidden;
      margin-bottom: 32px;

      @include lg {
        margin-bottom: 24px;
      }
    }
  }
</style>
