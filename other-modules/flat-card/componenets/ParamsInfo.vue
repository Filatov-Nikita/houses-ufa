<template>
  <div class="flat-info" v-if="data">
    <div class="flat-info__promo-badges" v-if="data.badges.length > 0">
      <EstateBadgesPromo
        class="flat-info__promo-badge"
        v-for="badge in data.badges"
        :key="badge.id"
        :badge="badge"
      />
    </div>
    <div class="flat-info__name">
      <h1>{{ title }}</h1>
      <p class="flat-info__subtitle">{{ subtitle }}</p>
    </div>
    <div class="flat-info__badges">
      <p class="flat-info__price-perm2" v-if="data.price_per_m2">
        {{ $formatValue(data.price_per_m2, '₽ / м²') }}
      </p>
    </div>
    <div class="params-block">
      <div class="params-block__one">
        <p class="params-block__key">Комнатность</p>
        <p class="params-block__value">{{ roomsCount }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Этаж</p>
        <p class="params-block__value">{{ data.floor_number }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Квартира №</p>
        <p class="params-block__value">{{ data.number }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Литер</p>
        <p class="params-block__value">{{ data.house.letter }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Срок ввода</p>
        <p class="params-block__value">
          {{ data.entrance.completion_quarter }} кв. {{ data.entrance.completion_year }}
        </p>
      </div>
    </div>
    <div class="flat-info__price-block">
      <p v-if="data.price_promo">
        <EstatePromoPrice :value="data.price_total" />
      </p>
      <p class="flat-info__price" v-if="data.price_total">
        {{ $amount(data.price_promo ?? data.price_total) }}
      </p>
      <p class="flat-info__credit" v-if="data.mortgage_monthly_payment">
        В ипотеку от
        <span class="tw-text-primary">
          {{ $formatValue(data.mortgage_monthly_payment, '₽ / мес') }}
        </span>
      </p>
    </div>
    <div class="flat-info__actions">
      <BaseButton class="flat-info__action" @click="book">
        Забронировать
      </BaseButton>
      <BaseButton class="flat-info__action" theme="gray" @click="showedConsult = true">
        Получить консультацию
      </BaseButton>
    </div>
    <ConsultForm v-model:showed="showedConsult" goal="order_city" />
  </div>
</template>

<script setup lang="ts">
  import { useFlatCard } from '../store';
  import ConsultForm from '@/other-modules/consult-form/index.vue';
  import { getRoomsCount } from '@/plugins/rooms-count';
  import { useGoal } from '@/composables/useGoal';
  import { useAuthStore } from '@/stores/auth';

  const showedConsult = ref(false);
  const flatCard = useFlatCard();
  const router = useRouter();
  const bookGoal = useGoal('book_city');
  const authStore = useAuthStore();

  const data = computed(() => flatCard.data?.data);

  const roomsCount = computed(() => {
    if(!data.value) return '';
    return getRoomsCount(data.value.room_factor)
  });

  const title = computed(() => {
    if(!data.value) return '';
    return `${roomsCount.value}-комнатная, ${data.value.area_total} м²`
  });

  const subtitle = computed(() => {
    return `${data.value?.complex.name}, ${data.value?.complex.location}`;
  });

  const finishingType = computed(() => {
    return data.value?.complex.finishing_type.title;
  });

  function toB2C() {
    router.push({
      path: '/lk/b2c/apps/book',
      query: { id: flatCard.flatId, type: 'flat' }
    });
  }

  function toB2T() {
    router.push({
      path: '/lk/b2t/favorites',
    });
  }

  function toB2Y() {
    router.push({
      path: '/lk/b2y',
    });
  }

  function toAuth() {
    authStore.openPopup = true;
  }

  function book() {
    const type = authStore.userType;
    switch(type) {
      case 'b2c': toB2C(); break;
      case 'b2t': toB2T(); break;
      case 'b2y': toB2Y(); break;
      default: toAuth();
    }
    bookGoal.execute();
  }
</script>

<style scoped lang="scss">
  .flat-info {
    padding: 0 40px;

    @include lg {
      padding: 0 24px;
    }

    @include sm {
      padding: 0px;
    }

    &__action {
      width: 100%;

      & + & {
        margin-top: 16px;
      }
    }

    &__badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }

    &__name {
      margin-bottom: 24px;

      h1 {
        font-size: 32px;
        line-height: 1.25;
        @apply tw-text-text00;

        @include lg {
          @apply tw-text-2xl;
        }
      }
    }

    &__subtitle {
      margin-top: 8px;
      @apply tw-text-text01 tw-text-base;
    }

    &__actions {
      margin-top: 32px;

      @include sm {
        margin-top: 24px;
      }
    }

    &__price-perm2 {
      @apply tw-text-text02 tw-text-base;
    }

    &__price-block {
      margin-top: 32px;
    }

    &__price {
      font-size: 32px;
      line-height: 1.25;

      @include lg {
        @apply tw-text-2xl;
      }
    }

    &__credit {
      margin-top: 8px;
      @apply tw-text-text02 tw-text-base;
    }

    &__promo-badges {
      margin-bottom: 16px;
    }

    &__promo-badge {
      & + & {
        margin-top: 8px;
      }
    }
  }

  .params-block {
    &__one + &__one {
      margin-top: 16px;
    }

    &__one {
      display: flex;
      @apply tw-text-base;
    }

    &__key, &__value {
      width: 50%;
    }

    &__key {
      @apply tw-text-text00;
    }

    &__value {
      text-align: right;
      @apply tw-text-text02;
    }
  }
</style>
