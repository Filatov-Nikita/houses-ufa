<template>
  <div>
    <BaseTabsGroup
      class="tw-mb-8"
      theme="gray"
      v-model="targetArea"
    >
      <BaseTabsGroupItem
        name="condominium"
        theme="gray"
      >
        МКД
      </BaseTabsGroupItem>
      <BaseTabsGroupItem
        name="town"
        theme="gray"
      >
        КТ
      </BaseTabsGroupItem>
    </BaseTabsGroup>
    <BaseSkeleton class="tw-w-full tw-h-[200px] tw-rounded-2xl" v-if="loading" />
    <TableValues v-else-if="items" :items="items" />
  </div>
</template>

<script setup lang="ts">
  import type { TargetAreaParam } from '@/repositories/lk/b2t/motivation-stratagems';
  import TableValues from './components/TableValues.vue';

  const api = useNuxtApp().$api;

  const targetArea = ref<TargetAreaParam>('condominium');

  const res = await useAsyncData(
    unpackData(() => api.b2t.motivationStrategies.list(targetArea.value)),
    {
      watch: [ targetArea ],
    }
  );
  const items = useDataOrFail(res);
  const loading = res.pending;
</script>
