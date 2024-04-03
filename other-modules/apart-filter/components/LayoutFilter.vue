<template>
  <div class="filter-layout">
    <div class="filter-layout__left">
      <slot name="left" />
    </div>
    <div class="filter-layout__right">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
  .filter-layout {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;

    @include lg {
      margin: -10px;
    }

    &__left {
      width: calc(100% / 12 * 3.5 - 30px);
      margin: 15px;

      @include lg {
        width: calc(100% / 12 * 4 - 20px);
        margin: 10px;
      }

      @include md {
        width: calc(100% / 12 * 3.5 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__right {
      width: calc(100% / 12 * 8.5 - 30px);
      margin: 15px;

      @include lg {
        width: calc(100% / 12 * 8 - 20px);
        margin: 10px;
      }

      @include md {
        width: calc(100% / 12 * 8.5 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
