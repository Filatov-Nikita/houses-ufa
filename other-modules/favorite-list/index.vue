<template>
  <div class="fav-list">
    <CategoryFilter class="fav-list__category-filter" />
    <EmptyList />
  </div>
</template>

<script setup lang="ts">
  import CategoryFilter from './components/CategoryFilter.vue';
  import EmptyList from './components/EmptyList.vue';
</script>


<style scoped lang="scss">
  .fav-list {
    &__category-filter {
      margin-bottom: 32px;
    }
  }
</style>
