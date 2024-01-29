<template>
  <Item class="tw-z-10" v-if="response" :item="response.data" />
</template>

<script setup lang="ts">
  import Item from '@/other-modules/promotion-list/components/Item.vue';
  import type { PromotionListItem } from '@/types/promotions';

  const { data: response } = await useDataFetch<{ data: PromotionListItem }>('marketing/promotions/burger-menu-one');
</script>
