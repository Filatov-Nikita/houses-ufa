<template>
  <section class="estate-list-block">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Объекты</h2>
      </div>
      <div class="estate-list-block__filter">
        <BaseTabsGroup v-model="filter">
          <BaseTabsGroupItem name="all">Все</BaseTabsGroupItem>
          <BaseTabsGroupItem name="flats_in_city">Квартиры в Уфе</BaseTabsGroupItem>
          <BaseTabsGroupItem name="flats_out_city">Квартиры в Уфимском районе</BaseTabsGroupItem>
          <BaseTabsGroupItem name="towns">Коттеджи и таунхаусы</BaseTabsGroupItem>
        </BaseTabsGroup>
      </div>
      <div class="estate-list-grid">
        <template v-for="(item, index) in items">
          <ItemMilav
            v-if="item.type === 'milav'"
            key="milav"
            :class="itemClasses[index]"
            :item="item"
          />
          <Item
            v-else
            :key="`${item.type}${item.objectId}`"
            :class="itemClasses[index]"
            :item="item"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Item from './components/Item.vue';
  import ItemMilav from './components/ItemMilav.vue';
  import { data } from './data';

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

  const items = computed(() => {
    switch(filter.value) {
      case 'all': return data;
      case 'flats_in_city': return flatsInCity.value;
      case 'flats_out_city': return flatsOutCity.value;
      case 'towns': return towns.value;
    }
  });

  const flatsInCity = computed(() => data.filter((item) => item.type === 'flat' && item.is_in_city));
  const flatsOutCity = computed(() => data.filter((item) => item.type === 'flat' && !item.is_in_city));
  const towns = computed(() => data.filter((item) => item.type === 'town'));
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
