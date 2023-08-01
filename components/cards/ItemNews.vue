<template>
  <NuxtLink class="card" to="/">
    <div>
      <div class="date tw-mb-4">12.05.23</div>
      <h4 class="tw-text-h6 lg:tw-text-h5">
        Как военным купить квартиру за счёт государства
      </h4>
    </div>
    <div class="tw-flex tw-justify-between">
      <p class="tw-text-text02 link">Подробнее</p>
      <button
        class="heart-btn tw-w-12 tw-h-12 tw-bg-white tw-rounded-lg tw-p-3 tw-grid tw-place-content-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="heart"
        >
          <path
            d="M22.5 9.18607C22.5016 9.90031 22.3616 10.6078 22.088 11.2675C21.8144 11.9273 21.4128 12.5263 20.9062 13.0298L12.5344 21.5254C12.4646 21.5963 12.3814 21.6526 12.2897 21.691C12.1979 21.7294 12.0994 21.7492 12 21.7492C11.9005 21.7492 11.8021 21.7294 11.7103 21.691C11.6186 21.6526 11.5354 21.5963 11.4656 21.5254L3.09374 13.0298C2.07307 12.0104 1.49917 10.6273 1.49829 9.1847C1.49741 7.74214 2.06963 6.35831 3.08905 5.33764C4.10848 4.31697 5.49161 3.74307 6.93418 3.74219C8.37674 3.74131 9.76057 4.31352 10.7812 5.33295L12 6.47201L13.2272 5.3292C13.9888 4.57131 14.958 4.05608 16.0122 3.84854C17.0665 3.641 18.1586 3.75047 19.1507 4.16311C20.1428 4.57576 20.9904 5.27309 21.5865 6.16706C22.1826 7.06104 22.5005 8.11158 22.5 9.18607Z"
            stroke="#8F8F8F"
            stroke-width="1"
          />
        </svg>
      </button>
    </div>
  </NuxtLink>
</template>
<script lang="ts"></script>
<style lang="scss" scoped>
.card {
  @apply tw-rounded-3xl tw-py-12 tw-px-10 tw-bg-white tw-grid tw-gap-16;
  .date {
    @apply tw-text-text02;
  }
  @media (hover: hover) {
    &:hover {
      @apply tw-bg-secondary-hover;
      .link {
        @apply tw-text-primary;
      }
    }
    .heart-btn:hover {
      @apply tw-bg-secondary;
      & > svg > path {
        @apply tw-fill-primary tw-stroke-none;
      }
    }
  }
}
</style>
