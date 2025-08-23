<template>
  <nav>
    <router-link 
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="router-link"
    >
      {{ route.name }}
  </router-link>
  </nav>
</template>

<script setup lang="ts">
import { routes } from '../../router';


</script>

<style scoped>
  @import './NavBar.scss';

  nav {
    display: flex;
    gap: 1rem;
  }
</style>
