<template>
  <div
    class="tw-px-4 tw-py-6 l:tw-p-6 d:tw-p-10 tw-rounded-2xl tw-grid tw-gap-6 tw-bg-white"
  >
    <div class="tw-flex tw-items-center tw-justify-between">
      <a class="back">
        <img src="/assets/images/icons/arrow_left.svg" width="24" height="24" />
        <span> Вернуться назад </span>
      </a>
      <div>
        <div class="tw-hidden l:tw-block">
          <div class="tw-flex tw-gap-3">
            <button class="btn">
              <img
                src="/assets/images/icons/share.svg"
                width="24"
                height="24"
              />
            </button>
            <button class="btn">
              <img
                src="/assets/images/icons/arrow_file.svg"
                width="24"
                height="24"
              />
            </button>
            <button class="btn">
              <img
                src="/assets/images/icons/heart.svg"
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
        <div class="l:tw-hidden">
          <button class="btn">
            <img
              src="/assets/images/icons/dots_three_vertical.svg"
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <div
          class="tw-rounded-2xl tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center l:tw-h-[540px] d:tw-h-[737px]"
        >
          <img
            format="avif,webp"
            src="/assets/images/img/Планировка квартиры.png"
            class="tw-object-contain"
          />
        </div>
      </div>

      <div class="l:tw-px-6 d:tw-px-10 l:tw-py-5.5">
        <h2 class="tw-text-h5 l:tw-text-h4 tw-mb-2">1-комнатная, 96 м²</h2>
        <p class="tw-text-text01 tw-mb-6">
          ЖК «Михайловка Green Place», с. Михайловка
        </p>
        <div
          class="tw-flex tw-justify-between tw-items-center tw-mb-6 l:tw-mb-8"
        >
          <div class="tw-p-2 tw-rounded-lg tw-bg-base00">
            Предчистовая отделка
          </div>
          <p class="tw-text-text02">235 695 ₽ / м2</p>
        </div>
        <div class="tw-grid tw-gap-4 tw-mb-6 l:tw-mb-8">
          <div
            v-for="(item, index) in floorConf"
            :key="index"
            class="tw-grid tw-grid-cols-2"
          >
            <span> {{ item }} </span>
            <span class="tw-place-self-end tw-text-text02"> 3 </span>
          </div>
        </div>
        <h2 class="tw-text-h5 l:tw-text-h4 tw-mb-2">12 165 265 ₽</h2>
        <p class="tw-mb-6 l:tw-mb-8">
          <span class="tw-text-text02">В ипотеку от </span>
          <span class="tw-text-primary">15 659 ₽ / мес</span>
        </p>
        <div class="tw-grid tw-gap-2 l:tw-gap-4">
          <button class="tw-h-14 tw-w-full tw-bg-primary tw-text-white">
            Забронировать
          </button>
          <button class="tw-h-14 tw-w-full tw-bg-secondary tw-text-white">
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const floorConf = [
  'Комнатность',
  'Этаж',
  'Квартира №',
  'Подъезд',
  'Литера',
  'Балкон / Лоджия',
  'Срок ввода',
]
</script>
<style scoped>
.btn {
  @apply tw-bg-secondary tw-grid tw-place-content-center tw-w-12 tw-h-12 tw-rounded-lg;
}
.back {
  @apply tw-flex tw-gap-4 tw-items-center tw-text-text00;
}
.content {
  @apply tw-grid tw-gap-6;
}
@screen l {
  .content {
    @apply tw-gap-5;
    grid-template-columns: minmax(537px, 62%) minmax(323px, 39%);
  }
}
@screen l {
  .content {
    @apply tw-gap-5;
    grid-template-columns: minmax(745px, 59%) minmax(435px, 41%);
  }
}
</style>
