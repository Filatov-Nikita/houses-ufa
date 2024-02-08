<template>
  <div class="object-item">
    <div class="object-item-info">
      <div v-if="info.image" class="object-item-info__img-wrap">
        <img class="object-item-info__img" :src="info.image" alt="">
      </div>
      <div class="object-item-info__body">
        <p class="object-item-info__name">{{ info.name }}</p>
        <div class="object-item-info__section">
          <template v-for="(section, index) in info.sections">
            <p>{{ section }}</p>
            <div v-if="index < info.sections.length - 1" class="object-item-info__dot"></div>
          </template>
        </div>
      </div>
    </div>
    <div class="object-item__docs object-docs" v-if="info.files.length > 0">
      <div class="object-docs__toolbar" @click="showedDocs = !showedDocs">
        <p class="object-docs__title">Документы</p>
        <button class="object-docs__toggle">
          <BaseIcon class="object-docs__icon" name="down" />
        </button>
      </div>
      <div class="object-docs__body" v-if="showedDocs">
        <div class="object-docs__grid">
          <div
            class="object-docs__file-item"
            v-for="file in info.files"
          >
            <FilePreview :file="file" :fileBaseUrl="info.fileBaseUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { UserTown, UserFlat, UserParking, UserPlace } from '../types';
  import FilePreview from './FilePreview.vue';
  import { getRoomsCount } from '@/plugins/rooms-count';

  const props = defineProps<{
    town?: UserTown,
    flat?: UserFlat,
    parking?: UserParking,
    place?: UserPlace,
  }>();

  const showedDocs = ref(false);

  const townName = computed(() => {
    if(!props.town) return '-';
    return `${props.town.layout.name_alias}, ${props.town.layout.area_cottage} м2`;
  });

  const flatName = computed(() => {
    if(!props.flat) return '-';
    return `${getRoomsCount(props.flat.room_factor)}-комнатная, ${props.flat.area_total} м²`;
  });

  const info = computed(() => {
    const host = useRuntimeConfig().public.host;

    if(props.flat) {
      return {
        name: flatName.value,
        sections: [
          `${props.flat.floor_number} этаж`,
          `Литер ${props.flat.house.letter}`,
          props.flat.complex.name,
        ],
        files: props.flat.files,
        image: props.flat.plan_image_url,
        fileBaseUrl: host + `crm/condominium/flats/${props.flat.id}/`,
      }
    } else if(props.town) {
      return {
        name: townName.value,
        sections: [
          `${props.town.town.location}`,
        ],
        files: props.town.files,
        image: props.town.layout.feed_images[0]?.url ?? null,
        fileBaseUrl: host + `crm/condominium/estates/${props.town.id}/`,
      }
    } else if(props.place) {
      return {
        name: `Кладовка №${props.place.number}`,
        sections: [
          `${props.place.area_total} м²`,
        ],
        files: props.place.files,
        image: null,
        fileBaseUrl: host + `crm/condominium/pantries/${props.place.id}/`,
      }
    } else if(props.parking) {
      return {
        name: `Парковочное место №${props.parking.number}`,
        sections: [
          `${props.parking.area_total} м²`,
        ],
        files: props.parking.files,
        image: null,
        fileBaseUrl: host + `crm/condominium/lots/${props.parking.id}/`,
      }
    }

    return {
      name: '-',
      sections: [],
      files: [],
      image: null,
      fileBaseUrl: '',
    }
  });
</script>

<style scoped lang="scss">
  .object-item {
    &__docs {
      margin-top: 24px;
    }
  }

  .object-item-info {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    &__img-wrap {
      width: 116px;
      height: 116px;
      flex-shrink: 0;
    }

    &__img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__body {
      flex-grow: 1;
      flex-basis: 500px;
    }

    &__name {
      @apply tw-text-lg tw-text-text00;
    }

    &__section {
      margin-bottom: 8px;
      display: flex;
      gap: 6px;
      font-size: 14px;
      line-height: 24px;
      @apply tw-text-text02;
    }

    &__dot {
      vertical-align: middle;
      &::before {
        content: '·';
      }
    }
  }

  .object-docs {
    border-radius: 16px;
    padding: 16px 24px;
    @apply tw-bg-base00;

    &__title {
      flex-grow: 1;
      font-size: 20px;
      line-height: 32px;
    }

    &__toolbar {
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      user-select: none;
    }

    &__body {
      margin-top: 16px;
    }

    &__toggle {
      width: 24px;
      height: 24px;
      @apply tw-text-icon;
    }

    &__icon {
      width: 100%;
      height: 100%;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
    }

    &__file-item {
      width: calc(50% - 16px);
      margin: 8px;
    }
  }

</style>
