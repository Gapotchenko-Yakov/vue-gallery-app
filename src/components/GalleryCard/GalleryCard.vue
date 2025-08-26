<template>
  <post-modal
    v-model:isOpen="modalOpen"
    :post="data"
  />
  <div 
    class="flex flex-col gap-[10px] cursor-pointer"
    @click="modalOpen = true"
  >
    <img 
      :src="data.image" 
      alt="" 
      class="w-full h-[250px] object-cover rounded-image" 
    />

      <item-caption 
        :items="metaCaptions"
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
import { useMetaCaptions } from '@/composables/useMetaCaptions';
import type { Post } from '@/types/post';
import { ref, watch } from 'vue';
import { PostModal } from '..';

interface GalleryCardProps {
  data: Post;
}

const { data } = defineProps<GalleryCardProps>();

const modalOpen = ref(false);

const {metaCaptions} = useMetaCaptions(data);

watch(modalOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>

</style>
