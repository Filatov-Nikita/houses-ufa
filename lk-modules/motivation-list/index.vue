<template>
  <div>
    <BaseTabsGroup
      class="tw-w-full tw-overflow-y-hidden scroll-y tw-mb-8"
      theme="gray"
      v-model="current"
    >
      <BaseTabsGroupItem
        v-for="complex in complexes.items.value"
        :key="getComplexKey(complex.id)"
        :name="getComplexKey(complex.id)"
        theme="gray"
      >
        {{ complex.name }}
      </BaseTabsGroupItem>
      <BaseTabsGroupItem
        v-for="town in towns.items.value"
        :key="getTownKey(town.id)"
        :name="getTownKey(town.id)"
        theme="gray"
      >
        {{ town.name }}
      </BaseTabsGroupItem>
    </BaseTabsGroup>
    <TableValues :items="list.items.value" />
  </div>
</template>

<script setup lang="ts">
  import useComplexes from './composables/useComplexes';
  import useTowns from './composables/useTowns';
  import useTabs from './composables/useTabs';
  import useList from './composables/useList';
  import TableValues from './components/TableValues.vue';

  const props = defineProps<{
    type: 'b2t' | 'b2y',
  }>();

  const [ complexes, towns ] = await Promise.all([
    useComplexes(),
    useTowns(),
  ]);

  const initalTab = computed(() => {
    const name1 = complexes.first.value ? `complex.${complexes.first.value.id}` : null;
    const name2 = towns.first.value ? `town.${towns.first.value.id}` : null;
    return name1 ?? name2 ?? '';
  });

  const { current, getComplexKey, getTownKey } = useTabs(initalTab);

  const list = await useList(props.type, current);
</script>
