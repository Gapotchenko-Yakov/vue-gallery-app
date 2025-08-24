import {
    AppButton,
    AppIcon,
    ItemCaption,
    ItemTag,
    TextInput,
    UserAvatar,
} from ".";

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        AppButton: typeof AppButton;
        TextInput: typeof TextInput;
        ItemCaption: typeof ItemCaption;
        ItemTag: typeof ItemTag;
        UserAvatar: typeof UserAvatar;
        AppIcon: typeof AppIcon;
    }
}
