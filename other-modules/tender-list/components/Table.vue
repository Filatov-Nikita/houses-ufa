<template>
  <div class="tender-table">
    <div class="tender-table__head">
      <div class="tender-table__th">№ п/п</div>
      <div class="tender-table__th">Номенклатура закупки</div>
      <div class="tender-table__th">Предмет закупки</div>
    </div>
    <p class="tender-table__empty" v-if="items.length === 0">
      Нет записей
    </p>
    <div class="tender-table__body" v-else>
      <div class="tender-table__row" v-for="item in items" :key="item.id">
        <div class="tender-table__td tender-table__number">{{ item.number }}</div>
        <div class="tender-table__td">{{ item.nomenclature }}</div>
        <div class="tender-table__td">
          {{ item.object }}
        </div>
        <div class="tender-table__action">
          <BaseButton :to="item.url" target="_blank">
            Принять участие
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TenderOne } from '../types';

  defineProps<{
    items: TenderOne[],
  }>();
</script>

<style scoped lang="scss">
  .tender-table {
    min-width: 800px;

    &__head {
      padding: 16px 24px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: minmax(60px, 5.5%) minmax(250px, 50%) minmax(200px, 25%) minmax(180px, 15%);
      gap: 20px;
      @apply tw-bg-base00;
    }

    &__empty {
      padding: 30px 16px;
      text-align: center;
    }

    &__row {
      padding: 16px 24px;
      border-radius: 8px;
      width: 100%;
      display: grid;
      grid-template-columns: minmax(60px, 5.5%) minmax(250px, 50%) minmax(200px, 25%) minmax(180px, 15%);
      gap: 20px;

      & + & {
        border-top: 1px;
        border-style: solid;
        @apply tw-border-border00;
      }
    }

    &__td, &__th {
      @include sm {
        @apply tw-text-sm;
      }
    }

    &__action {
      align-self: center;
    }

    &__number {
      align-self: flex-start;
    }
  }
</style>
