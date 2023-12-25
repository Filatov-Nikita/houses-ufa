<template>
  <div class="list-item">
    <div class="list-item__data">
      <div class="list-item__left">
        <div class="list-item__param">{{ placeName }} {{ number }}</div>
        <div class="list-item__price">{{ $amount(price_total) }}</div>
      </div>
      <div class="list-item__right">
        <div class="list-item__param">{{ area_total }} м²</div>
        <div class="list-item__actions">
          <button class="list-item__action" @click="book">
            <BaseIcon class="tw-w-6 tw-h-6" color="tw-text-text01" name="lock2" />
          </button>
          <ClientOnly>
            <EstateActionsAddFav :type="type" :id="id" :initialValue="is_in_favorite" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    placeName: string,
    area_total: string,
    price_total: string,
    number: string,
    type: 'parkings' | 'places',
    id: number,
    is_in_favorite: boolean | null,
  }

  const props = defineProps<Props>();

  const router = useRouter();

  const types = {
    'parkings': 'parking',
    'places': 'place',
  }

  function book() {
    router.push({
      path: '/lk/b2c/apps/book',
      query: { id: props.id, type: types[props.type] },
    });
  }
</script>

<style scoped lang="scss">
  .list-item {
    padding: 16px;
    border-radius: 16px;
    @apply tw-border tw-border-solid tw-border-border00;

    @include sm {
      padding: 12px;
    }

    &__data {
      display: flex;
      gap: 16px;
      @apply tw-text-text00;

      @include sm {
        flex-wrap: wrap;
      }
    }

    &__left {
      flex-grow: 1;

      @include sm {
        width: 100%;
      }
    }

    &__right {
      flex-grow: 1;
      text-align: right;

      @include sm {
        width: 100%;
        text-align: left;
      }
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    &__action {
      width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;
      @apply tw-bg-base00;
    }

    &__price {
      padding-top: 12px;
      @apply tw-text-xl;
    }

    &__param {
      padding-bottom: 16px;
      @apply tw-text-base;

      @include lg {
        padding-bottom: 12px;
      }

      @include sm {
        padding-bottom: 4px;
      }
    }
  }
</style>
