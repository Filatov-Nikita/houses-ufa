<template>
  <BaseModal v-model="showed" v-slot="{ hide }">
    <BaseModalCard>
      <div class="check-client-header">
        <div class="check-client-header__text">
          <p class="check-client-header__title">Проверить клиента</p>
          <p class="check-client-header__subtitle">
            Введите номер телефона потенциального<br>клиента для проверки его в базе
          </p>
        </div>
        <BtnsActionsBase class="check-client-header__hide" icon="close" @click="hide" />
      </div>
      <div>
        <template v-if="type === 'estate'">
          <BaseSkeleton v-if="loadingTown" class="tw-h-[100px] tw-rounded-2xl tw-w-full" />
          <TownItem
            v-else-if="townResponse && townResponse.data.length > 0"
            :town="townResponse.data[0]"
          />
        </template>
        <template v-else-if="type === 'flat'">
          <BaseSkeleton v-if="loadingFlat" class="tw-h-[100px] tw-rounded-2xl tw-w-full" />
          <FlatItem
            v-else-if="type === 'flat' && flatResponse && flatResponse.data.length > 0"
            :flat="flatResponse.data[0]"
          />
        </template>
        <Form class="check-client-form" v-slot="{ isSubmitting }" @submit="onSubmit">
          <div class="check-client-form__client-data">
            <div class="check-client-form__client-one">
              <p class="check-client-form__title">Клиент 1</p>
              <div class="check-client-form__inputs">
                <BaseInput
                  class="check-client-form__input"
                  rules="required"
                  label="Телефон"
                  name="backup_phone"
                  maska="+7 (###) ### ## ##"
                  placeholder="+7 (999) 999 99-99"
                  v-model="store.form.backup_phone"
                />
                <BaseInput
                  class="check-client-form__input"
                  rules="required"
                  label="ФИО"
                  name="backup_full_name"
                  placeholder="Иванов Иван Иванович"
                  v-model="store.form.backup_full_name"
                />
              </div>
            </div>
            <div class="check-client-form__client-one">
              <p class="check-client-form__title">Клиент 2</p>
              <div class="check-client-form__inputs">
                <BaseInput
                  class="check-client-form__input"
                  rules="required"
                  label="Телефон"
                  name="consumer_phone"
                  maska="+7 (###) ### ## ##"
                  placeholder="+7 (999) 999 99-99"
                  v-model="store.form.consumer_phone"
                />
                <BaseInput
                  class="check-client-form__input"
                  rules="required"
                  label="ФИО"
                  name="consumer_full_name"
                  placeholder="Иванов Иван Иванович"
                  v-model="store.form.consumer_full_name"
                />
              </div>
            </div>
          </div>
          <BaseSelect
            class="check-client-form__rel"
            rules="required"
            label="Связь между телефоном 1 и 2"
            name="relationship_type"
            v-bind="selectProps(relOptions)"
            :model-value="currentRel"
            @update:model-value="updateRel"
          />
          <p
            v-if="clientMsg.text"
            class="check-client-form__msg"
            :class="{
              'check-client-form__msg--error': clientMsg.type === 'error',
              'check-client-form__msg--success': clientMsg.type === 'success',
            }"
          >
            {{ clientMsg.text }}
          </p>
          <BaseButton v-if="clientMsg.type === 'success'" class="check-client-form__btn" to="/lk/b2t/clients">
            Перейти в клиенты
          </BaseButton>
          <BaseButton v-else class="check-client-form__btn" type="submit" :disabled="isSubmitting">
            Проверить клиента
          </BaseButton>
        </Form>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { SubmissionHandler, Form } from 'vee-validate';
  import { useSyncProps } from '@/composables/useSyncProp';
  import { useCheckClient } from './store';
  import type { Flat } from '@/types/estate/flat';
  import type { Town } from '@/types/estate/town';
  import FlatItem from './components/FlatItem.vue';
  import TownItem from './components/TownItem.vue';
  import { cleanPhone } from '@/helpers';
  import { FetchError } from 'ofetch';
  import { useNotifyStore } from '@/stores/notify';

  const props = defineProps<{
    showed: boolean,
    id: number,
    type: 'flat' | 'estate',
  }>();

  const store = useCheckClient();
  const notify = useNotifyStore();

  defineEmits<{ (event: 'update:showed', val: boolean): void }>();

  const showed = useSyncProps(props, 'showed');

  const relOptions = [
    { value: 'sibling', label: 'брат/сестра - брат/сестра' } as const,
    { value: 'child', label: 'отец/мать - сын/дочь' } as const,
    { value: 'daughter-in-law', label: 'свёрк/свекровь - сноха' } as const,
    { value: 'spouse', label: 'супруг/супруга - супруг/супруга' } as const,
    { value: 'nephew', label: 'дядя/тётя - племянник/племянница' } as const,
    { value: 'son-in-law', label: 'тесть/тёща - зять' } as const,
    { value: 'grandchild', label: 'дедушка/бабушка - внук/внучка' } as const,
  ];

  const currentRel = computed(() => {
    if(!store.form.relationship_type) return null;
    return relOptions.filter(rel => store.form.relationship_type === rel.value)[0] ?? null;
  });

  function updateRel(value: typeof relOptions[number]) {
    store.form.relationship_type = value.value;
  }

  function selectProps<T extends { label: string, value: string }>(options: T[]) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt.label,
        isActive: (opt: T, v: T | null) => opt.value === v?.value,
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v?.label || 'не выбрано',
      }
    };
  }

  const body = computed(() => {
    return { ids: [ props.id ] };
  })

  const { data: flatResponse, pending: loadingFlat, execute: showFlats } = useDataFetch<{ data: Flat[] }>(
    'favorites/flats/resolve-ids',
    { method: 'POST', body, immediate: false, watch: false }
  );

  const { data: townResponse, pending: loadingTown, execute: showTowns } = useDataFetch<{ data: Town[] }>(
    'favorites/estates/resolve-ids',
    { method: 'POST', body, immediate: false, watch: false }
  );

  const clientMsg = ref({
    text: '',
    type: 'error' as 'error' | 'success'
  });

  const onSubmit: SubmissionHandler = async function(_, ctx) {
    try {
      clientMsg.value = { text: '', type: 'error' };
      const res = await store.createClient({
        ...store.form,
        backup_phone: cleanPhone(store.form.backup_phone),
        consumer_phone: cleanPhone(store.form.consumer_phone),
        object_id: props.id,
        object_type: props.type,
      });

      if(res.status === 200) {
        clientMsg.value = {
          text: `Номер ${store.form.consumer_phone} к вам уже привзян`,
          type: 'success',
        }
      } else if(res.status === 201) {
        clientMsg.value = {
          text: `Номер ${store.form.consumer_phone} успешно привязан`,
          type: 'success',
        }
      }
    } catch(e) {
      if(e instanceof FetchError) {
        if(e.status === 422 && e.data.errors) {
          ctx.setErrors(e.data.errors);
        } else if(e.status === 409) {
          clientMsg.value = {
            text: `На номер ${store.form.consumer_phone} зарегистрировано агентство или агент`,
            type: 'error',
          }
        } else if(e.status === 423) {
          clientMsg.value = {
            text: `Клиент с номером ${store.form.consumer_phone} занят другим агентом`,
            type: 'error'
          }
        } else {
          notify.create({ type: 'error', message: 'Произошла ошибка на сервере' });
        }
      }
    }
  }

  watch([
    () => props.id,
    () => props.type,
  ], () => {
    if(props.type === 'estate') showTowns();
    else showFlats();
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .check-client-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 32px;

    @include sm {
      margin-bottom: 24px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 8px;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__hide {
      flex-shrink: 0;
    }

    &__subtitle {
      @apply tw-text-text02 tw-text-base;
    }
  }

  .check-client-form {
    margin-top: 32px;

    &__title {
      margin-bottom: 16px;
      @apply tw-text-text00 tw-text-lg;
    }

    &__client-data {
      border-radius: 8px;
      @apply tw-border tw-border-solid tw-border-base01;
    }

    &__client-one {
      padding: 16px;

      & + & {
        @apply tw-border-t tw-border-solid tw-border-base01;
      }
    }

    &__btn {
      margin-top: 32px;
      width: 100%;
    }

    &__rel {
      margin-top: 20px;
    }

    &__inputs {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__input {
      margin: 10px;
      width: calc(50% - 20px);
    }

    &__msg {
      margin-top: 8px;
      @apply tw-text-xs;

      &--error {
        @apply tw-text-error;
      }

      &--success {
        @apply tw-text-primary;
      }
    }
  }
</style>
