<template>
  <BaseWait :waiting="loading">
    <template #loader>
      <div class="tw-pt-8">
        <div class="tw-flex tw-flex-wrap -tw-m-[10px]">
          <div
            class="tw-w-1/2 tw-p-[10px]"
            v-for="_i in 6"
          >
            <BaseSkeleton class="tw-w-full tw-min-h-[150px] tw-rounded-2xl" />
          </div>
        </div>
      </div>
    </template>
    <div class="tw-py-10 tw-text-center" v-if="items.length === 0">
      Ничего не найдено, измените значения фильтров.
    </div>
    <div>
      <div class="places-area">
        <div class="places-list">
          <ListItem
            class="places-list__item"
            :place-name="placeName"
            v-for="item in items"
            v-bind="item"
          />
        </div>
      </div>
      <div class="tw-pt-6">
        <slot name="pagination" />
      </div>
    </div>
  </BaseWait>
</template>

<script setup lang="ts">
  import ListItem from './ListItem.vue';

  interface Item {
    area_total: string,
    price_total: string,
    number: string
  }

  interface Props {
    placeName: string,
    loading: boolean,
    items: Item[] | null
  }

  const props = defineProps<Props>();

  const items = computed(() => props.items ?? []);
</script>

<style scoped lang="scss">
  .places-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(50% - 20px);
      margin: 10px;

      @include md {
        width: calc(100% - 20px);
      }
    }
  }

  .places-area {
    padding-top: 24px;
    padding-right: 24px;
    margin-right: -24px;
    height: 500px;
    overflow: auto;
  }
</style>
