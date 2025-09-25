<template>
  <section class="req-list">
    <div class="head" @click="showed = !showed">
      <h2 class="title">Заявки</h2>
      <button class="toggle-btn" :class="{ 'toggle-btn--showed': showed }">
        <BaseIcon class="tw-w-6 tw-h-6" name="down" />
      </button>
    </div>
    <div class="table-area" v-if="showed">
      <table class="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Наименование</th>
            <th>Объект</th>
            <th>Статус</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.object_title ?? '-' }}</td>
            <td>
              <a
                v-if="getObjectLink(item.object)"
                :href="getObjectLink(item.object)!"
                target="_blank"
              >
                {{ buildName(item.object) }}
              </a>
              <template v-else>{{ buildName(item.object) }}</template>
            </td>
            <td>{{ item.external_status }}</td>
            <td>{{ $formatDate(item.created_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { BargainItem } from '../types';
  import { getRoomsCount } from '@/plugins/rooms-count';

  defineProps<{
    items: BargainItem[],
  }>();

  const showed = ref(false);

  function buildName(obj: BargainItem['object']) {
    if(!obj) return '-';
    if('complex' in obj) {
      return `
        ${obj.complex.name},
          ${getRoomsCount(obj.room_factor)}-комнатная,
          ${obj.area_total}м²
      `;
    } else if('town' in obj) {
      return `${obj.town.name}, ${obj.layout.name}м²`
    } else if('parking' in obj) {
      return `№${obj.number} - ${obj.parking.name}, ${obj.area_total}м²`
    } else if('storehouse' in obj) {
      return `№${obj.number} - ${obj.storehouse.name}, ${obj.area_total}м²`
    }
  }

  function getObjectLink(obj: BargainItem['object']) {
    if(!obj) return null;
    if('complex' in obj) return `/apartments/${obj.id}`;
    if('town' in obj) return `/towns/${obj.id}`;
    return null;
  }
</script>

<style scoped lang="scss">
  .req-list {
    padding: 16px;
    @apply tw-border tw-border-solid tw-border-border00 tw-rounded-2xl;
  }

  .title {
    @apply tw-text-xl;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .toggle-btn {
    width: 32px;
    height: 32px;
    padding: 4px;
    @apply tw-text-icon;

    &--showed {
      transform: rotate(180deg);
    }
  }

  .items {
    margin-top: 16px;
  }

  .table {
    min-width: 800px;
    margin-top: 16px;
    width: 100%;

    th {
      text-align: left;
    }

    td {
      text-align: left;
      @apply tw-text-sm tw-text-text01;
    }

    th, td {
      padding: 8px;
    }
  }

  .table-area {
    max-width: 100%;
    overflow-y: hidden;
  }
</style>
