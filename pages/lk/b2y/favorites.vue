<template>
  <section v-if="favorites.length < 1" class="card-wrapper tw-min-h-[648px]">
    <div
      class="tw-grid tw-h-full tw-w-full tw-place-content-center tw-justify-items-center"
    >
      <div class="tw-rounded-lg tw-bg-base00 tw-p-4 tw-w-fit tw-mb-8">
        <BaseIcon name="heart" class="tw-w-8 tw-h-8" />
      </div>
      <div class="tw-text-h6 tw-mb-4">Избранное</div>
      <div class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-mb-4">
        Добавьте в избранное объекты
      </div>
      <BaseButton> Перейти к объектам </BaseButton>
    </div>
  </section>
  <section v-else class="card-wrapper">
    <div class="section__top">
      <h2 class="section__title">Избранное</h2>
    </div>
    <div>
      <div
        v-for="(item, index) in 4"
        :key="index"
        class="tw-flex tw-justify-between"
        :class="[
          index === 0 ? 'tw-pb-8' : 4 === index + 1 ? 'tw-pt-8' : 'tw-py-8',
        ]"
      >
        <div class="tw-flex tw-gap-8">
          <div
            class="tw-w-[152px] tw-h-[152px] tw-rounded-2xl tw-overflow-hidden tw-bg-base00 tw-grid tw-place-content-center tw-p-4"
          >
            <img src="/images/img/plan-apartment.png" alt="" />
          </div>
          <div class="tw-grid tw-content-between">
            <div>
              <h5 class="tw-text-body_l tw-mb-2">1-комнатная, 36 м²</h5>
              <p
                class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-1"
              >
                2 этаж из 17 · Литер 1
              </p>
              <h6 class="tw-text-body_s2 -tw-tracking-875">
                Михайловка Green Place
              </h6>
            </div>
            <div
              class="tw-rounded-lg tw-bg-base00 tw-py-1 tw-px-2 tw-flex tw-gap-2.5 tw-items-center"
            >
              <BaseIcon
                name="paint_brush_board"
                class="tw-w-4 tw-h-4 tw-text-primary"
              />
              Предчистовая отделка
            </div>
          </div>
        </div>
        <div
          class="tw-grid tw-content-between tw-justify-items-end tw-text-right"
        >
          <div>
            <h4 class="tw-text-h6 tw-mb-2">20 256 296 ₽</h4>
            <div class="tw-text-body_s2 -tw-tracking-875 tw-mb-1">
              <span class="tw-text-text02">В ипотеку — </span>
              <span>от 15 659 ₽ / мес</span>
            </div>
            <div class="tw-text-body_s2 -tw-tracking-875">
              <span class="tw-text-text02">Первоначальный взнос — от </span
              ><span>5 825 659 ₽</span>
            </div>
          </div>
          <div class="tw-flex tw-gap-2">
            <BaseButton
              paddingClasses=" tw-px-4 tw-py-2"
              @click="checkModal = true"
              >Проверить клиента</BaseButton
            >

            <button class="tw-rounded-lg tw-p-2 tw-bg-base00">
              <BaseIcon
                name="heart_bg"
                class="tw-w-6 tw-h-6 tw-text-primary"
              ></BaseIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BaseModal v-model="checkModal">
    <div class="tw-w-[668px]">
      <div class="tw-p-12 tw-bg-white tw-rounded-2xl">
        <div class="tw-flex tw-justify-between tw-items-start tw-mb-8">
          <div>
            <h2 class="tw-text-h4 tw-mb-2">Проверить клиента</h2>
            <p class="tw-text-text02">
              Введите номер телефона потенциального <br />
              клиента для проверки его в базе
            </p>
          </div>
          <button
            class="tw-rounded-lg tw-p-3 tw-bg-base00 tw-w-fitt"
            @click="checkModal = false"
          >
            <BaseIcon name="close" class="tw-w-6 tw-h-6" />
          </button>
        </div>
        <form class="tw-grid tw-gap-8">
          <div class="tw-flex tw-justify-between">
            <div class="tw-flex tw-gap-4">
              <div
                class="tw-w-[56px] tw-h-[56px] tw-rounded-lg tw-overflow-hidden tw-bg-base00 tw-grid tw-place-content-center tw-p-2"
              >
                <img src="/images/img/plan-apartment.png" alt="" />
              </div>
              <div class="tw-grid tw-content-between">
                <div class="tw-text-body_l">1-комнатная, 36 м²</div>
                <div class="tw-text-body_s -tw-tracking-875 tw-text-text02">
                  2 этаж из 17 · Литер 1 · Михайловка Green Place
                </div>
              </div>
            </div>
            <div class="tw-text-h6">20 256 296 ₽</div>
          </div>
          <div class="tw-grid tw-gap-5">
            <div class="tw-grid tw-grid-cols-2 tw-gap-5">
              <BaseInput
                name="phone1"
                label="Телефон 1"
                placeholder="+7 (|999) 999-99-99"
                v-model="client.phone1"
              />
              <BaseInput
                name="phone2"
                label="Телефон 2"
                placeholder="+7 (|999) 999-99-99"
                v-model="client.phone2"
              />
            </div>

            <BaseSelect
              label="Связь между телефоном 1 и 2"
              name="connection"
              :drop-down-props="{
                options: [{ label: 'Брат/сестра - брат/сестра', value: '1' }],
              }"
              v-model="client.connection"
            />
          </div>
          <BaseButton theme="gray">Проверить клиента</BaseButton>
        </form>
      </div>
    </div>
  </BaseModal>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
})
const client = ref({
  phone1: '',
  phone2: '',
  connection: '',
})
const favorites = [{}]
const checkModal = ref(true)
</script>
<style lang="scss" scoped></style>
