<template>
  <div>
    <gallery-nav />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import GalleryNav from './components/GalleryNav.vue';
</script>

<style scoped>
.gallery-nav {
  margin-bottom: 12px;
}
</style>
