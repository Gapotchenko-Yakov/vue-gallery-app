<template>
  <div class="flex flex-col gap-5">
    <search-panel
      title="Блог"
      :filters="tags"
    />
    <!-- gallery grid -->
    <div class="p-[30px] mx-auto">
      <div class="p-[30px] bg-white rounded-container max-w-[1300px] w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <gallery-card 
            v-for="card in galleryData"
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

</script>

<style scoped>

</style>
