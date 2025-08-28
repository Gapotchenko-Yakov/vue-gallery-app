<template>
  <div class="pb=[30px] bg-gray-200 flex flex-col gap-5 min-h-full">
    <search-panel
      title="Блог"
      :filters="tags"
      :selectedTags="selectedTags"
      :query="searchValue"
      @update:filter="handleFilterChange"      
      @update:search="handleSearchChange"
      @clear:filter="handleFilterClear"
      @clear:search="handleSearchClear"
    />
    <!-- gallery grid -->
    <div class="px-[30px] bg-gray-200 flex justify-center items-start gap-x-2.5">
      <div 
        v-if="filteredAndSearchedGalleryData.length > 0"
        class="p-[30px] bg-white rounded-container max-w-[1300px] w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          <gallery-card 
            v-for="card in filteredAndSearchedGalleryData"
            :key="card.id"
            :data="card"
            @add-comment="addComment"
          />
        </div>
      </div>
      <div 
        v-else
        class="px-[30px] py-[65px] bg-white rounded-container max-w-[1300px] w-full flex flex-col justify-start items-center gap-10 max-h-[314px]"
      >
        <app-icon
          name="search-list"
        />
        <div class="max-h-[327px] p-5 flex flex-col justify-start gap-[27px]">
          <div class="flex flex-col justify-start gap-2">
            <div class="flex flex-col justify-start gap-1">
              <h4 class="text-gray-600 font-inter font-medium text-sm leading-3.5">
                Поиск не дал результатов
              </h4>
              <span class="text-gray-500 font-inter font-medium text-xs leading-5">
                Повторите поиск или используйте фильтр для структуризации контента
              </span>
            </div>
          </div>
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
import { users } from '@/const/users';
import type { Post, Tag } from '@/types/post';
import type { UserData } from '@/types/user';
import { computed, ref } from 'vue';

// TODO: можно использовать state менеджер чтобы избежать property drill
// а если связать стейт менеджер с localStorage, то и данные после завершения работы приложения будут сохраняться
const selectedTags = ref(new Set<Tag>());
const searchValue = ref('');

const gallery = ref([...galleryData]); 
const currentUserID = '1';


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

function handleSearchClear() {
  searchValue.value = '';
}

function handleFilterClear() {
  selectedTags.value = new Set<Tag>();
}


function addComment({ postId, comment: commentText }: { postId: string; comment: string }) {
  const post = gallery.value.find(p => p.id === postId);
  if (!post) return;

  const user = users.find(user => user.id === currentUserID)
  
  post.comments.push({
    id: crypto.randomUUID(),
    author: user || {} as UserData,
    text: commentText,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}


</script>

<style scoped>

</style>
