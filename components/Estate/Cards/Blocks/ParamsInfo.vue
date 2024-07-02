<template>
  <div class="estate-card-bottom">
    <div v-if="complexName" class="estate-card-bottom__house">
      {{ complexName }}
    </div>
    <template v-if="0">
      <div v-if="price" class="estate-card-bottom__price-block">
        <EstatePromoPrice class="estate-card-bottom__promo-price" v-if="pricePromo && price" :value="price" />
        <span class="estate-card-bottom__price">{{ $amount(pricePromo ?? price) }}</span>
      </div>
    </template>
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
    pricePromo?: string | number | null,
    creditMonth?: number,
    creditStart?: number,
    hideBadges?: boolean,
    finishingType?: string
  }

  withDefaults(defineProps<Props>(), { hideBadges: false });
</script>

<style scoped lang="scss">
  .estate-card-bottom {
    padding-top: 24px;

    &__price-block {
      padding-top: 16px;
    }

    &__promo-price {
      margin-bottom: 2px;
      @apply tw-text-base tw-block;
    }

    &__price {
      @apply tw-text-text00 tw-text-2xl tw-block;
    }

    &__house {
      @apply tw-text-base tw-text-text00;
    }

    &__badges {
      @apply tw-mt-2;
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
