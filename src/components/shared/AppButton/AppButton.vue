<template>
  <button
    :disabled="disabled"
    @click="handleClick"
    :type="type"
    class="rounded-button"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { 
    defineProps, 
} from 'vue';

interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  borderRadius?: number;
}

const {
    disabled,
    type = 'button',
} = defineProps<ButtonProps>();

const handleClick = (e: MouseEvent) => {
    console.log("🚀 ~ handleClick ~ e.target:", e.target)
}
</script>

<style scoped>

</style>
