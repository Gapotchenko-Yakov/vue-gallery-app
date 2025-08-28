<template>
  <div class="flex gap-2.5 items-center text-gray-600">
    <template
        v-for="(item, itemIdx) in items"
        :key="item.name"
    >
        <span class="flex gap-1 font-body text-sm leading-none font-medium">
            <app-icon
              v-if="item.icon"
              :name="item.icon"
              :size="18"
            />
            <span>
                {{ item.value }}
            </span>
        </span>
        <span 
        v-if="itemIdx < items.length - 1"
        class="font-inter font-semibold text-[10px] leading-none tracking-[-0.03em]"
        >
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