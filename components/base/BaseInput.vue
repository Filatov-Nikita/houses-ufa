<template>
  <div class="base-input" :class="{ disabled }">
    <label :for="name" :class="labelClasses">{{ label }}</label>
    <input
      :id="name"
      :class="inputClasses"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      v-model="value"
    >
    <div v-if="caption" :class="captionClassess">{{ caption }}</div>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';

  interface Props {
    name: string,
    rules?: string,
    label: string,
    caption?: string,
    modelValue?: any,
    placeholder?: string,
    type?: string,
    disabled?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    disabled: false
  });

  const emit = defineEmits(['update:modelValue']);

  const { value, errorMessage } = useField(props.name, props.rules, {
    label: props.label,
    initialValue: props.modelValue,
  });

  const inputClasses = computed(() => {
    return [
      'input',
      'tw-block',
      'tw-w-full',
      'tw-bg-gray',
      'tw-rounded-lg',
      'tw-py-3',
      'tw-px-4',
      'tw-h-[56px]',
      'tw-text-base',
      'tw-border tw-border-solid',
      {
        'tw-text-gray-600': !errorMessage.value,
        'tw-text-negative': errorMessage.value,
      }
    ]
  });

  const caption = computed(() => {
    return errorMessage.value ?? props.caption;
  });

  const captionClassess = computed(() => {
    return [
      'tw-text-xs',
      'tw-absolute',
      'tw-leading-none',
      'tw-bottom-1',
      {
        'tw-text-negative': errorMessage.value,
        'tw-text-gray-600': !errorMessage.value,
      }
    ];
  });

  const labelClasses = [
    'tw-block',
    'tw-w-full',
    'tw-text-gray-600',
    'tw-text-sm',
    'tw-leading-none',
    'tw-mb-2',
  ]

  watch(() => props.modelValue, (newVal) => {
    if(newVal !== value.value) {
      value.value = newVal;
    }
  });

  watch(value, (newVal) => {
    emit('update:modelValue', newVal);
  });
</script>
<style scoped>
.base-input {
  position: relative;
  padding-bottom: 24px;
}

.disabled {
  opacity: 0.5;
}

.input {
  outline: none;
}

.input::placeholder {
  @apply tw-text-gray-600;
}
</style>
