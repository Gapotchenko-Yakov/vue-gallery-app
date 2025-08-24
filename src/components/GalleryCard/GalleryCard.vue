<template>
  <div class="gallery-card border rounded-lg overflow-hidden shadow-sm">
    <img :src="data.image" alt="" class="w-full h-48 object-cover" />

    <div class="p-4 flex flex-col gap-2">
      <item-caption 
      :items="metaCaptions" 
      />

      <h3 class="text-lg font-semibold">{{ data.title }}</h3>

      <p class="text-gray-600">{{ data.description }}</p>

      <div class="flex flex-wrap gap-2">
        <item-tag 
            v-for="tag in data.tags" 
            :key="tag" 
            :text="tag"
            :interactive="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mapMetaCodeToIcon } from '@/const/posts';
import type { Post } from '@/types/post';
import { computed } from 'vue';


interface GalleryCardProps {
  data: Post;
}

const { data } = defineProps<GalleryCardProps>();

const metaCaptions = computed(() => data.meta.map((meta) => ({
    name: meta.name,
    value: meta.value,
    icon: mapMetaCodeToIcon[meta.name],
})))

</script>

<style scoped>

</style>
