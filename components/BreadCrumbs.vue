<template>
  <div class="bread-crumbs">
    <template v-for="(item, index) in historyList" :key="index">
      <NuxtLink v-if="item.hasOwnProperty('to')" :to="item.to">
        {{ item.name }}
      </NuxtLink>
      <span v-else>
        {{ item.name }}
      </span>
      <span v-if="historyList.length - 1 !== index"> / </span>
    </template>
  </div>
</template>
<script lang="ts" setup>
const propsCrumbs = defineProps<{
  historyList: { name: string; to?: string }[]
}>()
</script>
<style lang="scss" scoped>
.bread-crumbs {
  @apply tw-text-text02;
}
</style>
