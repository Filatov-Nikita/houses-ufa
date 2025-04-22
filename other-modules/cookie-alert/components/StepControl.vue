<template>
  <div>
    <div class="title">Управление файлами cookie</div>
    <p class="text">Мы используем файлы cookie, чтобы обеспечить наилучшее взаимодействие с сайтом.</p>
    <div class="actions">
      <BaseButton class="action" theme="green" @click="$emit('close')">Принять</BaseButton>
      <BaseButton class="action" theme="gray" @click="$emit('show:settings')">Настройки cookie</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineEmits<{
    (event: 'close'): void,
    (event: 'show:settings'): void,
  }>();
</script>


<style scoped lang="scss">
  .title {
    color: #343434;
    @apply tw-text-xl tw-mb-2;
  }

  .text {
    @apply tw-text-text02 tw-text-sm;
  }

  .actions {
    margin-top: 24px;
    display: flex;
    column-gap: 16px;

    @include sm {
      row-gap: 8px;
      flex-wrap: wrap;
    }
  }

  .action {
    width: 100%;

    @include sm {
      width: auto;
      flex-grow: 1;
    }
  }
</style>
