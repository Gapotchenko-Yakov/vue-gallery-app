<template>
  <div class="bg-white flex flex-col px-[95px]">
    <!-- Первая строка: заголовок, инпут и кнопки -->
    <div class="py-5 flex flex-wrap items-center justify-between">
      <div class="flex gap-10 items-center">
        <h3 class="text-3xl font-semibold">{{ title }}</h3>
        <text-input
          v-model="searchValue"
          placeholder="Поиск..."
          class="w-100 h-10 px-[10px] gap-[10px]"
          @update:modelValue="handleSearchChange"
        >
          <template #left-icon>
            <app-icon name="search" />
          </template>
        </text-input>
      </div>

      <div class="flex gap-1">
        <app-button
          variant="text"
          @click="clearFilters"
          class="text-primary-active"
        >
          Очистить
      </app-button>

        <app-button
          variant="text"
          @click="toggleFilters"
          class="flex gap-1 text-gray-500"
        >
          Фильтр        
          <AppIcon :name="isOpen ? 'chevron-up' : 'chevron-down'" />
        </app-button>
      </div>
    </div>

    <!-- Вторая строка: фильтры -->
    <div
      v-if="isOpen"
      class="py-5 flex flex-wrap gap-4"
    >
      <item-tag
        v-for="(filter, idx) in filters"
        :key="idx"
        :text="filter"
        :checked="selectedTags.has(filter)"
        :interactive="true"
        class="font-base"
        @update:checked="handleFilterChange(filter)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tag } from '@/types/post';
import { ref } from 'vue'

interface FilterPanelProps {
  title: string;
  filters: readonly Tag[];
  selectedTags: Set<Tag>;
  query: string;
}

const { title, filters: initialFilters } = defineProps<FilterPanelProps>()

const emit = defineEmits(['update:search', 'update:filter'])

const searchValue = ref('')
const isOpen = ref(false)
const filters = ref([...initialFilters])

const toggleFilters = () => {
  isOpen.value = !isOpen.value
}

const clearFilters = () => {
  searchValue.value = ''
}

const handleFilterChange = (filter: Tag) => {
  emit('update:filter', filter);
}

const handleSearchChange = (query: string) => {
  emit('update:search', query);
}
</script>

<style scoped>

</style>
