<template>
  <div 
    class="rounded-input flex items-center"
    :class="{ 'ring-1 ring-primary': isFocused }"
    @focusin="onFocus"
    @focusout="onBlur"
  >
    <slot name="left-icon" />
    <input 
      :value="props.modelValue" 
      :placeholder="props.placeholder" 
      :disabled="props.disabled"
      @input="handleChange"
      class="flex flex-1 outline-none"
    />
    <button
      v-if="props.showClear && props.modelValue"
      type="button"
      @click="clearInput"
      class="cursor-pointer"
    >
      <app-icon name="cross" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface InputProps  {
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
  showClear?: boolean;
  maxLength?: number;
}

const props = defineProps<InputProps>();
const emit = defineEmits(['update:modelValue', 'clear', 'focus', 'blur']);

const isFocused = ref(false);

const handleChange = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};

const clearInput = () => {
  emit('update:modelValue', '');
  emit('clear');
};

const onFocus = () => {
  isFocused.value = true;
  emit('focus');
};

const onBlur = () => {
  isFocused.value = false;
  emit('blur');
};
</script>
