<template>
  <div class="space-y-2">
    <!-- Первая строка: заголовок, инпут и кнопки -->
    <div class="flex flex-wrap items-center gap-2">
      <h3 class="text-lg font-semibold">{{ title }}</h3>

      <text-input
        v-model="searchValue"
        placeholder="Поиск..."
        class="flex-1 min-w-[200px]"
      />

      <app-button
        variant="text"
        color="primary"
        @click="clearFilters"
      >
        Очистить
    </app-button>

      <app-button
        variant="text"
        color="secondary"
        @click="toggleFilters"
        class="flex items-center gap-1"
      >
        Фильтр        
        <AppIcon :name="isOpen ? 'chevron-up' : 'chevron-down'" />
      </app-button>
    </div>

    <!-- Вторая строка: фильтры -->
    <div
      v-if="isOpen"
      class="flex flex-wrap gap-2 mt-2"
    >
      <item-tag
        v-for="(filter, idx) in filters"
        :key="idx"
        :text="filter"
        :checked="true"
        @click="toggleFilter(filter)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tag } from '@/types/post';
import { ref } from 'vue'

interface FilterPanelProps {
  title: string
  filters: readonly Tag[]
}

const { title, filters: initialFilters } = defineProps<FilterPanelProps>()

const searchValue = ref('')
const isOpen = ref(false)
const filters = ref([...initialFilters])

const toggleFilters = () => {
  isOpen.value = !isOpen.value
}

const clearFilters = () => {
  searchValue.value = ''
}

const toggleFilter = (filter: string) => {
  console.log('Фильтр выбран:', filter)
}
</script>

<style scoped>

</style>
