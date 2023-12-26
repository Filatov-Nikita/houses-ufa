<template>
  <div class="client-empty-list">
    <div class="client-empty-list__body">
      <div class="client-empty-list__text">
        <h1 class="client-empty-list__h1">Клиентов пока нет</h1>
      </div>
      <div class="client-empty-list__grid">
        <div class="client-empty-list__item">
          <div class="client-empty-list__icon-wrap">
            <BaseIcon class="client-empty-list__icon" name="house" />
          </div>
          <p class="client-empty-list__title">
            Выберите объект<br>и добавьте в избранное
          </p>
          <BaseButton class="client-empty-list__action" to="/main-filter">
            Объекты
          </BaseButton>
        </div>
        <div class="client-empty-list__item-next">
          <BaseIcon class="client-empty-list__icon-next" name="forward-line" />
        </div>
        <div class="client-empty-list__item">
          <div class="client-empty-list__icon-wrap">
            <BaseIcon class="client-empty-list__icon" name="heart" />
          </div>
          <p class="client-empty-list__title">
            Перейдите<br>в личный кабинет
          </p>
        </div>
        <div class="client-empty-list__item-next">
          <BaseIcon class="client-empty-list__icon-next" name="forward-line" />
        </div>
        <div class="client-empty-list__item">
          <div class="client-empty-list__icon-wrap">
            <BaseIcon class="client-empty-list__icon" name="profile" />
          </div>
          <p class="client-empty-list__title">
            Проверьте клиента, нажав<br>на кнопку «Проверить клиента»
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .client-empty-list {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    &__text {
      text-align: center;
      margin-bottom: 48px;
      @apply tw-text-text00;
    }

    &__h1 {
      font-size: 20px;
      line-height: 1.6;
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr auto 1fr;
      gap: 16px;
    }

    &__item {
      text-align: center;
    }

    &__title {
      margin-bottom: 16px;
      @apply tw-text-text01 tw-text-base;
    }

    &__icon-wrap {
      margin-bottom: 16px;
      display: block;
      padding: 8px;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      margin-left: auto;
      margin-right: auto;
      @apply tw-text-primary tw-bg-base00;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }

    &__item-next {
      display: flex;
      align-items: center;
      @apply tw-text-icon;
    }

    &__icon-next {
      width: 16px;
      height: 16px;
    }
  }
</style>
