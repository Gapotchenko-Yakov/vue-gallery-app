<template>
  <div class="pb=[30px] bg-gray-200 flex flex-col gap-5 min-h-full">
    <search-panel
      title="Блог"
      :filters="tags"
      :selectedTags="selectedTags"
      :query="searchValue"
      @update:filter="handleFilterChange"      
      @update:search="handleSearchChange"
    />
    <!-- gallery grid -->
    <div class="px-[30px] min-h-full">
      <div class="p-[30px] bg-white rounded-container max-w-[1300px] w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          <gallery-card 
            v-for="card in filteredAndSearchedGalleryData"
            :key="card.id"
            :data="card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchPanel } from '@/components';
import { GalleryCard } from '@/components'
import { galleryData } from '@/const/posts';
import { tags } from '@/const/posts';
import type { Post, Tag } from '@/types/post';
import { computed, ref } from 'vue';

// TODO: можно использовать state менеджер чтобы избежать property drill

const selectedTags = ref(new Set<Tag>());
const searchValue = ref('');


const filteredGalleryData = computed<Post[]>(() => {
  if (!selectedTags.value.size) return galleryData;
  return galleryData.filter(card => card.tags.some((cardTag) => selectedTags.value?.has(cardTag)));
});

const filteredAndSearchedGalleryData = computed<Post[]>(() => {
  if (!searchValue.value) return filteredGalleryData.value;
  return filteredGalleryData.value.filter(
    (card) => card.title.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

// const handleFilterChange = (filter: Tag) => {
//   const newTags = new Set(selectedTags.value)
//   if (newTags.has(filter)) {
//     newTags.delete(filter)
//   } else {
//     newTags.add(filter)
//   }
//   selectedTags.value = newTags;
// }

const handleFilterChange = (filter: Tag) => {
  if (selectedTags.value.has(filter)) {
    selectedTags.value.delete(filter)
  } else {
    selectedTags.value.add(filter)
  }
}

function handleSearchChange(query: string) {
  searchValue.value = query;
}

</script>

<style scoped>

</style>
