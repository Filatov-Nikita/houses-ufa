<template>
  <button
    v-if="type === 'parkings' || type === 'places'"
    class="parking-places-btn"
    @click="onClick"
  >
    <BaseIcon
      class="tw-w-6 tw-h-6"
      :class="isFavorite ? 'tw-text-primary' : 'tw-text-text00'"
      :name="isFavorite ? 'heart_bg' : 'heart'"
    />
  </button>
  <BtnsActionsBase
    v-else
    theme="gray"
    :icon="isFavorite ? 'heart_bg' : 'heart'"
    :class="isFavorite ? 'tw-text-primary' : 'tw-text-text00'"
    @click="onClick"
  />
</template>

<script setup lang="ts">
  import { type FavTypes } from '@/stores/favorites/composables/storage';
  import { useFavoritesStore } from '@/stores/favorites';

  const fav = useFavoritesStore();

  interface Props {
    type: FavTypes,
    id: number,
    initialValue?: boolean | null,
  };


  const props = withDefaults(defineProps<Props>(), { initialValue: null });

  const storage = computed(() => {
    switch(props.type) {
      case 'flats': return fav.flatStorage;
      case 'towns': return fav.townStorage;
      case 'parkings': return fav.parkingStorage;
      case 'places': return fav.placeStorage;
    }
  });

  const isFavorite = ref(storage.value.hasItem(props.id, props.initialValue));

  async function onClick(e: Event) {
    e.preventDefault();
    const value = isFavorite.value;
    isFavorite.value = !value;
    await (
      value ?
      storage.value.remove(props.id) :
      storage.value.add(props.id)
    );
  }
</script>


<style scoped lang="scss">
  .parking-places-btn {
    width: 48px;
    height: 48px;
    padding: 12px;
    border-radius: 8px;
    @apply tw-bg-base00;
  }
</style>
