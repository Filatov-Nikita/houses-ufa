<template>
  <div class="search-table">
    <div class="search-table__head">
      <div class="search-table__th">Регион</div>
      <div class="search-table__th">Площадь</div>
      <div class="search-table__th">Назначение</div>
    </div>
    <p class="search-table__empty" v-if="items.length === 0">
      Нет записей
    </p>
    <div class="search-table__body" v-else>
      <div class="search-table__row" v-for="item in items" :key="item.id">
        <div class="search-table__td">
          {{ item.region }}
        </div>
        <div class="search-table__td">
          {{ item.area }}
        </div>
        <div class="search-table__td">
          {{ item.purpose }}
        </div>
        <div class="search-table__action">
          <BaseButton @click="showModal(item)">Отправить заявку</BaseButton>
        </div>
      </div>
    </div>
    <Modal v-model:showed="showed" :item="current" />
  </div>
</template>

<script setup lang="ts">
  import Modal from './Modal.vue';
  import type { AreaOne } from '../types'

  defineProps<{
    items: AreaOne[],
  }>();

  const current = ref<AreaOne>();
  const showed = ref(false);

  function showModal(item: AreaOne) {
    current.value = item;
    showed.value = true;
  }
</script>

<style scoped lang="scss">
  .search-table {
    min-width: 800px;

    &__head {
      padding: 16px 24px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: minmax(120px, 28%) minmax(120px, 28%) minmax(120px, 28%) 185px;
      gap: 20px;
      @apply tw-bg-base00;

      @include sm {
        padding: 16px;
      }
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
      grid-template-columns: minmax(120px, 28%) minmax(120px, 28%) minmax(120px, 28%) 185px;
      gap: 20px;

      @include sm {
        padding: 16px;
      }

      & + & {
        border-top: 1px;
        border-style: solid;
        @apply tw-border-border00;
      }
    }

    &__td {
      align-self: center;
    }

    &__td, &__th {
      @include sm {
        @apply tw-text-sm;
      }
    }

    &__action {
      align-self: center;
    }
  }
</style>
