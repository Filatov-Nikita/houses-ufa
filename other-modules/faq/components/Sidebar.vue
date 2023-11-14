<template>
  <div class="faq-sidebar">
    <Filter class="faq-sidebar__filter" />
    <SectionList />
  </div>
</template>

<script setup lang="ts">
  import Filter from './Filter.vue';
  import SectionList from './SectionList.vue';
</script>

<style scoped lang="scss">
  .faq-sidebar {
    &__filter {
      margin-bottom: 24px;
    }
  }
</style>
