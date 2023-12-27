<template>
  <div class="fav-empty-list">
    <div>
      <div class="fav-empty-list__icon-wrap">
        <BaseIcon class="fav-empty-list__icon" name="heart" />
      </div>
      <p class="fav-empty-list__title">Избранное</p>
      <p class="fav-empty-list__text">Добавьте в избранное объекты</p>
      <BaseButton to="/main-filter">Перейти к объектам</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .fav-empty-list {
    text-align: center;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    &__title {
      margin-bottom: 16px;
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
      margin-bottom: 16px;
      @apply tw-text-text02;
    }
  }
</style>
