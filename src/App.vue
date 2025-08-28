<template>
  <div class="bg-gray-200 min-h-screen flex flex-col">
    <app-header />
    <router-view class="flex-1" />
  </div>
</template>


<script setup lang="ts">
import AppHeader from './components/AppHeader/AppHeader.vue';
</script>

<style scoped>

</style>
