<template>
  <nav class="flex gap-5">
    <router-link 
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      class="px-[14px] py-[8px] rounded-button no-underline"
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
