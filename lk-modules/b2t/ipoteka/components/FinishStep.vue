<template>
  <div>
    <CreditFinishInfo class="book-data" />
    <section class="book-data">
      <div class="book-data__head">
        <h2 class="book-data__title">
          Личные данные
        </h2>
      </div>
      <div v-if="profileData" class="passport-show">
        <div class="passport-show__item">
          <p class="passport-show__label">
            ФИО
          </p>
          <p class="passport-show__value">
            {{ profileData.full_name }}
          </p>
        </div>
        <div class="passport-show__item">
          <p class="passport-show__label">
            Телефон
          </p>
          <p class="passport-show__value">
            {{ profileData.cellphone }}
          </p>
        </div>
      </div>
    </section>
    <section class="book-data">
      <div class="book-data__head">
        <h2 class="book-data__title">
          Паспортные данные
        </h2>
        <button class="edit-btn" @click="onPrev">
          <BaseIcon class="edit-btn__icon" name="edit" />
          <span>Редактировать</span>
        </button>
      </div>
      <div v-if="profileData && profileData.passport" class="passport-show">
        <div class="passport-show__item">
          <p class="passport-show__label">
            Серия и номер паспорта
          </p>
          <p class="passport-show__value">
            {{ profileData.passport.series_and_number }}
          </p>
        </div>
        <div class="passport-show__item">
          <p class="passport-show__label">
            Дата выдачи
          </p>
          <p class="passport-show__value">
            {{ $formatDate(profileData.passport.issue_date) }}
          </p>
        </div>
        <div class="passport-show__item">
          <p class="passport-show__label">
            Код подразделения
          </p>
          <p class="passport-show__value">
            {{ profileData.passport.department_code }}
          </p>
        </div>
        <div class="passport-show__item">
          <p class="passport-show__label">
            Выдан
          </p>
          <p class="passport-show__value">
            {{ profileData.passport.issued_by }}
          </p>
        </div>
        <div class="passport-show__item">
          <p class="passport-show__label">
            Адрес регистрации
          </p>
          <p class="passport-show__value">
            {{ profileData.passport.registration_address }}
          </p>
        </div>
        <div class="passport-show__item">
          <p class="passport-show__label">
            СНИЛС
          </p>
          <p class="passport-show__value">
            {{ profileData.passport.snils }}
          </p>
        </div>
        <div class="passport-show__item">
          <p class="passport-show__label">
            ИНН
          </p>
          <p class="passport-show__value">
            {{ profileData.passport.snils }}
          </p>
        </div>
      </div>
    </section>
    <BaseButton class="passport-show__action" :disabled="store.finishing" @click="onSubmit">
      Отправить заявку
    </BaseButton>
    <ModalSuccess v-model="successShowed" />
  </div>
</template>

<script setup lang="ts">
  import { type ProfileData } from '@/lk-modules/b2t/client-data/store/index';
  import { useIpotekaModule } from '../store';
  import CreditFinishInfo from './CreditFinishInfo.vue';
  import ModalSuccess from './ModalSuccess.vue';

  defineProps<{
    profileData: ProfileData | null,
  }>();

  const store = useIpotekaModule();
  const successShowed = ref(false);

  const emit = defineEmits<{
    (event: 'prev'): void,
  }>();

  function onPrev() {
    emit('prev');
  }

  async function onSubmit() {
    try {
      await store.finish();
      successShowed.value = true;
    } catch(e) {
      throw e;
    }
  }
</script>

<style scoped lang="scss">
  .book-data {
    &__title {
      font-size: 24px;
      line-height: 1.3;
      margin-bottom: 24px;
      @apply tw-text-text01;
    }

    &__head {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
    }

    & + & {
      margin-top: 40px;
      padding-top: 40px;
      @apply tw-border-t tw-border-solid tw-border-border00;
    }
  }

  .passport-show {
    &__item {
      & + & {
        margin-top: 24px;
      }
    }

    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__value {
      font-size: 16px;
      line-height: 1.5;
      @apply tw-text-text00;
    }

    &__action {
      margin-top: 40px;
    }
  }

  .edit-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    @apply tw-text-primary tw-text-base;

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
