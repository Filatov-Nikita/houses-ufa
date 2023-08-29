<template>
  <main class="main tw-p-4 tw-pb-20">
    <div class="tw-flex tw-flex-wrap -tw-m-4">
      <div class="tw-w-1/3 lg:tw-w-1/6 md:tw-w-1/4 tw-p-4 tw-text-center tw-text-primary" v-for="icon in icons">
        <BaseIcon class="tw-w-10 tw-h-10 tw-mx-auto" :name="icon" color="#fff" />
        <div class="tw-mt-2 tw-text-xs">{{ icon }}</div>
        <button
          class="tw-text-error tw-bg-white tw-rounded tw-p-1 tw-text-xs tw-mt-2"
          @click="copy(icon)"
        >
          copy
        </button>
      </div>
    </div>
    <div v-show="success" class="alert tw-bg-primary tw-rounded tw-text-white tw-fixed tw-inset-x-0 tw-bottom-0 tw-p-2">
      Скопировано успешно
    </div>
  </main>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false
  });

  const icons = ref<string[]>([]);
  const success = ref(false);
  let timeout: any;

  onMounted(() => {
    const sprite = document.querySelector('#__svg__icons__dom__');
    if(!sprite) {
      alert('спрайт не найден в документе');
      return;
    }

    icons.value = Array.from(sprite.children).map(
      child => child.id.replace('icon-', '')
    );
  });

  function copy(icon: string) {
    navigator.clipboard.writeText(icon);
    success.value = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      success.value = false;
    }, 2000);
  }
</script>

<style>
  .main {
    width: 100%;
    min-height: 100vh;
    background: #000;
  }
</style>
