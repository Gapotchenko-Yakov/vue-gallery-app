<template>
    <span>
    <span>
    {{ text }}
  </span>
  <button v-if="interactive">
    {{ checked ? '➕' : '✔' }}
  </button>
    </span>
</template>

<script setup lang="ts">
    interface ItemTagProps {
        text: string,
        variant?: '',
        checked?: boolean,
        interactive?: boolean,
    }

    const {
        text, checked, interactive = false
    } = defineProps<ItemTagProps>();
</script>

<style scoped>
  
</style>