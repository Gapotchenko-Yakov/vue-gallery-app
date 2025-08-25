<template>
  <div class="flex gap-[10px] items-baseline">
    <template
        v-for="(item, itemIdx) in items"
        :key="item.name"
    >
        <span class="flex gap-1">
            <app-icon
              v-if="item.icon"
              :name="item.icon"
            />
            <span>
                {{ item.value }}
            </span>
        </span>
        <span v-if="itemIdx < items.length - 1">
            •
        </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IconName } from '@/assets/icons';

  interface CaptionProps {
    items: {
        name: string,
        value: string | number;
        icon: IconName | null
    }[],
  }
  
  const {
    items,
  } = defineProps<CaptionProps>();
</script>

<style scoped>
  
</style>