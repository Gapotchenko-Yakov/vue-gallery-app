<template>
    <div class="input-wrapper">
        <slot name="left-icon" />
        <input 
            :value="modelValue" 
            :placeholder="placeholder" 
            :disabled="disabled" 
            @input="handleChange"
        />
        <app-button
            v-if="showClear && modelValue"
            type="button"
            variant="clear"
        >
            ✕
        </app-button>
    </div>
</template>

<script setup lang="ts">
interface InputProps  {
  modelValue: string;
  placeholder?: string;
  disabled?: boolean;
  showClear?: boolean;
}

const {
    modelValue,
    placeholder
} = defineProps<InputProps>();

const handleChange = () => {
    console.log("🚀 ~ handleChange ~ handleChange:", handleChange)
}
</script>

<style scoped>
  
</style>