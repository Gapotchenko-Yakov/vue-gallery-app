<template>
  <button
    :disabled="disabled"
    @click="handleClick"
    :type="type"
    class="rounded-button cursor-pointer"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { 
    defineProps, 
} from 'vue';

interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  borderRadius?: number;
}

const {
    disabled,
    type,
} = withDefaults(defineProps<ButtonProps>(),{
  type: 'button',
  borderRadius: 0
});

const emit = defineEmits(['click'])

const handleClick = (e: MouseEvent) => {
  emit('click', e);
}
</script>

<style scoped>

</style>
