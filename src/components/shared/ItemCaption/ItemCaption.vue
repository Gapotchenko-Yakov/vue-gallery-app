<template>
  <div>
    <template
        v-for="(item, itemIdx) in items"
        :key="item.name"
    >
        <span>
            <span>
                {{ item.icon }}
            </span>
            <span>
                {{ item.name }}
            </span>
        </span>
        <span v-if="itemIdx < items.length - 1">
            •
        </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

  interface CaptionProps extends HTMLAttributes {
    items: {
        name: string,
        icon: string // TODO: icon props
    }[],
  }
  
  const {
    items,
  } = defineProps<CaptionProps>();
</script>

<style scoped>
  
</style>