<template>
  <div>
    <HeaderMain />
    <main class="tw-flex tw-flex-col tw-gap-12 lg:tw-gap-20 xl:tw-gap-24">
      <slot />
    </main>
    <FooterMain class="tw-mt-12 lg:tw-mt-20 xl:tw-mt-24" />
    <ModalCallback :model-value="showedCallback" @update:model-value="updateCallback"/>
  </div>
</template>

<script setup lang="ts">
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'
import ModalCallback from '../components/modals/Form.vue'
import { useAppStore } from '@/stores/app';
import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';

const complexesStore = useComplexesStore();
const townsStore = useTownsStore();
const appStore = useAppStore();
const showedCallback = computed(() => appStore.showedCallback);

useAsyncData(() => {
  return Promise.all([ complexesStore.show(), townsStore.show() ]);
});

function updateCallback(val: boolean) {
  appStore.showedCallback = val;
}
</script>
