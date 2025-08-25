import ChevronDown from './chevron-down.svg';
import ChevronUp from './chevron-up.svg';
import Cross from './cross.svg';
import Logo from './logo.svg';
import Menu from './menu.svg';
import Messages from './messages.svg';
import SearchList from './search-list.svg';
import Search from './search.svg';
import Time from './time.svg';
import Plus from './plus.svg';
import Check from './check.svg';

export const icons = {
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    'cross': Cross,
    'logo': Logo,
    'menu': Menu,
    'messages': Messages,
    'search-list': SearchList,
    'search': Search,
    'time': Time,
    'plus': Plus,
    'check': Check,
} as const;

export type IconName = keyof typeof icons;
