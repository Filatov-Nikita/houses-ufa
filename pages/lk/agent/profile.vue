<template>
  <section class="card-wrapper">
    <form v-if="isUpdate">
      <div class="tw-grid tw-grid-cols-3 tw-gap-5 tw-mb-8">
        <BaseInput
          name="surname"
          label="Фамилия"
          placeholder="Иванов"
          v-model="profile.surname"
        />
        <BaseInput
          name="name"
          label="Имя"
          placeholder="Иван"
          v-model="profile.name"
        />
        <BaseInput
          name="patronymic"
          label="Отчество"
          placeholder="Иванович"
          v-model="profile.patronymic"
        />

        <BaseInput
          name="email"
          label="E-mail"
          placeholder="mail@mail.com"
          v-model="profile.email"
        />
        <div class="tw-relative">
          <BaseInput
            name="date"
            label="Дата рождения"
            placeholder="00.00.0000"
            v-model="profile.date"
            input-class="!tw-pr-12"
          />
          <BaseIcon
            name="calendar"
            class="tw-w-6 tw-h-6 tw-text-icon tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-mt-3"
          />
        </div>
        <BaseInput
          name="phone"
          label="Телефон"
          placeholder="+7 (917) 481-94-57"
          v-model="profile.phone"
        />
      </div>

      <div class="tw-inline-flex tw-gap-5">
        <BaseButton type="submit">Сохранить</BaseButton>
        <BaseButton type="button" @click="isUpdate = false" theme="gray"
          >Отмена</BaseButton
        >
      </div>
    </form>
    <template v-else>
      <div class="section__top tw-flex tw-justify-between tw-items-center">
        <h2 class="section__title">Профиль</h2>
        <button
          class="tw-flex tw-gap-2 tw-text-primary"
          @click="isUpdate = true"
        >
          <BaseIcon name="pen" class="tw-w-6 tw-h-6" />
          Редактировать
        </button>
      </div>
      <div class="tw-flex tw-justify-between tw-items-start">
        <div>
          <div class="tw-text-h5 tw-mb-8">Имя Фамилия Отчетсво</div>
          <div class="tw-grid tw-grid-cols-2 tw-gap-x-12 tw-gap-y-5">
            <div class="tw-grid tw-gap-2">
              <div class="tw-text-body_s2 -tw-tracking-875">Агентство</div>
              <div class="tw-text-h6">МФА «Новострой» Недвижимость</div>
            </div>
            <div class="tw-grid tw-gap-2">
              <div class="tw-text-body_s2 -tw-tracking-875">Телефон</div>
              <div class="tw-text-h6">+7 (917) 481-94-57</div>
            </div>
            <div class="tw-grid tw-gap-2">
              <div class="tw-text-body_s2 -tw-tracking-875">E-mail</div>
              <div class="tw-text-h6">example@mail.ru</div>
            </div>
            <div class="tw-grid tw-gap-2">
              <div class="tw-text-body_s2 -tw-tracking-875">Дата рождения</div>
              <div class="tw-text-h6">01.01.1990</div>
            </div>
          </div>
        </div>
        <div
          class="tw-grid tw-gap-2 tw-bg-base00 tw-px-6 tw-py-4 tw-rounded-2xl"
        >
          <div class="tw-text-body_s2 -tw-tracking-875 tw-text-text02">
            Место в рейтинге
          </div>
          <div class="tw-text-h5">
            <span> 215 </span>
            <span class="tw-text-text02"> / 1205 </span>
          </div>
        </div>
      </div>
    </template>
  </section>
  <section class="card-wrapper">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-8">
      <h3 class="tw-text-h5">Статистика</h3>
      <div class="tw-flex tw-gap-4">
        <BaseSelect
          class="tw-w-fit"
          label=""
          name="typeAparment"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
          v-model="month"
        />
        <BaseSelect
          class="tw-w-fit"
          label=""
          name="typeAparment"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
          v-model="year"
        />
      </div>
    </div>
    <div class="tw-grid tw-gap-5 tw-grid-cols-3">
      <div
        v-for="item in statics"
        class="tw-grid tw-gap-2 tw-bg-base00 tw-rounded-2xl tw-px-6 tw-py-4"
      >
        <div class="tw-text-body_s2 -tw-tracking-875">
          {{ item.title }}
        </div>
        <div class="tw-text-h3">
          {{ item.text }}
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
})
const month = ref('')
const year = ref('')
const isUpdate = ref(false)
const profile = ref({
  surname: '',
  name: '',
  patronymic: '',
  email: '',
  date: '',
  phone: '',
})
const statics = [
  {
    title: 'Количество клиентов',
    text: '6',
  },
  {
    title: 'Количество заявок на ипотеку',
    text: '5',
  },
  {
    title: 'Количество звявок на бронь',
    text: '4',
  },
  {
    title: 'Количество заявок на интерес',
    text: '3',
  },
  {
    title: 'Количество снятых броней',
    text: '2',
  },
  {
    title: 'Количество сделок',
    text: '1',
  },
  {
    title: 'Сумма продаж',
    text: '22 745 885 ₽',
  },
]
</script>
<style lang="scss" scoped></style>
