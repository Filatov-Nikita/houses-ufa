declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $getRoomsCount: (roomStr: RoomTypes) => number;
  }
}

const roomsCount = {
  'studio': 1 as const,
  'one_classic': 1 as const,
  'two_smart': 2 as const,
  'two_classic': 2 as const,
  'three_smart': 3 as const,
  'three_classic': 3 as const,
};

type RoomTypes = keyof typeof roomsCount;

export function getRoomsCount(roomStr: RoomTypes): number {
  return roomsCount[roomStr];
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$getRoomsCount = getRoomsCount;
});
