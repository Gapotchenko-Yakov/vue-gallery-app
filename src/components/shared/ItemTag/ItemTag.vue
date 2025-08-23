<template>
    <span>
    <span>
    {{ label }}
  </span>
  <button v-if="interactive">
    {{ checked ? '➕' : '✔' }}
  </button>
    </span>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

    interface ItemTagProps extends HTMLAttributes {
        label: string,
        variant?: '',
        checked: boolean,
        interactive: boolean,
    }

    const {
        label, checked, interactive
    } = defineProps<ItemTagProps>();
</script>

<style scoped>
  
</style>