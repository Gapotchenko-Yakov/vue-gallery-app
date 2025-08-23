<template>
  <div class="avatar">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface AvatarProps extends HTMLAttributes {
  src: string;
  alt?: string;
  size?: number;
}

const {
    src, alt
} = defineProps<AvatarProps>();
</script>

<style scoped>
  
</style>