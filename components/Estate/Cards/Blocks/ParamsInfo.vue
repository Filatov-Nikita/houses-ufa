<template>
  <div class="estate-card-bottom">
    <div v-if="complexName" class="estate-card-bottom__house">
      {{ complexName }}
    </div>
    <EstateBadgesPreFinishing />
    <div v-if="price" class="estate-card-bottom__price">
      {{ $amount(price) }}
    </div>
    <div v-if="creditMonth || creditStart" class="estate-card-bottom__credit">
      <p v-if="creditMonth" class="estate-card-bottom__credit-text">
        В ипотеку — <span class="tw-text-primary">от {{ $formatValue(creditMonth, '₽ / мес') }}</span>
      </p>
      <p v-if="creditStart" class="estate-card-bottom__credit-text">
        Первоначальный взнос — <span class="tw-text-primary">от {{ $amount(creditStart) }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    complexName?: string,
    price?: number,
    creditMonth?: number,
    creditStart?: number,
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .estate-card-bottom {
    padding-top: 24px;

    &__price {
      padding-top: 16px;
      @apply tw-text-text00 tw-text-2xl;
    }

    &__house {
      @apply tw-text-base tw-text-text00 tw-mb-2;
    }

    &__credit {
      padding-top: 16px;

      & + & {
        margin-top: 4px;
      }

      @apply tw-text-text02 tw-text-sm;
    }
  }
</style>
