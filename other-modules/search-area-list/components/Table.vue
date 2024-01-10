<template>
  <div class="search-table">
    <div class="search-table__head">
      <div class="search-table__th">Регион</div>
      <div class="search-table__th">Площадь</div>
      <div class="search-table__th">Назначение</div>
    </div>
    <div class="search-table__body">
      <div class="search-table__row">
        <div class="search-table__td">
          Республика Башкортостан
        </div>
        <div class="search-table__td">
          от 500 соток
        </div>
        <div class="search-table__td">
          ИЖС, ЛПХ, СХН, МКД
        </div>
        <div class="search-table__action">
          <BaseButton @click="showed = true">Отправить заявку</BaseButton>
        </div>
      </div>
    </div>
    <Modal v-model:showed="showed" />
  </div>
</template>

<script setup lang="ts">
  import Modal from './Modal.vue';

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .search-table {
    &__head {
      padding: 16px 24px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: 329px 329px 329px;
      gap: 20px;
      @apply tw-bg-base00;
    }

    &__row {
      padding: 16px 24px;
      border-radius: 8px;
      width: 100%;
      display: grid;
      grid-template-columns: 329px 329px 329px 185px;
      gap: 20px;

      & + & {
        border-top: 1px;
        border-style: solid;
        @apply tw-border-border00;
      }
    }

    &__td {
      align-self: center;
    }

    &__action {
      align-self: center;
    }
  }
</style>
