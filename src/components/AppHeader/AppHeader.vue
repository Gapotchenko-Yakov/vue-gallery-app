<template>
  <div>
    <app-icon
        name="menu"
    />
    <app-icon
        name="logo"
    />
    <nav-bar v-if="showNavLinks"/>
  </div>
</template>

<script setup lang="ts">
    interface AppHeaderProps {
        showNavLinks?: boolean;
    }

    const {
        showNavLinks
    } = defineProps<AppHeaderProps>();
</script>

<style scoped>
  
</style>