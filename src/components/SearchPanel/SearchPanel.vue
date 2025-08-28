<template>
  <div class="bg-white flex flex-col px-[95px]">
    <!-- Первая строка: заголовок, инпут и кнопки -->
    <div class="py-5 flex items-center justify-between">
      <div class="flex gap-10 items-center">
        <h3 class="text-3xl font-semibold">{{ title }}</h3>
        <text-input
          v-model="searchValue"
          placeholder="Поиск..."
          class="w-100 h-10 px-[10px] gap-[10px] bg-gray-100"
          @update:modelValue="handleSearchChange"
          :showClear="searchValue.length > 0"
          @clear="handleClearSearch"
        >
          <template #left-icon>
            <app-icon name="search" :size="12"/>
          </template>
        </text-input>
      </div>

      <div class="flex gap-2.5 items-baseline">
        <app-button
          @click="handleClearFilter"
          class="text-primary-active font-body text-sm leading-none font-medium cursor-pointer"
        >
          Очистить
      </app-button>

        <app-button
          @click="toggleFilters"
          class="flex gap-1 text-gray-500 font-body text-sm leading-none font-medium cursor-pointer"
        >
          <span>Фильтр</span>   
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

const emit = defineEmits(['update:search', 'update:filter', 'clear:search', 'clear:filter'])

const searchValue = ref('')
const isOpen = ref(false)
const filters = ref([...initialFilters])

const toggleFilters = () => {
  isOpen.value = !isOpen.value
}

const handleFilterChange = (filter: Tag) => {
  emit('update:filter', filter);
}

const handleSearchChange = (query: string) => {
  emit('update:search', query);
}

const handleClearSearch = () => {
  emit('clear:search');
}

const handleClearFilter = () => {
  emit('clear:filter');
}
</script>

<style scoped>

</style>
