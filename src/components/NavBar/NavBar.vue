<template>
  <nav class="flex">
    <router-link 
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="px-3.5 py-2 rounded-button no-underline font-body text-base leading-none font-semibold"
      active-class="bg-white-10 text-primary"
    >
        {{ route.name }}
  </router-link>
  </nav>
</template>

<script setup lang="ts">
import { routes } from '../../router';


</script>

<style scoped>

</style>
