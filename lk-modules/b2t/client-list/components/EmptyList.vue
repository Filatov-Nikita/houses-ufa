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
          <BaseButton class="client-empty-list__action" theme="gray" to="/lk/b2t/objects">
            Выбрать объект
          </BaseButton>
        </div>
        <div class="client-empty-list__or orBlock">
          <p class="orBlock__text">
            или
          </p>
        </div>
        <div class="client-empty-list__item">
          <div class="client-empty-list__icon-wrap">
            <BaseIcon class="client-empty-list__icon" name="profile" />
          </div>
          <p class="client-empty-list__title">
            Проверьте клиента, нажав<br>на кнопку «Проверить клиента»
          </p>
          <BaseButton class="client-empty-list__action" theme="gray" @click="$emit('check:client')">
            Проверить клиента
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineEmits<{
    (event: 'check:client'): void,
  }>();
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

    @include sm {
      padding: 16px;
    }

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
      grid-template-columns: 1fr 25px 1fr;
      gap: 16px;

      @include sm {
        grid-template-columns: 100%;
      }
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

  .orBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: relative;

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 0px;
      transform: translateX(-50%);
      z-index: 0;
      @apply tw-bg-border00;
    }

    &__text {
      position: relative;
      z-index: 10;
      padding: 8px 0px;
      @apply tw-text-text02 tw-text-sm tw-bg-white;
    }
  }
</style>
