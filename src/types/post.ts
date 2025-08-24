import type { UserComment } from "./comment";

export type PostMetaCode = "date" | "readTime" | "comments";

export type Tag = 'Город' | 'Природа' | 'Люди' |
    'Животные' | 'Еда' | 'Напитки' |
    'Архитектура' | 'Искусство';

export interface Post {
    id: string;
    image: string;
    meta: { name: PostMetaCode; value: string | number }[];
    title: string;
    description: string;
    paragraphs: string[];
    comments: UserComment[];
    tags: Tag[];
}