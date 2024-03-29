<template>
  <div v-if="data" class="town-info">
    <div class="town-info__promo-badges" v-if="data.badges.length > 0">
      <EstateBadgesPromo
        class="town-info__promo-badge"
        v-for="badge in data.badges"
        :key="badge.id"
        :badge="badge"
      />
    </div>
    <div class="town-info__badges">
      <div class="town-info__badge">{{ statusLabel[data.status] }}</div>
    </div>
    <div class="town-info__name">
      <h1>{{ title }}</h1>
      <p class="town-info__subtitle">{{ subtitle }}</p>
    </div>
    <div class="params-block">
      <div class="params-block__one">
        <p class="params-block__key">Тип</p>
        <p class="params-block__value">
          {{ isEmptyPlace ? 'Участок' : data.layout.type.title }}
        </p>
      </div>
      <div v-if="!isEmptyPlace" class="params-block__one">
        <p class="params-block__key">Площадь дома</p>
        <p class="params-block__value">{{ data.layout.area_cottage }} м²</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Площадь участка</p>
        <p class="params-block__value">{{ area }} сот.</p>
      </div>
      <div v-if="!isEmptyPlace" class="params-block__one">
        <p class="params-block__key">Этажность</p>
        <p class="params-block__value">{{ data.layout.number_of_floors }}</p>
      </div>
    </div>

    <div class="town-info__actions">
      <BaseButton class="town-info__action" @click="book">
        Забронировать
      </BaseButton>
      <BaseButton class="town-info__action" theme="gray" @click="showedConsult = true">
        Получить консультацию
      </BaseButton>
    </div>
    <ConsultForm v-model:showed="showedConsult" goal="order_cottage_taun" />
  </div>
</template>

<script setup lang="ts">
  import { useTownCard } from '../store';
  import ConsultForm from '@/other-modules/consult-form/index.vue';
  import { useGoal } from '@/composables/useGoal';
  import { useAuthStore } from '@/stores/auth';

  const statusLabel: Record<string, string> = {
    'for_sale': 'Свободен',
    'sold': 'Продан',
    'booked': 'Забронирован',
  };

  const showedConsult = ref(false);
  const townCard = useTownCard();
  const router = useRouter();
  const authStore = useAuthStore();
  const bookGoal = useGoal('book_cottage_taun');

  const data = computed(() => townCard.data?.data);
  const title = computed(() => {
    return `${data.value?.layout.name} №${data.value?.number}`;
  });

  const subtitle = computed(() => {
    return `${data.value?.town.name}, ${data.value?.town.location}`;
  });

  const area = computed(() => {
    if(!data.value) return '';
    return (+data.value.area_land / 100).toFixed(1);
  });

  const finishingType = computed(() => {
    return data.value?.town.finishing_type.title;
  });

  const isEmptyPlace = computed(() => townCard.isEmptyPlace);

  function toB2C() {
    router.push({
      path: '/lk/b2c/apps/book',
      query: { id: townCard.townId, type: 'town' }
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
  .town-info {
    padding: 0 40px;

    @include lg {
      padding: 0 24px;
    }

    @include sm {
      padding: 0px;
    }

    &__badge {
      padding: 8px 12px;
      border-radius: 8px;
      @apply tw-bg-base00 tw-text-base tw-text-text00;
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

      @include sm {
        margin-bottom: 24px;
      }
    }

    &__name {
      margin-bottom: 24px;

      @include sm {
        margin-bottom: 16px;
      }

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
