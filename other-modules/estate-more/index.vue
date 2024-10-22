<template>
  <div class="estate-more">
    <Item v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>
<script lang="ts" setup>
import { PosterItem } from '@/other-modules/estate-list-grid/types';
import Item from '@/other-modules/estate-list-grid/components/Item.vue';

const props = defineProps<{
  slug: string,
}>();

const res = await useAppFetch<{ data: PosterItem[] }>('lobby/marketing/posters', {
  params: {
    type: 'cottages_and_townhouses',
  }
});

const posters = useDataOrFail(res);

const list = computed(() => posters.value.data.filter(poster => `${poster.url}/`.indexOf('/' + props.slug + '/') === -1));
</script>
<style scoped lang="scss">
.estate-more {
  @apply tw-grid tw-gap-4;
  @apply lg:tw-grid-cols-3;
}
</style>
