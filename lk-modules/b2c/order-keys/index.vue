<template>
  <BaseModal v-model="model" v-slot="{ hide }">
    <BaseModalCard>
      <div class="modal-header tw-mb-4">
        <p class="modal-header__title">Заявка на получение ключей</p>
        <BtnsActionsBase class="modal-header__hide" icon="close" @click="hide" />
      </div>
      <DocumentsAlert class="tw-mb-6" />
      <Form class="keys-form" v-slot="{ isSubmitting }" @submit="onSubmit">
        <div class="keys-form__inputs">
          <BaseInput label="Имя" name="name" placeholder="Имя" rules="required" v-model="form.visitor_name" />
          <BaseInput label="Телефон" placeholder="Телефон" name="phone" maska="+7 (9##) ### ## ##" rules="required" v-model="form.visitor_phone" />
        </div>
        <OrderDayList
          class="keys-form__day-list"
          :order-days="slotStore.orderDays"
          :loading="slotStore.loading"
          v-model="day"
        />
        <OrderTimeSlots v-if="day && !slotStore.loading" :slots="timeSlots" v-model="slot"  />
        <BaseButton class="keys-form__btn" type="submit" :disabled="!canSend(isSubmitting)">
          Отправить
        </BaseButton>
      </Form>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import useOrder, { SlotResponse } from './composables/useOrder';
  import { useTimeSlotsStore } from './store/timeSlots';
  import OrderDayList from './components/OrderDayList.vue';
  import OrderTimeSlots from './components/OrderTimeSlots.vue';
  import DocumentsAlert from './components/DocumentsAlert.vue';

  const props = defineProps<{
    flatId: number,
  }>();

  const emit = defineEmits<{
    (event: 'success', slot: SlotResponse): void,
  }>();

  const slotStore = useTimeSlotsStore();

  const model = defineModel<boolean>({ default: false });

  const { form, timeSlots, slot, day, send } = useOrder();

  async function onSubmit() {
    await send(props.flatId, (data) => {
      emit('success', data);
    });
  }

  function canSend(isSubmitting: boolean) {
    return !isSubmitting
            && day.value
            && slot.value
            && form.visitor_name
            && form.visitor_phone
  }

  watch(model, (val) => {
    if(val && slotStore.orderDays === null && !slotStore.loading) {
      slotStore.showOrderDays();
    }
  });

  watch(day, () => {
    slot.value = null;
  });
</script>

<style scoped lang="scss">
  .keys-form {
    &__inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    &__comment {
      grid-column: 1 / 3;
    }

    &__day-list {
      margin-bottom: 20px;
    }

    &__btn {
      margin-top: 32px;
      width: 100%;
    }
  }
</style>
