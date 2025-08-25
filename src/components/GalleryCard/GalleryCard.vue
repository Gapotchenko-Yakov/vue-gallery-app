<template>
  <div class="flex flex-col gap-[10px]">
    <img 
    :src="data.image" 
    alt="" 
    class="w-full h-[250px] object-cover rounded-image" 
    />

      <item-caption 
      :items="metaCaptions"
      class="text-gray-600"
      />

      <h3 class="text-xl">{{ data.title }}</h3>

      <p class="font-body text-base leading-[25px] font-medium">{{ data.description }}</p>

      <div class="flex flex-wrap gap-2">
        <item-tag 
            v-for="tag in data.tags" 
            :key="tag" 
            :text="tag"
            :interactive="false"
            class="text-sm"
        />
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
