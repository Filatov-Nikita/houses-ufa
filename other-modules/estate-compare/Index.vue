<template>
  <div
    class="tw-bg-white tw-rounded-2xl tw-pt-5 tw-px-4 tw-pb-4 xl:tw-pt-7 xl:tw-pb-6"
    ref="compareParent"
  >
    <div class="compare lg:tw-mx-[80px]">
      <BaseToggle class="tw-mb-6" name="isDuplicateOpt" label="Убрать одинаковые параметры" v-model="isDuplicateOpt" />
      <div class="compare__head lg:tw-mb-6" v-if="compareParent">
        <template v-if="store.favType === 'flats'">
          <HeadListMobileFlat
            v-if="widthWindow < 1024"
            :values="data"
            :parent-el="compareParent"
            @update-general-value="getGeneralValue"
          />
          <HeadListFlat
            v-else
            :values="data"
            :parent-el="compareParent"
            @update-general-value="getGeneralValue"
          />
        </template>
        <template v-else-if="store.favType === 'towns'">
          <HeadListMobileTown
            v-if="widthWindow < 1024"
            :values="data"
            :parent-el="compareParent"
            @update-general-value="getGeneralValue"
          />
          <HeadListTown
            v-else
            :values="data"
            :parent-el="compareParent"
            @update-general-value="getGeneralValue"
          />
        </template>
      </div>
      <BodyFlat v-if="store.favType === 'flats'" :general-values-keys="generalValuesKeys" />
      <BodyTown v-if="store.favType === 'towns'" :general-values-keys="generalValuesKeys" />
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
import HeadListFlat from './HeadListFlat.vue';
import HeadListTown from './HeadListTown.vue';
import HeadListMobileFlat from './HeadListMobileFlat.vue';
import HeadListMobileTown from './HeadListMobileTown.vue';
import BodyFlat from './BodyFlat.vue';
import BodyTown from './BodyTown.vue';
import { useFavList } from '@/other-modules/favorite-list/store';
import {
  decriptionHeadApartment,
  apartmentGeneralDescriptionT,
  cottageGeneralDescriptionT,
} from './models'

const store = useFavList();
const compareParent = ref<HTMLElement>()
const isDuplicateOpt = ref(false)

const data = computed(() => {
  switch(store.favType) {
    case 'flats': return store.flats.map(item => toFlattentKey(item));
    case 'towns': return store.towns.map(item => toFlattentKey(item));
  }
});

function toFlattentKey(obj, parentKey = '', newObj = {}) {
  for(let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      toFlattentKey(obj[key], newKey, newObj);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}

const widthWindow = ref(0)
const visibleValues = ref<decriptionHeadApartment[]>([])
const updateWindow = () => {
  visibleValues.value = data.value.slice(0, 4)
  widthWindow.value = window.innerWidth
}
const generalValues = ref<
  Array<apartmentGeneralDescriptionT | cottageGeneralDescriptionT>
>([])
const getGeneralValue = (generalIdList: number[]) => {
  if(!data.value) return;
  generalValues.value = generalIdList.map(id => {
    return data.value.find(val => val.id === id);
  }).filter(Boolean);
}

const generalValuesKeys = computed(() => {
  let obj = {}
  generalValues.value.forEach((item) => {
    for (let key in item) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = [item[key]]
      } else {
        obj[key] = [...obj[key], item[key]]
      }
    }
  })
  if (isDuplicateOpt.value) {
    for (let key in obj) {
      const currentValue = obj[key][0]
      let dublicate = false
      let count = 0
      obj[key].every((item, index) => {
        if (item === currentValue) {
          count++
          return true
        }
        return false
      })
      if (count === obj[key].length) delete obj[key]
    }
  }

  return obj
})

onMounted(() => {
  updateWindow()
  window.addEventListener('resize', updateWindow)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateWindow)
})
</script>
