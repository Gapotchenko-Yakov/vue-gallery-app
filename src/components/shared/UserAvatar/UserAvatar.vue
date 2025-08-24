<template>
  <div class="avatar">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
interface AvatarProps {
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