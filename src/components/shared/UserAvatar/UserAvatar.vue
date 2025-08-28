<template>
  <div
    class="inline-flex items-center justify-center rounded-full overflow-hidden"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
  >
    <img :src="props.src" :alt="props.alt" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
interface AvatarProps {
  src: string
  alt?: string
  size?: number
}

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 40,
})
</script>
