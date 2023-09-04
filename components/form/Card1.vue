<template>
  <div class="form">
    <div class="form__wrapper"></div>
    <div
      class="form__contnet tw-grid lg:tw-grid-cols-2 tw-gap-6 tw-px-4 tw-py-6 lg:tw-p-6 xl:tw-p-10 tw-relative"
    >
      <div class="tw-flex tw-flex-col tw-gap-2">
        <h2 class="tw-text-h5 lg:tw-text-h4">Остались вопросы?</h2>
        <p class="tw-text-text02 tw-text-body_m">
          Оставьте свои контактные <br class="xl:tw-hidden" />
          данные и мы свяжемся с вами
        </p>
      </div>
      <form class="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-5">
        <BaseInput name="name" label="Имя" placeholder="Иван" />
        <BaseInput
          name="name"
          label="Телефон"
          placeholder="+7 (XXX) XXX XX XX"
        />
        <BaseSelect
          label="Когда позвонить"
          name="test"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
        />
        <BaseSelect
          label="Во сколько позвонить"
          name="test2"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
        />

        <BaseButton
          theme="gray"
          class="tw-w-full lg:tw-w-auto !tw-text-text02 lg:tw-order-2"
        >
          Отправить
        </BaseButton>
        <p
          class="tw-text-text02 tw-text-body_xs lg:tw-text-body_m lg:tw-order-1"
        >
          Нажимая кнопку, вы соглашаетесь
          <a href="#" class="tw-text-primary">
            с условиями обработки персональных данных
          </a>
        </p>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.form {
  @apply tw-bg-white tw-rounded-2xl  tw-relative;
  &__wrapper {
    @apply tw-absolute tw-w-full tw-h-full tw-overflow-hidden;
    &::before {
      @screen lg {
        @apply tw-absolute;
        content: '';
        top: 0;
        left: 0px;
        background: url(./assets/images/icons/poligon.svg) left center / contain
          no-repeat;
        height: 100%;
        width: 619px;
        left: -200px;
      }
      @screen xl {
        left: 0px;
      }
    }
    &::after {
      @screen lg {
        @apply tw-absolute;
        content: '';
        bottom: 0;
        left: 48px;
        width: 404px;
        height: 200px;
        background: url(./assets/images/icons/group-icons-1.svg) left center /
          contain no-repeat;
      }
    }
  }
  @screen lg {
    height: 356px;
    width: 100%;
  }
}
</style>
