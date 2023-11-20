<template>
  <div>
    <BaseTabsGroup class="tw-mb-8" v-model="tab">
      <BaseTabsGroupItem
        v-for="tab in teamTabs"
        :name="tab.name"
      >
        {{ tab.title }}
      </BaseTabsGroupItem>
    </BaseTabsGroup>

    <BaseTabsTabContent v-model="tab">
      <BaseTabsTabContentItem
        class="team-list"
        v-for="tab in teamTabs"
        :key="tab.name"
        :name="tab.name"
      >
      <article
        class="team-list__item team-item"
        v-for="item in tab.list"
      >
          <div class="team-item__img">
            <img :src="item.photo" alt="" />
          </div>

          <div>
            <h3 class="team-item__name">{{ item.name }}</h3>
            <p class="team-item__position">
              {{ item.position }}
            </p>
          </div>
        </article>
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>
<script lang="ts" setup>
const tab = ref('management');

const teamTabs = [
  {
    name: 'management',
    title: 'Руководство',
    list: [
      {
        name: 'Вечков Евгений Борисович',
        position: 'Генеральный директор УК «Жилой Квартал»',
        photo: '/images/team/1.jpg',
      },
      {
        name: 'Иванов Дмитрий Сергеевич',
        position: 'Первый зам. ген. директора УК «Жилой Квартал»',
        photo: '/images/team/2.jpg',
      },
      {
        name: 'Шаймарданова Эльвира Саматовна',
        position: 'Зам. ген. директора по развитию и правовым вопросам УК «Жилой Квартал»',
        photo: '/images/team/3.jpg',
      }
    ],
  },
  {
    name: 'departmentApartments',
    title: 'Отдел продаж квартир',
    list: [
      {
        name: 'Абдульменова Алеся',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/4.png',
      },
      {
        name: 'Галлямов Руслан',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/5.jpg',
      },
      {
        name: 'Чариков Вадим',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/6.jpg',
      }
    ],
  },
  {
    name: 'realEstateAdepartment',
    title: 'Отдел продаж загородной недвижимости',
    list: [
      {
        name: 'Гаспарян Армен',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/7.jpg',
      },
      {
        name: 'Кадырова Чулпан',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/8.jpg',
      },
      {
        name: 'Тагирова Анастасия',
        position: 'Старший эксперт по продажам недвижимости',
        photo: '/images/team/9.jpg',
      }
    ],
  },
];
</script>

<style lang="scss" scoped>
  .team-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(100% / 12 * 4 - 20px);
      margin: 10px;
    }
  }

  .team-item {
    border-radius: 16px;
    padding: 24px 16px;
    @apply tw-bg-white;

    &__img {
      border-radius: 16px;
      height: 408px;
      width: 100%;
      margin-bottom: 24px;
      overflow: hidden;

      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    &__name {
      margin-bottom: 8px;
      @apply tw-text-text00 tw-text-xl;
    }

    &__position {
      @apply tw-text-text02 tw-text-sm;
    }
  }
</style>
