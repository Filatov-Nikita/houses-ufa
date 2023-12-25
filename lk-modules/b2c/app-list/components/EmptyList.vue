<template>
  <section class="empty-apps">
    <div class="empty-apps__decor">
      <BaseIcon class="empty-apps__icon" name="house" />
    </div>
    <h2 class="empty-apps__title">Мои заявки</h2>
    <p class="empty-apps__text">
      Здесь появятся купленные объекты
    </p>
    <BaseButton to="/main-filter">
      Объекты
    </BaseButton>
  </section>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
  .empty-apps {
    padding: 40px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    @apply tw-bg-white;

    &__title {
      text-align: center;
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 8px;
      @apply tw-text-text00;
    }

    &__text {
      text-align: center;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 32px;
      @apply tw-text-text02;
    }

    &__decor {
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 32px;
      @apply tw-bg-base00 tw-text-text01;
    }

    &__icon {
      width: 32px;
      height: 32px;
    }
  }
</style>
