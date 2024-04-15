<template>
  <div>
    <div class="rating-params">
      <BaseTabsGroup theme="gray" v-model="currentTab">
        <BaseTabsGroupItem theme="gray" name="agency">
          Агентства
        </BaseTabsGroupItem>
        <BaseTabsGroupItem theme="gray" name="agent">
          Агенты
        </BaseTabsGroupItem>
      </BaseTabsGroup>
      <BaseSelect class="rating-params__month" :model-value="monthOpt" name="month" :drop-down-props="{ options: monthOptions }" @update:model-value="month = $event?.value ?? 1" />
    </div>
    <TableValues :currentTab="currentTab" :agencyItems="agencyItems" :agentItems="agentItems" />
  </div>
</template>

<script setup lang="ts">
  import useParams from './composables/useParams';
  import useList from './composables/useList';
  import TableValues from './components/TableValues.vue'

  const props = defineProps<{
    type: 'b2y' | 'b2t',
  }>();

  const { currentTab, month, monthOptions, monthOpt } = useParams({ month: (new Date()).getMonth() + 1 });
  const { agencyItems, agentItems } = useList(props.type, month, currentTab);
</script>

<style scoped lang="scss">
  .rating-params {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 32px;

    &__month {
      width: 180px;
    }
  }
</style>
