<template>
  <div>
    <BaseTabsGroup theme="white" v-model="store.currentType">
      <BaseTabsGroupItem key="all" name="all">Все</BaseTabsGroupItem>
      <BaseTabsGroupItem
        v-for="item in store.typesList"
        :key="item"
        :name="item"
      >
        {{ typeLabels[item] }}
      </BaseTabsGroupItem>
    </BaseTabsGroup>
  </div>
</template>

<script setup lang="ts">
  import { useComplexFlatGroups } from '../store';

  const typeLabels: Record<string, string> = {
    studio: 'Студии',
    one_classic: '1-комнатные',
    two_smart: '2-комнатные смарт',
    two_classic: '2-комнатные',
    three_smart: '3-комнатные смарт',
    three_classic: '3-комнатные',
  };

  const store = useComplexFlatGroups();
</script>
