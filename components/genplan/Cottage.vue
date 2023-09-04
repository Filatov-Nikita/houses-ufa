<template>
  <GenplanCottages v-if="village === null" @open-plan="openPlan" />
  <GenplanCottageItem v-else @close-plan="closePlan" />
</template>
<script lang="ts" setup>
const village = ref<number | null>(null)
const openPlan = (id: number) => (village.value = id)
const closePlan = () => (village.value = null)
</script>
<style lang="scss" scoped></style>
