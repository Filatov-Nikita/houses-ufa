<template>
  <section class="card-wrapper tw-min-h-[648px]">
    <div
      v-if="true"
      class="tw-grid tw-h-full tw-w-full tw-place-content-center tw-justify-items-center"
    >
      <div class="tw-mb-12 tw-text-center">
        <div class="tw-text-h6 tw-mb-4">Клиентов пока нет</div>
        <div class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-mb-4">
          *Текст описания*
        </div>
      </div>
      <div class="tw-flex tw-gap-4">
        <div
          class="tw-grid tw-gap-4 tw-justify-items-center tw-text-center tw-content-start tw-w-[318px]"
        >
          <div class="tw-rounded-lg tw-p-2 tw-bg-base00 tw-w-fit">
            <BaseIcon name="house" class="tw-w-6 tw-h-6 tw-text-primary" />
          </div>
          <div>
            Выберите объект <br />
            и добавьте в избранное
          </div>
          <BaseButton> Объекты </BaseButton>
        </div>
        <BaseIcon name="forward-line" class="tw-w-4 tw-h-4 tw-self-center" />
        <div
          class="tw-grid tw-gap-4 tw-justify-items-center tw-text-center tw-content-start tw-w-[318px]"
        >
          <div class="tw-rounded-lg tw-p-2 tw-bg-base00 tw-w-fit">
            <BaseIcon name="user" class="tw-w-6 tw-h-6 tw-text-primary" />
          </div>
          <div>
            Проверьте клиента, нажав <br />
            на кнопку «Проверить клиента»
          </div>
        </div>
        <BaseIcon name="forward-line" class="tw-w-4 tw-h-4 tw-self-center" />
        <div
          class="tw-grid tw-gap-4 tw-justify-items-center tw-text-center tw-content-start tw-w-[318px]"
        >
          <div class="tw-rounded-lg tw-p-2 tw-bg-base00 tw-w-fit">
            <BaseIcon name="user" class="tw-w-6 tw-h-6 tw-text-primary" />
          </div>
          <div>
            Проверьте клиента, нажав <br />
            на кнопку «Проверить клиента»
          </div>
          <BaseButton> Личный кабинет </BaseButton>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="tw-px-6 tw-py-4 tw-grid tw-grid-cols-[51px_230px_230px_280px_auto] tw-border-b-[1px] tw-border-border00"
      >
        <div>#</div>
        <div>Покупатель</div>
        <div>Телефон</div>
        <div>Недвижимость</div>
      </div>
      <div class="tw-grid tw-gap-4">
        <div v-for="item in clientList" class="tw-px-6 tw-py-4">
          <div class="tw-grid tw-grid-cols-[51px_230px_230px_280px_auto]">
            <div>{{ item.id }}</div>
            <div>{{ item.client }}</div>
            <div>{{ item.phone }}</div>
            <div>{{ item.apartment }}</div>
            <div class="tw-flex tw-gap-2 tw-justify-center">
              <button
                class="tw-rounded-lg tw-px-3 tw-py-2 tw-bg-base00 tw-opacity-50"
              >
                Бронь
              </button>
              <button
                class="tw-rounded-lg tw-px-3 tw-py-2 tw-bg-base00 tw-opacity-50"
              >
                Ипотека
              </button>
            </div>
          </div>
          <div
            class="tw-py-4 tw-px-6 tw-rounded-2xl tw-bg-base00 tw-ml-[51px] tw-mt-4 tw-flex tw-justify-between tw-items-start tw-gap-5"
          >
            <div
              class="tw-flex tw-items-end tw-justify-between tw-grow tw-pr-[46px]"
            >
              <div>
                <div
                  class="tw-text-text02 tw-text-body_s -tw-tracking-875 tw-mb-1"
                >
                  6 июня 2023
                </div>
                <div class="tw-text-h6">Заявка на ипотеку № 644848</div>
              </div>
              <div>
                <div
                  class="tw-flex tw-gap-2.5 tw-text-body_s -tw-tracking-875 tw-bg-white tw-rounded-lg tw-py-1 tw-px-2 tw-w-fit tw-items-center"
                >
                  <BaseIcon
                    name="hour-glass"
                    class="tw-w-4 tw-h-4 tw-text-primary"
                  />
                  В обработке
                </div>
              </div>
            </div>
            <button>
              <BaseIcon name="down" class="tw-w-6 tw-h-6 tw-text-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
})
const clientList = [
  {
    id: 1,
    client: 'Хабибуллин Альберт Робертович',
    phone: '+7 917 487-94-57',
    apartment: 'Михайловка Green Place, 1-комнатная, 36 м²',
  },
  {
    id: 2,
    client: 'Хабибуллин Альберт Робертович',
    phone: '+7 917 487-94-57',
    apartment: 'Михайловка Green Place, 1-комнатная, 36 м²',
  },
]
</script>
<style lang="scss" scoped></style>
