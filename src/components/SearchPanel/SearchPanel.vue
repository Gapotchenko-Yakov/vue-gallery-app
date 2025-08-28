<template>
  <div class="bg-white flex flex-col px-2.5 md:px-[30px] 2xl:px-[95px]">
    <!-- Первая строка: заголовок, инпут и кнопки -->
    <div class="py-5 flex items-center justify-between">
      <div class="flex gap-10 items-center">
        <h3 class="text-3xl font-semibold">{{ props.title }}</h3>
        <text-input
          v-model="searchValue"
          placeholder="Поиск..."
          class="hidden md:flex w-100 h-10 px-[10px] gap-[10px] bg-gray-100"
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
          v-if="selectedTags.size > 0"
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

    <div>
        <text-input
          v-model="searchValue"
          placeholder="Поиск..."
          class="flex md:hidden w-full h-10 px-[10px] gap-[10px] bg-gray-100"
          @update:modelValue="handleSearchChange"
          :showClear="searchValue.length > 0"
          @clear="handleClearSearch"
        >
         <template #left-icon>
            <app-icon name="search" :size="12"/>
          </template>
        </text-input>
    </div>

    <!-- Вторая строка: фильтры -->
    <div
      v-if="isOpen"
      class="py-5 flex flex-wrap gap-4"
    >
      <item-tag
        v-for="(filter, idx) in currFilters"
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
import { computed, ref } from 'vue'

interface FilterPanelProps {
  title: string;
  initialFilters: readonly Tag[];
  selectedTags: Set<Tag>;
  query: string;
}

const props = defineProps<FilterPanelProps>()

const emit = defineEmits(['update:search', 'update:filter', 'clear:search', 'clear:filter'])

const searchValue = ref('')
const isOpen = ref(false)
const currFilters = computed(() => props.initialFilters)
console.log("🚀 ~ currFilters:", currFilters.value)

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
