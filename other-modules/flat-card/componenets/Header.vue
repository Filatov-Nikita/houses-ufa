<template>
  <div class="flat-hedaer">
    <BtnsGoBack />
    <div v-if="flatCard.data?.data">
      <ClientOnly>
        <EstateActionsAddFav
          type="flats"
          :id="flatCard.data.data.id"
          :initial-value="flatCard.data.data.is_in_favorite"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useFlatCard } from '../store';
  const flatCard = useFlatCard();
</script>

<style scoped lang="scss">
  .flat-hedaer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }
</style>
