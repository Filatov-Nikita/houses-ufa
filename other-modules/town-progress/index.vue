<template>
  <div class="complex-progress">
    <Filter class="complex-progress__filter" />
    <KeepAlive>
      <CameraList v-if="store.filterType === 'camera'" />
      <AlbumList v-else-if="store.filterType === 'album'" />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
  import Filter from './components/Filter.vue';
  import CameraList from './components/CameraList.vue';
  import AlbumList from './components/AlbumList.vue';
  import { useTownProgress } from './store';

  const props = defineProps<{
    complexId: number,
  }>();

  const store = useTownProgress();

  store.setTownId(props.complexId);
</script>

<style scoped lang="scss">
  .complex-progress {
    &__filter {
      margin-bottom: 32px;

      @include lg {
        margin-bottom: 24px;
      }
    }
  }
</style>
