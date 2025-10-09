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
          <RouterLink v-if="item.object" :to="getObjectLink(item)">
            {{ getObjectName(item) }}
          </RouterLink>
          <!-- <button v-else class="bind-btn" @click="showBind(item.id)">Закрепить объект</button> -->
        </div>
        <div class="client-table-col client-table__actions">
          <!-- <div class="no-object-badge" v-if="item.object === null">
            У клиента нет привязанного объекта
          </div>
          <template v-else>
            <button
              v-if="item.consumer.bookings.length > 0"
              class="client-table-action"
              @click="showBind(item.id, true)"
            >
              Бронь +
            </button>
            <button
              v-else
              class="client-table-action"
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
          </template> -->
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
        <div class="client-table__info" v-if="item.bargains.length > 0">
          <RequestsList :items="item.bargains" />
        </div>
      </div>
    </div>
    <BaseModal v-model="bindModal" v-slot="{ hide }">
      <BaseModalCard is-full id="client-object-modal">
        <BtnsActionsBase class="close-modal" icon="close" @click="hide" />
        <BindObject
          v-if="bindClientId"
          :extraBooking="extraBooking"
          :clientId="bindClientId"
          @bind:success="bindSuccess"
        />
      </BaseModalCard>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
  import { ClientResponse } from '../types';
  import { getObjectName, getObjectLink } from '../shared';
  import BookItem from './BookItem.vue';
  import RequestsList from './RequestsList.vue';
  import CreditItem from './CreditItem.vue';
  import BindObject from '@/lk-modules/b2t/bind-object/index.vue';

  const props = defineProps<{
    items: ClientResponse['data'],
  }>();

  const emit = defineEmits<{
    (event: 'refresh'): void,
  }>();

  const bindModal = ref(false);
  const bindClientId = ref<number | null>(null);
  const extraBooking = ref<boolean>(false);

  function showBind(id: number, extra: boolean = false) {
    bindModal.value = true;
    bindClientId.value = id;
    extraBooking.value = extra;
  }

  function bindSuccess() {
    bindModal.value = false;
    bindClientId.value = null;
    extraBooking.value = false;
    emit('refresh');
  }
</script>

<style>
  #client-object-modal {
    max-width: 1420px;
  }
</style>

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

  .no-object-badge {
    max-width: 177px;
    padding: 8px 12px;
    border-radius: 8px;
    @apply tw-text-text02 tw-bg-base00 tw-text-center tw-text-sm;

    @include lg {
      max-width: 150px;
      padding: 8px 8px;
      @apply tw-text-xs;
    }
  }

  .bind-btn {
    border-radius: 8px;
    padding: 12px 24px;
    @apply tw-border tw-border-solid tw-border-primary tw-text-primary tw-text-base;

    @include lg {
      padding: 12px 12px;
      @apply tw-text-sm;
    }
  }

  .close-modal {
    position: absolute;
    right: 0px;
    top: 0px;
  }
</style>
