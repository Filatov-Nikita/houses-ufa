<template>
  <div class="item" :class="{ active: show }">
    <div class="item__head tw-flex tw-justify-between tw-items-center tw-gap-4">
      <h4 class="tw-text-body_l">Какие условия по ипотеке и в каких банках?</h4>
      <button class="btn" @click="show = !show">
        <BaseSquareIcon src="/assets/images/icons/arrow_up.svg" />
      </button>
    </div>

    <div class="item__body">
      <div class="item__body-content">
        <p>
          Компания сотрудничает более чем с 20 банками-партнерами в рамках
          ипотечного кредитования. Список банков и условиями кредитования, а
          также ипотечный калькулятор находятся по ссылке Если Вы не увидели
          интересующий Вас банк в этом списке, наши менеджеры по ипотеке
          проведут индивидуальную аккредитацию в любом банке под Вашу сделку.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const show = ref(false)
</script>
<style lang="scss" scoped>
.item {
  @apply tw-bg-white tw-rounded-2xl tw-px-4 tw-py-6 tw-grid tw-gap-4;
  &__body {
    @apply tw-grid  tw-overflow-hidden;
    grid-template-rows: 0fr;
    @apply tw-transition-all transition-base;
    &-content {
      @apply tw-min-h-0;
    }
  }
  &.active .item__body {
    grid-template-rows: 1fr;
  }
}
</style>
