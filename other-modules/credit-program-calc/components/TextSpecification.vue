<template>
  <div v-if="currentProg && currentProg.specification" class="text-spec" v-html="currentProg.specification"></div>
</template>

<script setup lang="ts">
  import { useCreditProgramCalc } from '@/other-modules/credit-program-calc/store';
  import { useCreditPrograms } from '@/stores/credit-programs';

  const creditCalc = useCreditProgramCalc();
  const creditProg = useCreditPrograms();

  const progs = computed(() => creditProg.creditProgs?.data ?? []);
  const currentProg = computed(() => {
    return progs.value.find(prog => prog.id === creditCalc.groupId) ?? null;
  });
</script>

<style scoped lang="scss">
  .text-spec {
    border-radius: 16px;
    padding: 40px;
    position: relative;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }

    &:deep(p) {
      margin: 10px 0;
    }

    &:deep(ol) {
      list-style: disc;
      padding-left: 20px;
    }

    &:deep(strong) {
      @apply tw-font-freesetdemi;
    }
  }
</style>
