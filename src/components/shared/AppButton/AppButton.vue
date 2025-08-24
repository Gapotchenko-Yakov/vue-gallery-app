<template>
  <button
    :disabled="disabled"
    @click="handleClick"
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { 
    defineProps, 
} from 'vue';

interface ButtonProps {
  text: string;                
  variant: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const {
    text,
    disabled,
    type = 'button',
} = defineProps<ButtonProps>();

const handleClick = (e: MouseEvent) => {
    console.log("🚀 ~ handleClick ~ e.target:", e.target)
}
</script>

<style scoped>

</style>
