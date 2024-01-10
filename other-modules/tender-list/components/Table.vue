<template>
  <div class="tender-table">
    <div class="tender-table__head">
      <div class="tender-table__th">№ п/п</div>
      <div class="tender-table__th">Номенклатура закупки</div>
      <div class="tender-table__th">Предмет закупки</div>
    </div>
    <div class="tender-table__body">
      <div class="tender-table__row">
        <div class="tender-table__td tender-table__number">1</div>
        <div class="tender-table__td">
          Выполнение строительно-монтажных работ устройству сетей бытовой канализации объекта: «Многоквартирный жилой дом, расположенный по адресу: РБ, МР Уфимский район, СП Зубовский сельсовет, с. Зубово, квартал Зубово Лайф 2, литер 22» и присоединению к действующим коммуникациям
        </div>
        <div class="tender-table__td">
          РБ, МР Уфимский район, СП Зубовский сельсовет, с. Зубово, квартал Зубово Лайф 2, литер 22 (1675)
        </div>
        <div class="tender-table__action">
          <BaseButton>Принять участие</BaseButton>
        </div>
      </div>
      <div class="tender-table__row">
        <div class="tender-table__td tender-table__number">1</div>
        <div class="tender-table__td">
          Выполнение строительно-монтажных работ устройству сетей бытовой канализации объекта: «Многоквартирный жилой дом, расположенный по адресу: РБ, МР Уфимский район, СП Зубовский сельсовет, с. Зубово, квартал Зубово Лайф 2, литер 22» и присоединению к действующим коммуникациям
        </div>
        <div class="tender-table__td">
          РБ, МР Уфимский район, СП Зубовский сельсовет, с. Зубово, квартал Зубово Лайф 2, литер 22 (1675)
        </div>
        <div class="tender-table__action">
          <BaseButton @click="showed = true">Принять участие</BaseButton>
        </div>
      </div>
    </div>
    <Modal v-model:showed="showed" />
  </div>
</template>

<script setup lang="ts">
  import Modal from './Modal.vue';

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .tender-table {
    &__head {
      padding: 16px 24px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: 64px 637px 296px;
      gap: 20px;
      @apply tw-bg-base00;
    }

    &__row {
      padding: 16px 24px;
      border-radius: 8px;
      width: 100%;
      display: grid;
      grid-template-columns: 64px 637px 296px 175px;
      gap: 20px;

      & + & {
        border-top: 1px;
        border-style: solid;
        @apply tw-border-border00;
      }
    }

    &__action {
      align-self: center;
    }

    &__number {
      align-self: center;
    }
  }
</style>
