<template>
    <span
    :class="[
      'rounded-3xl px-3.5 py-1.5 flex gap-1.5', 
      { 
        'bg-primary-light': !interactive, 
        'bg-primary': interactive && checked, 
        'bg-primary-20': interactive && !checked,
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