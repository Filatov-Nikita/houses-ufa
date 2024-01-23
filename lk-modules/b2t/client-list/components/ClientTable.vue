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
          <span class="client-label-mobile">Номер</span>
          {{ item.id }}
        </div>
        <div class="client-table-col">
          <span class="client-label-mobile">Покупатель</span>
          {{ item.consumer.full_name }}
        </div>
        <div class="client-table-col">
          <span class="client-label-mobile">Телефон</span>
          {{ item.consumer.cellphone }}
        </div>
        <div class="client-table-col">
          <span class="client-label-mobile">Недвижимость</span>
          <RouterLink :to="getObjectLink(item)">
            {{ getObjectName(item) }}
          </RouterLink>
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

  function getObjectLink(item: typeof props.items[number]) {
    return `/${ item.object_type === 'flat' ? 'apartments' : 'towns' }/${item.object.id}`;
  }

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
  .client-label-mobile {
    display: none;

    @include sm {
      display: block;
      margin-bottom: 4px;
      @apply tw-text-text02;
    }
  }

  .client-table {
    &__body {
      padding-top: 16px;

      @include sm {
        padding-top: 0px;
      }
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 8px;

      @include sm {
        justify-content: flex-start;
      }
    }

    &__info {
      grid-column: 2 / 6;
      margin-top: 16px;

      @include sm {
        grid-column: 1;
      }

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

    @include lg {
      grid-template-columns: 31px 80px 120px 1fr;
      gap: 12px;
      padding: 16px;
    }

    @include sm {
      display: none;
    }

    &__th {
      font-size: 14px;
      line-height: 24px;
      @apply tw-text-text02;
    }
  }

  .client-table-row {
    padding: 16px 24px;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 51px 230px 230px 280px 211px;

    @include lg {
      grid-template-columns: 31px 80px 120px 1fr 170px;
      gap: 12px;
      padding: 16px;
    }

    @include sm {
      grid-template-columns: 100%;
      padding: 16px 0;
      gap: 16px;
    }

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
