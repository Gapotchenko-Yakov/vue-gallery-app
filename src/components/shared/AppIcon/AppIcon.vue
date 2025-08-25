<template>
  <span>
      <component
        :is="icons[name]"
        :class="['icon', size]"
        :style="{ color }"
      />
  </span>
</template>

<script setup lang="ts">
import { icons, type IconName } from '@/assets/icons'

interface AppIconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const {
    name, size, color
} = defineProps<AppIconProps>()

</script>

<style scoped>
.icon { display: inline-block; }
.sm { width: 16px; height: 16px; }
.md { width: 24px; height: 24px; }
.lg { width: 32px; height: 32px; }
</style>
