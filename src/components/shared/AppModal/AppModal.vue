<template>
  <teleport to="body">
    <div 
      v-if="props.modelValue" 
      class="fixed inset-0 z-50 bg-overlay flex flex-col items-center justify-center"
      @click.self="close"
    >
      <div class="bg-white rounded-modal shadow-sm max-w-[350px] md:max-w-[630px] w-full max-h-[90dvh] overflow-y-auto">
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

