<template>
  <div class="team-block">
    <div class="team-block__filter">
      <BaseTabsGroup v-model="tab">
        <BaseTabsGroupItem
          v-for="tab in teamTabs"
          :name="tab.name"
        >
          {{ tab.title }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>

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
        photo: '/images/team/1.png',
      },
      {
        name: 'Иванов Дмитрий Сергеевич',
        position: 'Первый зам. ген. директора УК «Жилой Квартал»',
        photo: '/images/team/2.jpg',
      },
      {
        name: 'Шаймарданова Эльвира Саматовна',
        position: 'Директор по GR политике',
        photo: '/images/team/3.jpg',
      },
      {
        name: 'Зобков Валерий Владимирович',
        position: 'Директор по строительству',
        photo: '/images/team/4.jpg',
      },
      {
        name: 'Рааб Екатерина Валерьевна',
        position: 'Директор по персоналу',
        photo: '/images/team/5.jpg',
      },
    ],
  },
  {
    name: 'departmentApartments',
    title: 'Отдел продаж квартир',
    list: [
      {
        name: 'Илишев Тагир',
        position: 'Руководитель отдела продаж',
        photo: '/images/team/DSC_4319_408х408.jpg',
      },
      {
        name: 'Абдульменова Алеся',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4170_408х408.png',
      },
      {
        name: 'Галлямов Руслан',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4401_408х408.jpg',
      },
      {
        name: 'Чариков Вадим',
        position: 'Старший Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4340_408х408.jpg',
      },
      {
        name: 'Декатова Евгения',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4182_408х408.jpg',
      },
      {
        name: 'Ардаширова Гузель',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4205_408х408.jpg',
      },
      {
        name: 'Асеева Ксения',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4245_408х408.jpg',
      },
      {
        name: 'Красильникова Эльмира',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4273_408х408.jpg',
      },
      {
        name: 'Вагапова Альбина',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4293_408х408.jpg',
      },
      {
        name: 'Исмагилов Марсель',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4358_408х408.jpg',
      },
      {
        name: 'Петрова Эльвира',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4422_408х408.jpg',
      },
    ],
  },
  {
    name: 'realEstateAdepartment',
    title: 'Отдел продаж загородной недвижимости',
    list: [
      {
        name: 'Тагирова Анастасия',
        position: 'Старший Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4384_408х408.jpg',
      },
      {
        name: 'Токарева Люция',
        position: 'Руководитель по работе с партнерами',
        photo: '/images/team/DSC_4285_408х408.jpg',
      },
      {
        name: 'Порфирьева Наталья',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4193_408х408.jpg',
      },
      {
        name: 'Каримов Руслан',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4223_408х408.jpg',
      },
      {
        name: 'Капитонова Лариса',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4252_408х408.jpg',
      },
      {
        name: 'Демченко Гульнара',
        position: 'Эксперт по продажам недвижимости',
        photo: '/images/team/DSC_4440_408х408.jpg',
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
  .team-block {
    &__filter {
      width: 100%;
      max-width: 100%;
      overflow-y: hidden;
      margin-bottom: 32px;
    }
  }

  .team-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(100% / 12 * 4 - 20px);
      margin: 10px;

      @include lg {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
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

      @include md {
        height: auto;
      }

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
