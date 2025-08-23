<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar/NavBar.vue';
</script>

<style scoped>
.gallery-nav {
  margin-bottom: 12px;
}
</style>
