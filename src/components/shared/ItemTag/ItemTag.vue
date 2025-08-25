<template>
    <span
    :class="[
      'rounded-3xl px-[14px] py-[6px] flex gap-[6px] cursor-pointer', 
      { 
        'bg-primary': interactive && checked, 
        'bg-primary-20': !interactive || (interactive && !checked),
        'text-white': interactive && checked, 
        'text-primary-active': !interactive || (interactive && !checked),
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
        variant?: '',
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