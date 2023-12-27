<template>
  <div class="client-table">
    <div class="client-table-head">
      <div class="client-table-head__th">#</div>
      <div class="client-table-head__th">Покупатель</div>
      <div class="client-table-head__th">Телефон</div>
      <div class="client-table-head__th">Недвижимость</div>
    </div>
    <div class="client-table__body">
      <div class="client-table-row" v-for="item in items" :key="item.id">
        <div class="client-table-col">
          {{ item.id }}
        </div>
        <div class="client-table-col">
          {{ item.consumer.full_name }}
        </div>
        <div class="client-table-col">
          {{ item.consumer.cellphone }}
        </div>
        <div class="client-table-col">
          {{ getObjectName(item) }}
        </div>
        <div class="client-table-col client-table__actions">
          <button
            class="client-table-action"
            :disabled="item.consumer.bookings.length > 0"
            @click="$router.push({
              path: '/lk/b2t/apps/book',
              query: { id: item.object.id, type: item.object_type, shopperId: item.id }
            })"
          >
            Бронь
          </button>
          <button
            class="client-table-action"
            :disabled="item.consumer.mortgageClaims.length > 0"
            @click="$router.push({
              path: '/lk/b2t/apps/ipoteka',
              query: { id: item.object.id, type: item.object_type, shopperId: item.id }
            })"
          >
            Ипотека
          </button>
        </div>
        <div class="client-table__info" v-if="item.consumer.bookings.length > 0">
          <BookItem
            class="client-table__info-item"
            v-for="bookingItem in item.consumer.bookings"
            :key="bookingItem.id"
            :item="bookingItem"
          />
        </div>
        <div class="client-table__info" v-if="item.consumer.mortgageClaims.length > 0">
          <CreditItem
            class="client-table__info-item"
            v-for="creditItem in item.consumer.mortgageClaims"
            :key="creditItem.id"
            :item="creditItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ClientResponse } from '../types';
  import { getRoomsCount } from '@/plugins/rooms-count';
  import BookItem from './BookItem.vue';
  import CreditItem from './CreditItem.vue';

  const props = defineProps<{
    items: ClientResponse['data'],
  }>();

  function getObjectName(item: typeof props.items[number]) {
    if(item.object_type === 'flat') {
      return `
        ${item.object.complex.name},
         ${getRoomsCount(item.object.room_factor)}-комнатная,
         ${item.object.area_total}м²
      `;
    } else {
      return `${item.object.town.name}, ${item.object.layout.name}м²`;
    }
  }
</script>

<style scoped lang="scss">
  .client-table {
    &__body {
      padding-top: 16px;
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 8px;
    }

    &__info {
      grid-column: 2 / 6;
      margin-top: 16px;

      &-item {
        & + & {
          margin-top: 16px;
        }
      }
    }
  }

  .client-table-head {
    padding: 16px 24px;
    display: grid;
    grid-template-columns: 51px 230px 230px 280px;
    @apply tw-border-b tw-border-solid tw-border-border00;

    &__th {
      font-size: 14px;
      line-height: 24px;
      @apply tw-text-text02;
    }
  }

  .client-table-row {
    padding: 16px 24px;
    display: grid;
    grid-template-columns: 51px 230px 230px 280px 211px;

    & + & {
      margin-top: 16px;
    }
  }

  .client-table-col {
    @apply tw-text-text00 tw-text-base;
  }

  .client-table-action {
    border-radius: 8px;
    padding: 8px 12px;
    @apply tw-bg-base00 tw-text-base tw-text-text00 tw-block;

    &:disabled {
      opacity: 0.5 !important;
    }
  }
</style>
