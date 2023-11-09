<template>
  <div class="town-genplan">
    <KeepAlive>
      <Level1 v-if="store.showedLevel === 1" />
      <Level2 v-else />
    </KeepAlive>
    <div class="town-genplan__loading">Загрузка...</div>
  </div>
</template>

<script setup lang="ts">
  import { useTownGenplan } from './store';
  import Level1 from './components/Level1.vue';
  import Level2 from './components/Level2.vue';

  const store = useTownGenplan();
  const route = useRoute();

  store.setTownId(+route.params.id);

  onUnmounted(() => {
    store.showedLevel = 1;
    store.showedBlockId = null;
  });

  await useLazyAsyncData(() => store.show());
</script>

<style scoped lang="scss">
  .town-genplan {
    position: relative;
    min-height: 700px;
    border-radius: 16px;
    @apply tw-bg-secondary;

    &__loading {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }
  }
</style>
