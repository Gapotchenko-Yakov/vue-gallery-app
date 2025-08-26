import AppButton from "./AppButton/AppButton.vue";
import AppIcon from "./AppIcon/AppIcon.vue";
import ItemCaption from "./ItemCaption/ItemCaption.vue";
import ItemTag from "./ItemTag/ItemTag.vue";
import TextInput from "./TextInput/TextInput.vue";
import UserAvatar from "./UserAvatar/UserAvatar.vue";
import AppModal from "./AppModal/AppModal.vue";

export const sharedComponents = [
    { name: 'AppButton', component: AppButton },
    { name: 'ItemCaption', component: ItemCaption },
    { name: 'ItemTag', component: ItemTag },
    { name: 'TextInput', component: TextInput },
    { name: 'UserAvatar', component: UserAvatar },
    { name: 'AppIcon', component: AppIcon },
    { name: 'AppModal', component: AppModal },
];

export {
    AppButton,
    AppIcon,
    ItemCaption,
    ItemTag,
    TextInput,
    UserAvatar,
    AppModal,
}