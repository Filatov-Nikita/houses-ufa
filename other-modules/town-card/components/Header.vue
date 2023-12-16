<template>
  <div class="town-hedaer">
    <BtnsGoBack />
    <div v-if="townCard.data?.data">
      <ClientOnly>
        <EstateActionsAddFav
          type="towns"
          :id="townCard.data.data.id"
          :initial-value="townCard.data.data.is_in_favorite"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTownCard } from '../store';
  const townCard = useTownCard();
</script>

<style scoped lang="scss">
  .town-hedaer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }
</style>
