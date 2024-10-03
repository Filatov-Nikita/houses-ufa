<template>
  <Map
    v-if="objectData"
    :locations="[]"
    :objectData="objectData"
    id="transport-map"
  />
</template>

<script setup lang="ts">
import Map from '@/components/Estate/Location/Map.vue'

const objectData = {
  name: '«Созвездие Цефей»',
  latitude: '54.638987',
  longitude: '56.202278',
  sight_picture: {
    id: 573,
    height: 233,
    size_in_bytes: 107674,
    url: 'https://adminsite.gkufa.ru/storage/media/573/ZxAPEM7J8IkeW8ahTOiv6wmhKSTmhp5ZAIKs4Pya.png',
    width: 231,
  },
}
</script>
