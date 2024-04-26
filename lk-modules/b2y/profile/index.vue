<template>
  <div class="page-card profile-card">
    <div class="profile-card__head">
      <h1 class="profile-card__title">Профиль</h1>
      <button class="edit-btn" @click="editMode = !editMode">
        <BaseIcon class="edit-btn__icon" name="edit" />
        <span>Редактировать</span>
      </button>
    </div>
    <EditProfile
      v-if="editMode && data"
      :inital-form="initialForm"
      :loading="editing"
      @cancel="editMode = false"
      @submit="editProfile($event, onSuccessEdit)"
    />
    <div class="profile-card__wrap" v-else>
      <div class="profile-card__left">
        <Data v-if="data" :name="data.legal_name" :items="profileItems" />
      </div>
      <div class="profile-card__right">
        <slot name="rank"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Data from './components/Data.vue';
  import EditProfile from './components/EditProfile.vue';
  import { useProfile } from './composables/useProfile';
  import { useEditProfile } from './composables/useEditProfile';

  const { profile, showProfile } = useProfile();

  const editMode = ref(false);

  await showProfile();

  const { editProfile, editing } = useEditProfile();

  const data = computed(() => {
    return profile.value?.data;
  });

  const profileItems = computed(() => {
    if(!data.value) return [];
    return [
      { label: 'E-mail', value: data.value.email || '-' },
      { label: 'Телефон', value: data.value.cellphone },
    ]
  });

  async function onSuccessEdit() {
    await showProfile();
    editMode.value = false;
  }


  const initialForm = computed(() => {
    return {
      legal_name: data.value?.legal_name ?? '', email: data.value?.email ?? '',
    }
  });
</script>

<style scoped lang="scss">
  .profile-card {
    &__head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 30px;
      justify-content: space-between;
      margin-bottom: 32px;
    }

    &__title {
      line-height: 1.3;
      font-size: 32px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
    }
  }
</style>
