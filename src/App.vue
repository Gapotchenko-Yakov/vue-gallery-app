<template>
  <div class="bg-black text-white h-100">
    <app-header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader/AppHeader.vue';
</script>

<style scoped>
.gallery-nav {
  margin-bottom: 12px;
}
</style>
