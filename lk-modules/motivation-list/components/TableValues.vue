<template>
  <div class="table-values">
    <div class="table-values__head">
      <div class="table-values__th">
        Количество сделок в АН
      </div>
      <div class="table-values__th">
        Размер вознаграждения
      </div>
    </div>
    <div class="table-values__empty" v-if="items.length === 0">
      Нет записей
    </div>
    <div v-else class="table-values__body">
      <div class="table-values__row" v-for="(item, ind) in items" :key="item.id">
        <div class="table-values__td">
          <span class="table-values__count">{{ item.range }}</span>
        </div>
        <div class="table-values__td">
          <span class="table-values__percent" :class="getCellClasses(ind)">
            {{ item.reward }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MotivationLevel } from '../types';

  defineProps<{
    items: MotivationLevel[],
  }>();

  function getCellClasses(ind: number) {
    const indClasses = [
      'table-values__percent--green',
      'table-values__percent--orange',
      'table-values__percent--blue',
      'table-values__percent--red',
    ];
    return indClasses[ind % indClasses.length];
  }
</script>

<style scoped lang="scss">
  .table-values {
    border-radius: 16px;
    @apply tw-border tw-border-solid tw-border-border00;

    &__head, &__row {
      display: grid;
      grid-template-columns: 50% 50%;
    }

    &__th {
      padding: 24px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__td {
      padding: 24px;
      @apply tw-border-t tw-border-solid tw-border-border00;
    }

    &__count, &__percent {
      font-size: 20px;
      line-height: 32px;
    }

    &__percent {
      &--green {
        color: #4FBA78;
      }

      &--orange {
        color: #FFA000;
      }

      &--blue {
        color: #03A9F4;
      }

      &--red {
        color: #F4511E;
      }
    }

    &__empty {
      padding: 16px;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @apply tw-text-center tw-text-xl;
    }
  }
</style>
