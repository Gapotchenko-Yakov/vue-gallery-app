import { monthShortNames } from "@/const/date";
import { mapMetaCodeToIcon } from "@/const/posts";
import type { Post } from "@/types/post";
import { computed } from "vue";


export function useMetaCaptions(data: Post) {
    // TODO: Сейчас metaCaptions вычисляется локально в каждом компоненте.
    // Вынос в composable позволяет переиспользовать логику.
    // Глобальный стейт позволит вычислять один раз и использовать в разных компонентах.
    const metaCaptions = computed(() => {
        const captions = data.meta.map((meta) => {
            if (meta.name === 'date') {
                const date = new Date(meta.value);

                const day = date.getDate();
                const month = monthShortNames[date.getMonth()];

                return ({
                    name: meta.name,
                    value: `${day} ${month}`,
                    icon: mapMetaCodeToIcon[meta.name],
                })
            }

            return ({
                name: meta.name,
                value: meta.value,
                icon: mapMetaCodeToIcon[meta.name],
            })
        })

        function pluralizeComments(count: number) {
            const mod10 = count % 10;
            const mod100 = count % 100;

            if (mod100 >= 11 && mod100 <= 14) return `${count} комментариев`;
            if (mod10 === 1) return `${count} комментарий`;
            if (mod10 >= 2 && mod10 <= 4) return `${count} комментария`;
            return `${count} комментариев`;
        }

        captions.push({
            name: 'comments',
            value: data.comments?.length ? pluralizeComments(data.comments?.length) : '0 комментариев',
            icon: mapMetaCodeToIcon['comments'],
        });

        return captions;
    })

    return { metaCaptions };
}