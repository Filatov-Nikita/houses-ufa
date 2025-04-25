<template>
  <section class="section">
    <div class="wrapper">
      <div class="booklets">
        <div class="section__top">
          <h2 class="section__title">Альбомы и буклеты</h2>
        </div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .booklets {
    border-radius: 24px;
    padding: 40px;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }
  }
</style>
