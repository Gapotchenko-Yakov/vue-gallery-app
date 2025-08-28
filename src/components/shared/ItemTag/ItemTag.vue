<template>
    <span
    :class="[
      'rounded-tag px-3.5 py-1.5 flex gap-1.5 justify-center items-center', 
      props.interactive ? 'font-body text-base leading-none font-medium' : 'font-body text-sm leading-none font-medium',
      { 
        'bg-primary-light': !props.interactive || (props.interactive && !props.checked), 
        'bg-primary': props.interactive && props.checked, 
        // 'bg-primary-20': props.interactive && !props.checked,
        'text-white': props.interactive && props.checked, 
        'text-primary-active': !props.interactive || (props.interactive && !props.checked),
        'cursor-pointer': props.interactive,
      }
    ]"
    @click="onToggle"
    >
      <span>
        {{ props.text }}
      </span>
      <app-icon
        v-if="props.interactive"
        :name="props.checked ? 'check' : 'plus'"
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

    const props = withDefaults(defineProps<ItemTagProps>(),{
      interactive: false
    });

    const emit = defineEmits(['update:checked'])

    function onToggle() {
      if (!props.interactive) return
      emit('update:checked', !props.checked)
    }
</script>

<style scoped>
  
</style>