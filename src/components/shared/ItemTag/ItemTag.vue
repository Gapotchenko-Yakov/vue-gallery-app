<template>
    <span
    :class="[
      'rounded-tag px-3.5 py-1.5 flex gap-1.5 justify-center items-center', 
      interactive ? 'font-body text-base leading-none font-medium' : 'font-body text-sm leading-none font-medium',
      { 
        'bg-primary-light': !interactive || (interactive && !checked), 
        'bg-primary': interactive && checked, 
        // 'bg-primary-20': interactive && !checked,
        'text-white': interactive && checked, 
        'text-primary-active': !interactive || (interactive && !checked),
        'cursor-pointer': interactive,
      }
    ]"
    @click="onToggle"
    >
      <span>
        {{ text }}
      </span>
      <app-icon
        v-if="interactive"
        :name="checked ? 'check' : 'plus'"
        :size="20"
      />
    </span>
</template>

<script setup lang="ts">
    interface ItemTagProps {
        text: string,
        checked?: boolean,
        interactive?: boolean,
    }

    const {
        text, checked, interactive = false
    } = defineProps<ItemTagProps>();

    const emit = defineEmits(['update:checked'])

    function onToggle() {
      if (!interactive) return
      emit('update:checked', !checked)
    }
</script>

<style scoped>
  
</style>