<template>
  <div
    class="inline-flex items-center justify-center rounded-full overflow-hidden"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <img :src="src" :alt="alt" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
interface AvatarProps {
  src: string
  alt?: string
  size?: number
}

const {
  src, alt, size
} = withDefaults(defineProps<AvatarProps>(), {
  size: 40,
})
</script>
