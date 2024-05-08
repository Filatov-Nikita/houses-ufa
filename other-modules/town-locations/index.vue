<template>
  <div class="town-locations">
    <Sidebar class="town-locations__sidebar" />
    <Map class="town-locations__map" />
  </div>
</template>

<script setup lang="ts">
  import Sidebar from './components/SideBar.vue';
  import Map from './components/Map.vue';
  import { useTownLocations } from './store';

  const props = defineProps<{
    townId: number,
  }>();

  const store = useTownLocations();
  const route = useRoute();

  store.setTownId(props.townId);

  await useLazyAsyncData(() => store.show());
</script>


<style scoped lang="scss">
  .town-locations {
    position: relative;

    &__sidebar {
      width: 305px;
      position: absolute;
      left: 40px;
      top: 40px;
      z-index: 100;

      @include lg {
        left: 24px;
        top: 24px;
      }

      @include md {
        left: 12px;
        top: 12px;
      }

      @include sm {
        display: none;
      }
    }

    &__map {
      height: 608px;

      @include sm {
        height: 450px;
      }
    }
  }
</style>
