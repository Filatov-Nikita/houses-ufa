<template>
  <div class="docs-params">
    <div class="docs-params__period">
      <BaseSelect class="docs-params__month" :model-value="monthOpt" name="month" :drop-down-props="{ options: monthOptions }" @update:model-value="month = $event?.value ?? 1" :disabled="disabledExecute" />
      <BaseSelect class="docs-params__year" :model-value="yearOpt" name="year" :drop-down-props="{ options: yearOptions }" @update:model-value="year = $event?.value ?? 1" :disabled="disabledExecute" />
    </div>
    <BaseButton theme="gray" @click="$emit('execute')" :disabled="disabledExecute">
      Сформировать
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import useParams from '../composables/useParams';

  defineProps<{
    disabledExecute?: boolean,
  }>();

  defineEmits<{
    (event: 'execute'): void,
  }>();

  const month = defineModel<number>('month');
  const year = defineModel<number>('year');

  const { monthOpt, monthOptions, yearOptions, yearOpt } = useParams(month, year);
</script>

<style scoped lang="scss">
  .docs-params {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    align-items: center;

    &__period {
      display: flex;
      gap: 16px;
      align-items: center;
    }
  }
</style>
