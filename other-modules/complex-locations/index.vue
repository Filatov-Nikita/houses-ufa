<template>
  <div class="complex-locations">
    <Sidebar class="complex-locations__sidebar" />
    <Map class="complex-locations__map" v-if="store.data && complex.complex" />
  </div>
</template>

<script setup lang="ts">
  import Sidebar from './components/SideBar.vue';
  import Map from './components/Map.vue';
  import { useComplexLocations } from './store';
  import { useComplexOne } from '@/stores/pages/complex-one';

  const props = defineProps<{
    complexId: number,
  }>();

  const store = useComplexLocations();
  const route = useRoute();
  const complex = useComplexOne();

  store.setComplexId(props.complexId);

  await useLazyAsyncData(() => store.show());
</script>


<style scoped lang="scss">
  .complex-locations {
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
