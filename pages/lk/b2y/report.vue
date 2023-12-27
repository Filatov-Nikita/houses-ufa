<template>
  <section class="card-wrapper">
    <div class="section__top">
      <h2 class="section__title">Отчет агентства</h2>
    </div>
    <div class="tw-flex tw-justify-between">
      <div
        class="tw-bg-base00 tw-px-6 tw-py-4 tw-rounded-2xl tw-flex tw-gap-12"
      >
        <div>
          <div class="tw-text-text02 tw-text-body_s2 tw-tracking-875 tw-mb-2">
            Агентство
          </div>
          <div class="tw-text-h5">Название агентства</div>
        </div>
        <div>
          <div class="tw-text-text02 tw-text-body_s2 tw-tracking-875 tw-mb-2">
            Количество агентов
          </div>
          <div class="tw-text-h5">17</div>
        </div>
      </div>
      <div class="tw-bg-base00 tw-px-6 tw-py-4 tw-rounded-2xl">
        <div class="tw-text-text02 tw-text-body_s2 tw-tracking-875 tw-mb-2">
          Сумма сделок в марте
        </div>
        <div class="tw-flex tw-gap-2">
          <span class="tw-text-h5"> 5 595 484 ₽ </span>
          <span class="tw-text-error tw-text-body_s2 -tw-tracking-875">
            -20% к февралю
          </span>
        </div>
      </div>
    </div>
  </section>
  <section class="card-wrapper">
    <div>
      <h3 class="tw-text-h5 tw-mb-8">Закрывающая документация</h3>
      <div class="tw-flex tw-justify-between tw-mb-8">
        <div class="tw-flex tw-gap-4">
          <BaseSelect
            class="tw-w-fit"
            label=""
            name="month"
            :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
            v-model="month"
          />
          <BaseSelect
            class="tw-w-fit"
            label=""
            name="year"
            :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
            v-model="year"
          />
        </div>
        <div>
          <BaseButton theme="gray">Сформировать</BaseButton>
        </div>
      </div>
      <div class="tw-flex tw-gap-5 tw-mb-4">
        <a v-for="n in 2" href="#" class="link-file">
          <div class="tw-flex tw-gap-4">
            <div class="icon">
              <BaseIcon name="file-text" class="tw-w-6 tw-h-6 tw-text-text02" />
            </div>
            <div>
              <div>Отчет</div>
              <div class="tw-flex tw-gap-2">
                <span> PDF </span>
                ·
                <span> 32,4 Кб </span>
              </div>
            </div>
          </div>
          <div class="tw-p-3 tw-w-fit tw-rounded-lg tw-bg-primary">
            <BaseIcon
              name="download-file"
              class="tw-w-6 tw-h-6 tw-text-white"
            />
          </div>
        </a>
      </div>
      <BaseButton class="tw-w-full">Скачать все документы</BaseButton>
    </div>
  </section>
  <section class="card-wrapper">
    <div>
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-10">
        <h3 class="tw-text-h5">Мои агенты</h3>
        <BaseSelect
          class=" "
          label=""
          name="typeAparment"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
          v-model="monthSelect"
        />
      </div>
      <div class="tw-grid tw-gap-8">
        <Table
          v-bind="{
            headList: tableHeadList,
            bodyList: tableBodyList,
            colClass: 'tw-grid-cols-[0.24fr_1fr_0.56fr_0.4fr_0.33fr]',
          }"
        />
        <BaseButton theme="gray">Показать ещё 7 из 17</BaseButton>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
  middleware: ['auth'],
})
const monthSelect = ref('')
const tableHeadList = [
  {
    name: 'Место',
    type: 'place',
    sorted: false,
  },
  {
    name: 'Агентство',
    type: 'agentes',
    sorted: false,
  },
  {
    name: 'Клиенты/Интересы',
    type: 'clients',
    sorted: false,
  },
  {
    name: 'Кол-во сделок',
    type: 'count',
    sorted: false,
  },
  {
    name: 'Сумма оплат, ₽ ',
    type: 'summ',
    sorted: false,
  },
]
const tableBodyList = [
  {
    place: '1',
    agentes: 'Сеть агентств недвижимости «Самолёт»',
    clients: 10,
    count: 1,
    summ: 10,
  },
  {
    place: '2',
    agentes: 'Сеть агентств недвижимости «Самолёт»',
    clients: 10,
    count: 1,
    summ: 11,
  },
  {
    place: '3',
    agentes: 'Сеть агентств недвижимости «Самолёт»',
    clients: 10,
    count: 1,
    summ: 12,
  },
  {
    place: '4',
    agentes: 'Сеть агентств недвижимости «Самолёт»',
    clients: 10,
    count: 1,
    summ: 13,
  },
]
const month = ref('')
const year = ref('')
</script>
<style lang="scss" scoped>
.link-file {
  @apply tw-rounded-md tw-border tw-border-border00 tw-py-4 tw-px-6 tw-flex tw-justify-between tw-w-full hover:tw-bg-base00 hover:tw-border-base00 tw-transition-all tw-duration-100 tw-ease-in;
  .icon {
    @apply tw-p-3 tw-w-fit tw-rounded-lg tw-bg-base00 tw-transition-all tw-duration-100 tw-ease-in;
  }
  &:hover .icon {
    @apply tw-bg-white;
  }
}
</style>
