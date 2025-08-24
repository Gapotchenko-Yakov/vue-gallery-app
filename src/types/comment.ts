import type { UserData } from './user';

export interface UserComment {
    id: string;
    author: UserData;
    text: string;
    createdAt: string;
    updatedAt: string;
}
