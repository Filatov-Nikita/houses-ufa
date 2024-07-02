<template>
  <div class="documents-alert">
    <div class="documents-alert__head">
      <span class="documents-alert__icon-wrap">
        <BaseIcon fit name="attention" color="#ffffff" />
      </span>
      <span class="documents-alert__title">
        Перечень документов, необходимый для получения ключей:
      </span>
    </div>
    <ul class="documents-alert__list">
      <li
        class="documents-alert__item"
        v-for="doc in documents"
      >
        {{ doc }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const documents = [
    'Паспорта собственников',
    'СНИЛС собственников',
    'Договор купли-продажи объекта',
  ];
</script>

<style scoped lang="scss">
  .documents-alert {
    border-radius: 8px;
    padding: 12px 16px;
    background-color: #FFFDE7;
    border: 1px solid #FFD600;

    &__icon-wrap {
      background-color: #FFD600;
      padding: 4px;
      border-radius: 8px;
      width: 32px;
      height: 32px;
      flex-shrink: 0;
    }

    &__head {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 8px;
    }

    &__title {
      flex-grow: 1;
      @apply tw-text-sm tw-text-text00;
    }

    &__list {
      list-style: disc;
      padding-left: 70px;
    }

    &__item {
      @apply tw-text-sm;

      & + & {
        margin-top: 6px;
      }
    }
}
</style>
