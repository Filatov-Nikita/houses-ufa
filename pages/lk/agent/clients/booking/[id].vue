<template>
  <section class="card-wrapper">
    <div class="tw-flex tw-gap-2 tw-items-center tw-mb-6">
      <BaseIcon name="back-line" class="tw-w-6 tw-h-6" />
      Вернуться назад
    </div>
    <h2 class="section__title tw-mb-10">Онлайн-бронирование</h2>
    <div class="tw-flex tw-justify-between tw-mb-10">
      <div class="tw-flex tw-gap-8">
        <div
          class="tw-w-[88px] tw-h-[88px] tw-rounded-2xl tw-overflow-hidden tw-bg-base00 tw-grid tw-place-content-center tw-p-4"
        >
          <img src="/images/img/plan-apartment.png" alt="" />
        </div>
        <div class="tw-grid tw-content-between">
          <div>
            <h5 class="tw-text-body_l tw-mb-2">1-комнатная, 36 м²</h5>
            <p class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-1">
              2 этаж из 17 · Литер 1
            </p>
            <h6 class="tw-text-body_s2 -tw-tracking-875">
              Михайловка Green Place
            </h6>
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
      </div>
    </div>
    <div class="tw-border-b tw-border-border00 tw-mb-10"></div>
    <div class="tw-flex tw-w-full tw-gap-6 tw-mb-10">
      <Progress
        class="tw-w-full"
        title="Срок бронирования"
        :state="states.deadline"
      />
      <Progress class="tw-w-full" title="Данные клиента" :state="states.data" />
      <Progress
        class="tw-w-full"
        title="Проверка данных"
        :state="states.verification"
      />
    </div>
    <form @submit="sendDataClient" v-if="states.data === 'active'">
      <h2 class="tw-text-h5 tw-mb-6">Данные клиента</h2>

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
      <h2 class="tw-text-h5 tw-mb-6">Паспортные данные</h2>
      <div class="tw-grid tw-grid-cols-3 tw-gap-5 tw-mb-8">
        <BaseInput
          name="number"
          label="Серия и номер паспорта"
          placeholder="0000  000000"
          v-model="profile.number"
        />
        <div class="tw-relative">
          <BaseInput
            name="date_issue"
            label="Дата выдачи"
            placeholder="00.00.0000"
            v-model="profile.date_issue"
            input-class="!tw-pr-12"
          />
          <BaseIcon
            name="calendar"
            class="tw-w-6 tw-h-6 tw-text-icon tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-mt-3"
          />
        </div>
        <BaseInput
          name="kod"
          label="Код подразделения"
          placeholder="000 — 000"
          v-model="profile.kod"
        />
        <BaseInput
          name="issued"
          label="Выдан"
          placeholder="Отдел ..."
          v-model="profile.issued"
        />
        <BaseInput
          name="registration"
          label="Адрес регистрации"
          placeholder="Адрес регистрации ..."
          v-model="profile.registration"
        />
        <BaseInput
          name="snils"
          label="СНИЛС"
          placeholder="000 000 000 00"
          v-model="profile.snils"
        />
        <BaseInput
          name="inn"
          label="ИНН"
          placeholder="0000000000"
          v-model="profile.inn"
        />
      </div>
      <div class="tw-inline-flex tw-gap-5">
        <BaseButton type="submit">Продолжить</BaseButton>
      </div>
    </form>
    <template v-if="states.verification === 'active'">
      <!-- данные профиля -->
      <div>
        <div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
          <h2 class="tw-text-h5">Данные клиента</h2>
          <div v-if="!isUpdateProfile">
            <button
              class="tw-flex tw-gap-2 tw-text-primary"
              @click="isUpdateProfile = true"
            >
              <BaseIcon name="pen" class="tw-w-6 tw-h-6" />
              Редактировать
            </button>
          </div>
        </div>
        <!-- обновление профиля -->
        <form v-if="isUpdateProfile">
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
            <BaseButton
              type="button"
              @click="isUpdateProfile = false"
              theme="gray"
              >Отмена</BaseButton
            >
          </div>
        </form>
        <div v-else class="tw-grid tw-gap-6">
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              ФИО
            </div>
            <div>Иванов Иван Иванович</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              Дата рождения
            </div>
            <div>00.00.0000</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              Телефон
            </div>
            <div>+7 (917) 481-94-57</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              E-mail
            </div>
            <div>mail@mail.com</div>
          </div>
        </div>
      </div>
      <div class="tw-h-[1px] tw-bg-border00 tw-w-full tw-my-10"></div>
      <!-- паспортные данные -->
      <div class="tw-mb-10">
        <div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
          <h2 class="tw-text-h5">Паспортные данные</h2>
          <div v-if="!isUpdatePassport">
            <button
              class="tw-flex tw-gap-2 tw-text-primary"
              @click="isUpdatePassport = true"
            >
              <BaseIcon name="pen" class="tw-w-6 tw-h-6" />
              Редактировать
            </button>
          </div>
        </div>

        <!-- обновление паспортных данных -->
        <form v-if="isUpdatePassport">
          <div class="tw-grid tw-grid-cols-3 tw-gap-5 tw-mb-8">
            <BaseInput
              name="number"
              label="Серия и номер паспорта"
              placeholder="0000  000000"
              v-model="profile.number"
            />
            <div class="tw-relative">
              <BaseInput
                name="date_issue"
                label="Дата выдачи"
                placeholder="00.00.0000"
                v-model="profile.date_issue"
                input-class="!tw-pr-12"
              />
              <BaseIcon
                name="calendar"
                class="tw-w-6 tw-h-6 tw-text-icon tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-mt-3"
              />
            </div>
            <BaseInput
              name="kod"
              label="Код подразделения"
              placeholder="000 — 000"
              v-model="profile.kod"
            />
            <BaseInput
              name="issued"
              label="Выдан"
              placeholder="Отдел ..."
              v-model="profile.issued"
            />
            <BaseInput
              name="registration"
              label="Адрес регистрации"
              placeholder="Адрес регистрации ..."
              v-model="profile.registration"
            />
            <BaseInput
              name="snils"
              label="СНИЛС"
              placeholder="000 000 000 00"
              v-model="profile.snils"
            />
            <BaseInput
              name="inn"
              label="ИНН"
              placeholder="0000000000"
              v-model="profile.inn"
            />
          </div>
          <div class="tw-inline-flex tw-gap-5">
            <BaseButton type="submit">Сохранить</BaseButton>
            <BaseButton
              type="button"
              @click="isUpdatePassport = false"
              theme="gray"
              >Отмена</BaseButton
            >
          </div>
        </form>
        <div v-else>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              Серия и номер паспорта
            </div>
            <div>8017 469800</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              Дата выдачи
            </div>
            <div>12.08.2012</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              Код подразделения
            </div>
            <div>999 - 198</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              Выдан
            </div>
            <div>Отдел УФМС по РБ ...</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              Адрес регистрации
            </div>
            <div>Республика Башкортостан, г. Уфа, ул. Менделеева 106</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              СНИЛС
            </div>
            <div>998 155 120 08</div>
          </div>
          <div>
            <div
              class="tw-text-body_s2 -tw-tracking-875 tw-text-text02 tw-mb-2"
            >
              ИНН
            </div>
            <div>5112298452</div>
          </div>
        </div>
      </div>
      <BaseButton
        v-if="!isUpdateProfile && !isUpdatePassport"
        @click="succesModal = true"
        >Забронировать</BaseButton
      >
    </template>
  </section>
  <BaseModal v-model="succesModal">
    <div class="tw-p-10 tw-bg-white tw-rounded-2xl">
      <div class="tw-w-[427px] tw-grid tw-justify-items-center">
        <div class="tw-rounded-lg tw-bg-base00 tw-w-fit tw-mb-6 tw-p-3">
          <BaseIcon name="check" class="tw-text-primary tw-w-8 tw-h-8" />
        </div>
        <div class="tw-text-h5 tw-mb-4">Успешное бронирование</div>
        <div class="tw-text-text02 tw-mb-6">*Добавить текст описание*</div>
        <BaseButton theme="gray" class="tw-w-full">Закрыть</BaseButton>
      </div>
    </div>
  </BaseModal>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
  parent: 'clients',
})
const states = ref<{
  deadline: 'not' | 'active' | 'success'
  data: 'not' | 'active' | 'success'
  verification: 'not' | 'active' | 'success'
}>({
  deadline: 'success',
  data: 'active',
  verification: 'not',
})
const profile = ref({
  surname: '',
  name: '',
  patronymic: '',
  email: '',
  date: '',
  phone: '',
  number: '',
  date_issue: '',
  kod: '',
  issued: '',
  registration: '',
  snils: '',
  inn: '',
})
const writeClientData = ref(false)
const isUpdateProfile = ref(false)
const isUpdatePassport = ref(false)

const succesModal = ref(false)

const sendDataClient = () => {
  states.value.data = 'success'
  states.value.verification = 'active'
}
</script>
<style lang="scss" scoped></style>
