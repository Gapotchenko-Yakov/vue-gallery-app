<template>
  <teleport to="body">
    <div 
      v-if="props.modelValue" 
      class="fixed inset-0 z-50 bg-overlay flex flex-col items-center justify-center"
      @click.self="close"
    >
      <div class="bg-white rounded-modal shadow-sm p-[15px] max-w-[630px] w-full max-h-[90vh] overflow-y-auto">
          <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const close = () => {
  emit('update:modelValue', false)
}
</script>

