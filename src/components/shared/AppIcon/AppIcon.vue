<template>
  <span class="flex justify-center items-center">
      <component
        :is="icons[name]"
        :class="['icon']"
        :style="{ color }"
      />
  </span>
</template>

<script setup lang="ts">
import { icons, type IconName } from '@/assets/icons'

interface AppIconProps {
  name: IconName;
  size?: number; // TODO: integrate icon sizing
  color?: string;
}

const {
    name, color
} = defineProps<AppIconProps>()

</script>

<style scoped>
.icon { display: inline-block; }
</style>
