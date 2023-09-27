<template>
  <!--start-->
  <BaseModal v-model="open" v-slot="{ hide }">
    <div
      class="tw-p-4 tw-pb-0 lg:tw-p-6 xl:tw-p-10 tw-rounded-2xl tw-bg-white tw-flex tw-flex-col tw-gap-4 lg:tw-gap-6 tw-h-full lg:tw-h-fit"
    >
      <div
        class="tw-flex tw-flex-col lg:tw-grid tw-gap-6 lg:tw-gap-12 xl:tw-gap-16 lg:tw-grid-cols-[537px_minmax(0,_371px)] xl:tw-grid-cols-[745px_minmax(371px,_515px)] lg:tw-h-[537px] xl:tw-h-[745px] tw-h-full tw-overflow-y-hidden"
      >
        <div class="tw-relative tw-overflow-hidden tw-shrink-0">
          <BaseTabsGroup
            v-model="tab"
            class="!tw-bg-base00 lg:!tw-bg-white tw-w-full lg:tw-w-auto !tw-grid !tw-grid-cols-2 tw-mb-2 lg:!tw-inline-flex lg:tw-absolute tw-top-4 lg:tw-left-1/2 lg:-tw-translate-x-1/2 lg:tw-z-10"
          >
            <BaseTabsGroupItem
              v-for="item in tabs"
              :name="item.name"
              theme="white"
            >
              {{ item.title }}
            </BaseTabsGroupItem>
          </BaseTabsGroup>

          <template v-if="tab === 'render'">
            <Swiper
              :modules="[SwiperPagination, SwiperNavigation]"
              :pagination="{
                type: 'bullets',
                el: '.swiper-pagination',
                dynamicBullets: true,
              }"
              class="tw-h-[311px] lg:tw-h-full"
            >
              <SwiperSlide v-for="n in 5">
                <div
                  class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-[311px] lg:tw-h-full"
                >
                  <img
                    format="avif,webp"
                    src="/images/img/country_real_estate.png"
                    class="tw-object-cover tw-absolute tw-h-full tw-w-full"
                  />
                </div>
              </SwiperSlide>

              <div class="swiper-pagination !tw-left-auto !-tw-right-4"></div>
            </Swiper>
          </template>
          <template v-if="tab === 'layout'">
            <div
              class="tw-hidden lg:tw-inline-flex tw-gap-5 tw-absolute tw-bottom-4 xl:tw-bottom-5 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-z-10"
            >
              <div v-for="(n, index) in 3" class="tw-grid tw-gap-2">
                <button
                  class="tw-bg-white tw-border tw-rounded-lg tw-overflow-hidden tw-w-[72px] tw-h-14 xl:tw-h-16 xl:tw-w-20"
                  :class="[
                    activeIndex === index
                      ? 'tw-border-primary'
                      : ' tw-border-white',
                  ]"
                  @click="slideTo(index)"
                >
                  <img
                    src="/images/img/plan-apartment.png"
                    alt=""
                  />
                </button>
                <span class="tw-text-center tw-text-body_s">
                  Этаж {{ index + 1 }}</span
                >
              </div>
            </div>
            <Swiper
              :modules="[SwiperPagination, SwiperNavigation]"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="tw-h-[31px] lg:tw-h-full"
            >
              <SwiperSlide v-for="n in 5">
                <div
                  class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-[311px] lg:tw-h-full"
                >
                  <img
                    format="avif,webp"
                    src="/images/img/plan-apartment.png"
                    class="tw-object-contain tw-absolute tw-h-full tw-w-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </template>
        </div>

        <div
          class="xl:tw-self-center tw-h-full tw-overflow-y-hidden tw-grid lg:tw-pr-6"
        >
          <div class="tw-mb-6 tw-flex tw-justify-between tw-items-center">
            <h2 class="tw-text-h5 lg:tw-text-h4">Вашингтон</h2>

            <div class="tw-hidden lg:tw-block">
              <BaseButton
                type="button"
                @click="() => hide()"
                theme="gray"
                padding-classes=" tw-p-3"
                class=""
              >
                <BaseIcon name="close" class="tw-w-6 tw-h-6" />
              </BaseButton>
            </div>
          </div>
          <div class="tw-overflow-auto tw-h-full tw-pr-3">
            <div
              class="tw-px-2 tw-py-1 tw-w-fit tw-items-center tw-rounded-lg tw-bg-base00 tw-flex tw-gap-2.5 tw-mb-6 xl:tw-mb-8"
            >
              <BaseIcon
                name="paint_brush_board"
                class="tw-text-primary tw-w-4 tw-h-4"
              />
              <span> Предчистовая отделка </span>
            </div>
            <div class="tw-grid tw-gap-4 tw-mb-6 lg:tw-mb-8">
              <div
                v-for="(item, index) in floorConf"
                :key="index"
                class="tw-grid tw-grid-cols-2"
              >
                <span> {{ item }} </span>
                <span class="tw-place-self-end tw-text-text02"> 3 </span>
              </div>
            </div>
            <h2 class="tw-text-h5 lg:tw-text-h4 tw-mb-6">Описание</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur harum incidunt officia ut est libero, voluptatem quam
              dignissimos maiores ipsa. Consectetur itaque, perspiciatis
              obcaecati ipsum inventore animi magnam consequatur laborum vero
              dicta commodi quaerat repudiandae at esse odit quod similique
              eaque! Veritatis quae delectus, doloremque omnis sint voluptatum
              eaque, esse minima nihil exercitationem totam molestias?
              Cupiditate culpa doloribus, molestiae ipsam, exercitationem
              veritatis repudiandae eos adipisci debitis veniam totam. Nam
              sapiente fugiat nemo ad aspernatur laboriosam consectetur eos hic
              odio qui ratione, soluta maxime velit necessitatibus eum dolorem
              at illo quasi ea, dolor, voluptate laborum nostrum? Omnis ad amet
              ea beatae vero, corrupti laborum autem quas magnam distinctio eius
              a fugit dignissimos sed maxime labore doloribus quasi. Sint ipsum
              aut ducimus deleniti eaque aliquid assumenda minima dicta nihil?
              Eum aspernatur labore unde error ullam asperiores dolor molestias
              doloremque molestiae? Officiis perspiciatis aliquam hic assumenda,
              molestiae sed culpa officia quibusdam voluptatum perferendis
              eligendi maxime quam cumque. Explicabo doloremque nulla sint iusto
              tempore! Voluptatibus dolores praesentium laudantium accusamus
              assumenda corrupti, soluta consectetur, magnam, labore nulla neque
              officiis recusandae omnis laboriosam nobis fuga alias voluptas
              aperiam possimus. Officiis dolorum nihil corrupti animi
              repellendus enim atque adipisci vero eaque, voluptatibus eligendi
              possimus distinctio totam nemo recusandae impedit consequuntur
              iusto tempora iste tenetur provident assumenda. Itaque, ut,
              explicabo soluta similique consequatur eveniet dolorum repellendus
              ex voluptatum a voluptatibus atque officia, assumenda praesentium
              laudantium saepe! Nemo, libero!
            </div>
            <div ref="scrollArea" class="lg:tw-hidden">
              <BaseButton
                type="button"
                @click="() => hide()"
                theme="gray"
                class="tw-w-full tw-mt-4"
                :class="{ 'select-btn__fixed': isFixed }"
              >
                Закрыть
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
  <!--end-->
