<template>
  <div 
    class="rounded-input flex items-center"
    :class="{ 'ring-1 ring-primary': isFocused }"
    @focusin="isFocused = true"
    @focusout="isFocused = false"
  >
    <slot name="left-icon" />
    <input 
      :value="modelValue" 
      :placeholder="placeholder" 
      :disabled="disabled" 
      @input="handleChange"
      class="flex flex-1 outline-none"
    />
    <button
      v-if="showClear && modelValue"
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
}

const {
    modelValue,
    placeholder,
    showClear
} = defineProps<InputProps>();
const emit = defineEmits(['update:modelValue', 'clear']);

const isFocused = ref(false);

const handleChange = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
};

const clearInput = () => {
  emit('update:modelValue', '');
  emit('clear');
};
</script>
