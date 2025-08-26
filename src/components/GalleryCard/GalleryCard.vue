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
import { monthShortNames } from '@/const/date';
import { mapMetaCodeToIcon } from '@/const/posts';
import type { Post } from '@/types/post';
import { computed } from 'vue';


interface GalleryCardProps {
  data: Post;
}

const { data } = defineProps<GalleryCardProps>();

const metaCaptions = computed(() => {
  const captions = data.meta.map((meta) => {
  if(meta.name === 'date'){
    const date = new Date(meta.value);

    const day = date.getDate();
    const month = monthShortNames[date.getMonth()];

    return ({
      name: meta.name,
      value: `${day} ${month}`,
      icon: mapMetaCodeToIcon[meta.name],
  })
  }

    return ({
      name: meta.name,
      value: meta.value,
      icon: mapMetaCodeToIcon[meta.name],
  })
})

function pluralizeComments(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod100 >= 11 && mod100 <= 14) return `${count} комментариев`;
  if (mod10 === 1) return `${count} комментарий`;
  if (mod10 >= 2 && mod10 <= 4) return `${count} комментария`;
  return `${count} комментариев`;
}

  captions.push({
    name: 'comments',
    value: data.comments?.length ? pluralizeComments(data.comments?.length) : '0 комментариев',
    icon: mapMetaCodeToIcon['comments'],
  });

  return captions;
})

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
