<template>
  <post-modal
    v-model:isOpen="modalOpen"
    :post="props.data"
    @add-comment="addComment"
  />
  <div 
    class="flex flex-col gap-2.5 cursor-pointer"
    @click="modalOpen = true"
  >
    <img 
      :src="props.data.image" 
      alt="" 
      class="w-full h-[250px] object-cover rounded-image" 
    />

      <item-caption 
        :items="metaCaptions"
      />

      <h3 class="font-inter font-semibold text-xl leading-none tracking-[-0.03em]">{{ props.data.title }}</h3>

      <p class="font-body text-base leading-[25px] font-medium">{{ props.data.description }}</p>

      <div class="flex flex-wrap gap-2">
        <item-tag 
            v-for="tag in props.data.tags" 
            :key="tag" 
            :text="tag"
            :interactive="false"
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

const props = defineProps<GalleryCardProps>();

const emit = defineEmits<{
  (e: 'add-comment', value: { postId: string; comment: string }): void;
}>();

const addComment = (text: string) => {
  emit('add-comment', {postId: props.data.id, comment: text})
}


const modalOpen = ref(false);

const {metaCaptions} = useMetaCaptions(props.data);

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
