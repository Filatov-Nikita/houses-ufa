<template>
  <div class="table-values">
    <div class="table-values__head">
      <div class="table-values__th">
        №
      </div>
      <div class="table-values__th">
        Наименование
      </div>
      <div class="table-values__th">
        Срок действия&nbsp;с
      </div>
    </div>
    <div class="table-values__empty" v-if="items.length === 0">
      Нет записей
    </div>
    <div v-else class="table-values__body">
      <div class="table-values__row" v-for="(item, ind) in items" :key="item.id">
        <div class="table-values__td">
          {{ item.id }}
        </div>
        <div class="table-values__td">
          <a class="tw-text-primary tw-underline" :href="item.file.url" target="_blank">
            {{ item.file.name }} ({{ item.file.extension }})
          </a>
        </div>
        <div class="table-values__td">
          {{ $formatDate(item.actual_since) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { StratagemsItem } from '@/repositories/lk/b2t/motivation-stratagems';

  defineProps<{
    items: StratagemsItem[],
  }>();
</script>

<style scoped lang="scss">
  .table-values {
    border-radius: 16px;
    @apply tw-border tw-border-solid tw-border-border00;

    &__head, &__row {
      display: grid;
      grid-template-columns: 15% 50% 35%;
    }

    &__th {
      padding: 24px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__td {
      padding: 24px;
      @apply tw-border-t tw-border-solid tw-border-border00;
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
