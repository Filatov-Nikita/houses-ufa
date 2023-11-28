<template>
  <div class="faq-block">
    <Sidebar class="faq-block__sidebar" />
    <Content class="faq-block__content" />
  </div>
</template>

<script setup lang="ts">
  import { useFaq } from './store';
  import Sidebar from './components/Sidebar.vue';
  import Content from './components/Content.vue';

  const store = useFaq();

  function initSectionId() {
    if(store.filtredSectionList.length > 0) {
      store.setCurrentSectionId(store.filtredSectionList[0].id);
    }
  }

  if(!store.sectionList) {
    await useLazyAsyncData(async () => {
      await store.showSections();
      initSectionId();
    });
  }

  watch(() => store.filterType, () => {
    initSectionId();
  });
</script>

<style scoped lang="scss">
  .faq-block {
    display: flex;
    flex-wrap: wrap;
    margin: -24px;

    &__sidebar {
      width: calc(100% / 12 * 4 - 48px);
      margin: 24px;

      @include lg {
        width: calc(100% / 12 * 5 - 48px);
      }

      @include md {
        width: calc(100% / 12 * 6 - 48px);
      }

      @include sm {
        width: calc(100% - 48px);
      }
    }

    &__content {
      width: calc(100% / 12 * 8 - 48px);
      margin: 24px;

      @include lg {
        width: calc(100% / 12 * 7 - 48px);
      }

      @include md {
        width: calc(100% / 12 * 6 - 48px);
      }

      @include sm {
        width: calc(100% - 48px);
      }
    }
  }
</style>
