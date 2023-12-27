<template>
  <div class="card-wrapper">
    <div class="section__top">
      <h2 class="section__title">Рейтинги</h2>
    </div>
    <div>
      <div class="tw-flex tw-justify-between tw-mb-6 xl:tw-mb-8">
        <BaseTabsGroup v-model="tab" class="">
          <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
            {{ item.title }}
          </BaseTabsGroupItem>
        </BaseTabsGroup>
        <div>
          <div
            class="tw-flex tw-gap-4 tw-p-4 tw-rounded-lg tw-bg-base00 tw-w-fit"
          >
            Сегодня
            <BaseIcon name="calendar" class="tw-w-6 tw-h-6 tw-text-icon" />
          </div>
        </div>
      </div>
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-8">
        <div class="tw-text-h5">Топ-10 агентств недвижимости</div>
        <BaseSelect
          class="xl:tw-basis-[322px]"
          label=""
          name="typeAparment"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
          v-model="numberTransaction"
        />
      </div>
      <BaseTabsTabContent v-model="tab">
        <BaseTabsTabContentItem name="agencies" key="agencies">
          <Table
            v-bind="{
              headList: tableHeadList,
              bodyList: tableBodyList,
              colClass: 'tw-grid-cols-[0.24fr_1fr_0.56fr_0.4fr_0.33fr]',
            }"
          />
        </BaseTabsTabContentItem>
        <BaseTabsTabContentItem name="agennts" key="agennts">
        </BaseTabsTabContentItem>
      </BaseTabsTabContent>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
  middleware: ['auth'],
})
const tab = ref('agencies')
const tabs = [
  {
    name: 'agencies',
    title: 'Агентства',
  },
  {
    name: 'agennts',
    title: 'Агенты',
  },
]
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
    sorted: true,
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
const numberTransaction = ref('')
</script>
<style lang="scss" scoped></style>
