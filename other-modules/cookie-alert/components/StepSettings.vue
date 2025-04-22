<template>
  <div>
    <button class="back-btn" @click="$emit('show:control')">
      <span class="back-btn__icon-wrap">
        <BaseIcon fit name="back-line" />
      </span>
      <span>Управление файлами cookie</span>
    </button>
    <div class="title">Настройки файлов cookie</div>
    <p class="text">Файлы cookie, необходимые для корректной работы сайта, всегда включены. Другие файлы cookie можно настроить.</p>
    <div class="items">
      <div class="item">
        <div class="item__head" @click="items[0] = !items[0]">
          <span class="item__icon-wrap">
            <BaseIcon name="plus" fit />
          </span>
          <span class="item__label">Основные файлы cookie</span>
          <span class="item__status item__status--positive">Всегда разрешено</span>
        </div>
        <div class="item__text" v-if="items[0]">
          Всегда включен. Эти файлы cookie необходимы для того, чтобы вы могли пользоваться веб-сайтом и его функциями. Их нельзя отключить. Они устанавливаются в ответ на ваши запросы, такие как настройка параметров конфиденциальности, вход в систему или заполнение форм.
        </div>
      </div>
      <div class="item">
        <div class="item__head" @click="items[1] = !items[1]">
          <span class="item__icon-wrap">
            <BaseIcon name="plus" fit />
          </span>
          <span class="item__label">Аналитические файлы cookie</span>
          <span class="item__status" :class="{
            'item__status--positive': t1,
            'item__status--negative': !t1,
          }">
            {{ t1 ? 'Разрешено' : 'Запрещено' }}
          </span>
        </div>
        <div class="item__text" v-if="items[1]">
          Эти файлы cookie собирают информацию, чтобы помочь нам понять, как используются наши веб-сайты или насколько эффективны наши маркетинговые кампании, или чтобы помочь нам настроить наши веб-сайты под вас. Смотрите список используемых нами аналитических файлов cookie здесь.
        </div>
        <div class="item__body">
          <BaseToggle name="t1" v-model="t1" />
        </div>
      </div>
      <div class="item">
        <div class="item__head" @click="items[3] = !items[3]">
          <span class="item__icon-wrap">
            <BaseIcon name="plus" fit />
          </span>
          <span class="item__label">Рекламные файлы cookie</span>
          <span class="item__status" :class="{
            'item__status--positive': t2,
            'item__status--negative': !t2,
          }">
            {{ t2 ? 'Разрешено' : 'Запрещено' }}
          </span>
        </div>
        <div class="item__text" v-if="items[3]">
          Эти файлы cookie предоставляют рекламным компаниям информацию о вашей онлайн-активности, чтобы помочь им предоставлять вам более релевантную онлайн-рекламу или ограничить количество просмотров рекламы. Эта информация может быть передана другим рекламным компаниям. Смотрите список рекламных файлов cookie, которые мы используем здесь
        </div>
        <div class="item__body">
          <BaseToggle name="t2" v-model="t2" />
        </div>
      </div>
    </div>
    <div class="actions">
      <BaseButton class="action" theme="green" @click="$emit('close')">Подтверждаю</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineEmits<{
    (event: 'close'): void,
    (event: 'show:control'): void,
  }>();

  const t1 = ref(false);
  const t2 = ref(false);
  const items = ref([ false, false, false ]);
</script>


<style scoped lang="scss">
  .title {
    color: #343434;
    @apply tw-text-xl tw-mb-2 tw-mt-6;
  }

  .text {
    @apply tw-text-text02 tw-text-sm;
  }

  .actions {
    margin-top: 24px;
    position: sticky;
    bottom: 0;
  }

  .action {
    width: 100%;
  }

  .back-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    @apply tw-text-text02 tw-text-sm;

    &:hover {
      opacity: 0.8;
    }

    &__icon-wrap {
      width: 24px;
      height: 24px;
    }
  }

  .items {
    margin-top: 24px;
  }

  .item {
    & + & {
      margin-top: 24px;
    }

    &__head {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &__icon-wrap {
      width: 24px;
      height: 24px;
    }

    &__label {
      flex-grow: 1;
      @apply tw-text-base tw-text-text00;
    }

    &__status {
      white-space: nowrap;
      @apply tw-text-xs;

      &--positive {
        @apply tw-text-primary;
      }

      &--negative {
        @apply tw-text-error;
      }
    }

    &__body {
      display: flex;
      justify-content: flex-end;
      margin-top: 8px;
    }

    &__text {
      @apply tw-text-text02 tw-text-xs tw-mt-2;
    }
  }
</style>
