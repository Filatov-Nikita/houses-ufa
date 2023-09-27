<template>
  <div>
    <div class="tw-overflow-auto tw-mb-6 xl:tw-mb-8">
      <BaseTabsGroup v-model="tab" class="">
        <BaseTabsGroupItem v-for="tab in teamTabs" :name="tab.name">
          {{ tab.title }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
    <BaseTabsTabContent v-model="tab">
      <!-- <BaseTabsTabContentItem v-for="tab in teamTabs" :name="tab.name" :key="tab.name">
      {{ tab.title }}
      </BaseTabsTabContentItem> -->
      <BaseTabsTabContentItem
        name="management"
        class="tw-grid lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4 lg:tw-gap-5s"
      >
        <div
          class="tw-py-5 tw-px-4 tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-grid tw-gap-6 lg:tw-flex lg:tw-gap-10"
          v-for="team in managementList"
        >
          <div
            class="tw-rounded-2xl tw-overflow-hidden tw-w-[144px] tw-h-[144px] lg:tw-w-[80px] lg:tw-h-[80px] tw-shrink-0"
          >
            <img :src="team.photo" alt="" />
          </div>

          <div>
            <h4 class="tw-text-h6 tw-mb-2">{{ team.fio }}</h4>
            <h5 class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-4">
              {{ team.status }}
            </h5>
            <a
              :href="`tel:${team.phone}`"
              class="tw-text-body_m tw-text-primary"
            >
              {{ team.phone }}
            </a>
          </div>
        </div>
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="departmentApartments">
        departmentApartments
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="realEstateAdepartment">
        departmentApartments
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="mortgage">
        departmentApartments
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
  <div></div>
</template>
<script lang="ts" setup>
const tab = ref('test')
const teamTabs = [
  {
    name: 'management',
    title: 'Руководство',
  },
  {
    name: 'departmentApartments',
    title: 'Отдел продаж квартир',
  },
  {
    name: 'realEstateAdepartment',
    title: 'Отдел продаж загородной недвижимости',
  },
  {
    name: 'mortgage',
    title: 'Отдел ипотеки',
  },
]

const managementList = [
  {
    photo: '/images/team-test.jpg',
    fio: 'Вечков Евгений Борисович',
    status: 'Генеральный директор УК «Жилой Квартал»',
    phone: '+7 (999) 999-99-99',
  },
  {
    photo: '/images/team-test.jpg',
    fio: 'Шаймарданова Эльвира Саматовна',
    status:
      'Зам. ген. директора по развитию и правовым вопросам УК «Жилой Квартал»',
    phone: '+7 (999) 999-99-99',
  },
  {
    photo: '/images/team-test.jpg',
    fio: 'Вечков Евгений Борисович',
    status: 'Генеральный директор УК «Жилой Квартал»',
    phone: '+7 (999) 999-99-99',
  },
]
onMounted(() => {
  tab.value = teamTabs[0].name
})
</script>
<style lang="scss" scoped></style>
