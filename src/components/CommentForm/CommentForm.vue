<script setup lang="ts">
import { ref, computed } from "vue"

const isActive = ref(false)
const text = ref("")
const maxLength = 5

const charsCount = computed(() => text.value.length)
const textAreaValid = computed(() => charsCount.value <= maxLength)


const activate = () => {
  isActive.value = true
}

const cancel = () => {
  isActive.value = false
  text.value = ""
}

const submit = () => {
  if (!text.value.trim()) return
  emit("submit", text.value)
  text.value = ""
  isActive.value = false
}

const emit = defineEmits<{
  (e: "submit", text: string): void
}>()
</script>

<template>
    <template v-if="!isActive">
        <text-input
            modelValue=""
            placeholder="Введите комментарий"
            class="p-[15px] flex gap-2.5 rounded-input border-gray-200 border-[1px] font-inter font-medium text-gray-400 w-full"
            @focus="activate"
            />
    </template>
    <template v-else>
    <div 
    class="flex flex-col gap-2.5 justify-start items-end"
    >
        <div class="max-w-[600px] w-full h-[149px] flex flex-col gap-1.5 justify-center items-start">
            <div class="w-full h-full gap-2.5 flex justify-between">
                <textarea
                    v-model="text"
                    :class="[
                    { 
                        'outline-danger': !textAreaValid,
                        'outline-primary': textAreaValid && isActive, 
                    },
                    'w-full h-full px-[15px] py-[10px] resize-none border-[1px] rounded-input font-body text-base leading-[22px] font-medium'
                    ]"
                    placeholder="Введите комментарий"
                    />
                <button
                    type="button"
                    @click="cancel"
                    class="cursor-pointer"
                >
                    <app-icon name="cross" />
                </button>
            </div>
            <span class="text-gray-600 font-body text-sm leading-none font-medium">
                <span :class="textAreaValid ? 'text-gray-600' : 'text-danger'">
                    {{ charsCount }}
                </span> из {{ maxLength }} символов
            </span>
        </div>
        <div class="flex gap-2.5 justify-end">
            <app-button
              type="button"
            class="px-4 py-3 bg-primary-light text-primary font-inter text-[13px] leading-[13px] font-bold"
              @click="cancel"
            >
              Отмена
            </app-button>
            <app-button
              type="button"
                class="px-4 py-3 bg-primary text-white font-inter text-[13px] leading-3.5 font-semibold disabled:bg-gray-100 disabled:text-gray-400"
              :disabled="textAreaValid"
              @click="submit"
            >
              Опубликовать
            </app-button>
        </div>
    </div>
    </template>
</template>
