<template>
  <div class="sup-empty-list">
    <div>
      <div class="sup-empty-list__icon-wrap">
        <BaseIcon class="sup-empty-list__icon" name="chat" />
      </div>
      <p class="sup-empty-list__title">Обращений нет</p>
      <p class="sup-empty-list__text">Здесь появятся все обращения</p>
      <BaseButton @click="$emit('create')">Написать обращение</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineEmits<{
    (event: 'create'): void,
  }>();
</script>

<style scoped lang="scss">
  .sup-empty-list {
    text-align: center;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    &__title {
      margin-bottom: 8px;
      font-size: 20px;
      line-height: 1.6;
      @apply tw-text-text00;
    }

    &__icon-wrap {
      margin-bottom: 32px;
      display: block;
      padding: 16px;
      width: 64px;
      height: 64px;
      border-radius: 8px;
      margin-left: auto;
      margin-right: auto;
      color: #343330;
      @apply tw-bg-base00;
    }

    &__icon {
      width: 32px;
      height: 32px;
    }

    &__text {
      margin-bottom: 32px;
      font-size: 14px;
      line-height: 24px;
      @apply tw-text-text02;
    }
  }
</style>
