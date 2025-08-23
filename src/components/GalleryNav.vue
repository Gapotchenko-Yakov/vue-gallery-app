<template>
  <nav>
    <router-link 
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
    >
      {{ route.name }}
  </router-link>
  </nav>
</template>

<script setup lang="ts">
import { routes } from '../router';


</script>

<style scoped>
  nav {
    display: flex;
    gap: 1rem;
  }

  router-link {
    text-decoration: none;
    color: #646cff;
  }

  router-link:hover {
    color: #535bf2;
  }
</style>
