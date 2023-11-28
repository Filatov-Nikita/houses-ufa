<template>
  <BaseTabsGroup class="faq-tabs" v-model="store.filterType">
    <BaseTabsGroupItem class="faq-tab" name="buyer">Покупателям</BaseTabsGroupItem>
    <BaseTabsGroupItem class="faq-tab" name="owner">Владельцам</BaseTabsGroupItem>
  </BaseTabsGroup>
</template>

<script setup lang="ts">
  import { useFaq } from '../store';
  const store = useFaq();
</script>

<style scoped lang="scss">
  .faq-tabs {
    @include sm {
      width: 100%;
    }
  }

  .faq-tab {
    @include sm {
      width: 100%;
    }
  }
</style>