</template>
<script lang="ts" setup>
import type { Swiper } from 'swiper'
const { scrollArea, isFixed } = useTargetIntersectionObserver()
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', val: boolean): void
}>()

const open = ref(false)

const tab = ref('')
const tabs = [
  {
    name: 'render',
    title: 'Рендер',
  },
  {
    name: 'layout',
    title: 'Планировка',
  },
]
onMounted(() => {
  tab.value = tabs[0].name
})

const activeIndex = ref(0)
const swiper = ref<Swiper>()
const onSwiper = (s: Swiper) => {
  swiper.value = s

  activeIndex.value = s.activeIndex
}
const onSlideChange = (s: Swiper) => {
  activeIndex.value = s.activeIndex
}
const slideTo = (index: number) => {
  swiper.value?.slideTo(index)
}
const floorConf = [
  'Тип',
  'Материал',
  'Площадь дома',
  'Комнатность',
  'Этажность',
  'Балкон',
  'Санузел',
]
onMounted(() => {
  if (props.modelValue) open.value = props.modelValue
})
watch(
  () => props.modelValue,
  (v) => {
    open.value = v
  }
)
watch(open, (v) => {
  if (!v) emit('update:modelValue', false)
})
</script>
<style lang="scss" scoped>
.select-btn__fixed {
  @apply tw-fixed tw-bottom-12 tw-left-8 tw-right-8;
  width: calc(100% - 4rem);
}
</style>
