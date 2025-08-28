<template>
  <AppModal 
    v-model="localValue"
  >
    <div class="flex flex-col gap-[15px] p-[15px]">
        <div class="flex flex-col gap-2.5">
        <div class="flex justify-between">
            <h3 class="font-inter font-semibold text-2xl leading-none">{{ post.title }}</h3>
            <button
                type="button"
                @click="cancel"
                class="cursor-pointer"
            >
                <app-icon
                    name="cross"
                />
            </button>
        </div>
        <item-caption
            :items="metaCaptions"
            class="gap-2.5"
        />
        </div>
        <!-- Контент -->
        <div class="rounded-image w-full">
            <img 
                :src="post.image"
                alt=""
                class="rounded-image w-full"
            />
        </div>
        <div class="flex flex-col gap-2.5 font-body text-base">
            <p
                v-for="(paragraph, parIdx) in post.paragraphs"
                :key="parIdx"
                >
                {{ paragraph }}
            </p>
            <div class="flex gap-2.5">
                <item-tag
                    v-for="tag in post.tags"
                    :key="tag"
                    :text="tag"
                    :interactive="false"
                />
            </div>
        </div>
        <div class="flex flex-col gap-2.5">
            <div class="flex gap-1.5">
                <h4 class="font-inter ">Комментариев</h4>
                <span>{{ post.comments.length }}</span>
            </div>
            <comment-form 
                @submit="addComment"
            />
            <div
                v-for="comment in post.comments"
                :key="comment.id"
                class="px-3 pt-3 flex gap-3"
            >
                <user-avatar
                    :src="comment.author.avatar"
                    :size="38"
                />
                <div class="flex flex-col gap-1.5">
                    <span 
                    class="font-inter font-semibold text-base tracking-[-0.01em] leading-none"
                    >{{ comment.author.firstName + ' ' + comment.author.lastName }}</span>
                    <span 
                    class="font-inter font-medium text-sm leading-3.5"
                    >{{ comment.text }}</span>
                    <span 
                    class="font-inter font-medium text-xs text-gray-500 leading-3"
                    >{{ getCommentDateFormatted(new Date(comment.createdAt)) }}</span>
                </div>
            </div>
        </div>
    </div>
  </AppModal>
</template>

<script setup lang="ts">
import { useMetaCaptions } from '@/composables/useMetaCaptions';
import type { Post } from '@/types/post';
import { ref, watch } from 'vue';
import { CommentForm } from '..';

interface PostModalProps {
    isOpen: boolean;
    post: Post;
}

const {
    isOpen,
    post,
} = defineProps<PostModalProps>()

const localValue = ref(isOpen)

watch(localValue, (val) => emit('update:isOpen', val))
watch(() => isOpen, (val) => (localValue.value = val))

const emit = defineEmits<{
  (e: 'update:isOpen', value: boolean): void;
  (e: 'add-comment', text: string): void;
}>();

const cancel = () => {
  emit('update:isOpen', false)
}

const addComment = (text: string) => {
    emit('add-comment', text)
}

const { metaCaptions } = useMetaCaptions(post);

function getCommentDateFormatted(date: Date): string {
  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year} в ${hours}:${minutes}`;
}

// const save = () => {
//   emit('update:isOpen', false)
// }
</script>
