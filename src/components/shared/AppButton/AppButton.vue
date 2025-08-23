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
    type ButtonHTMLAttributes 
} from 'vue';

interface ButtonProps extends ButtonHTMLAttributes {
  text: string;                
  variant: 'primary' | 'secondary';
  disabled?: boolean; 
}

const {
    text,
    disabled,
} = defineProps<ButtonProps>();

const handleClick = (e: MouseEvent) => {
    console.log("🚀 ~ handleClick ~ e.target:", e.target)
}
</script>

<style scoped>

</style>
