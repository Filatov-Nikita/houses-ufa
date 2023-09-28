<template>
  <section>
    <div class="tw-container">
      <form
        class="tw-grid tw-gap-6 lg:tw-grid-cols-6 xl:tw-flex xl:tw-items-start"
      >
        <BaseSelect
          class="xl:tw-basis-[322px]"
          theme="white"
          label="Выберите тип недвижимости"
          name="typeAparment"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
          v-model="typeApartment"
        />
        <BaseRangeSingle
          theme="white"
          name="costFrom"
          v-model="costFrom"
          label="Стоимость от"
          class="lg:tw-col-span-2 xl:tw-grow"
          :max="10000000"
        />
        <div class="lg:tw-col-span-2">
          <div class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-mb-2">
            Количество комнат
          </div>
          <div class="tw-grid tw-grid-cols-2 tw-gap-2">
            <BaseButton>Строится</BaseButton>
            <BaseButton theme="white">Сдан</BaseButton>
          </div>
        </div>
        <BaseButton
          theme="white"
          class="lg:tw-col-span-3 xl:tw-self-end xl:tw-mb-[10px]"
          @click="openParametrs = true"
          >Дополнительные фильтры</BaseButton
        >
        <BaseButton class="lg:tw-col-span-3 xl:tw-self-end xl:tw-mb-[10px]">Показать предложения</BaseButton>
      </form>
    </div>
    <ModalsOther
      title="Дополнительные фильтры"
      :isFullMob="true"
      v-model="openParametrs"
      titlePos="tw-text-left"
      class="!tw-h-screen lg:!tw-h-auto"
    >
      <template #default>
        <div class="tw-grid tw-gap-6 lg:tw-gap-8">
          <div>
            <div class="tw-text-text02">Комнатность</div>
            <div class="tw-grid tw-grid-cols-4 tw-gap-2">
              <BaseButton>
                <span class="lg:tw-hidden">С</span>
                <span class="tw-hidden lg:tw-inline"> Студия </span>
              </BaseButton>

              <BaseButton theme="gray">1</BaseButton>
              <BaseButton theme="gray">2</BaseButton>
              <BaseButton theme="gray">3+</BaseButton>
            </div>
          </div>
          <div class="tw-grid tw-gap-6 lg:tw-grid-cols-2 lg:tw-gap-4">
            <BaseRange
              v-bind="{
                min: 1,
                max: 30,
                name1: 'floor-to',
                name2: 'floor-from',
                label: 'Этаж',
              }"
            />
            <BaseRange
              v-bind="{
                min: 29,
                max: 120,
                name1: 'square-to',
                name2: 'square-from',
                label: 'Площадь, м²',
              }"
            />
          </div>
          <div>Спецпредложение</div>
        </div>
      </template>
      <template #action-second>
        <BaseButton> Применить</BaseButton>
      </template>
    </ModalsOther>
  </section>
</template>
<script lang="ts" setup>
const typeApartment = ref('');
const costFrom = ref(null);
const openParametrs = ref(false)
</script>
<style lang="scss" scoped></style>
