import { currentProjectStore } from '@/store/modules/current_project';
import { darkmodeStore } from '@/store/modules/dark_mode';
import { imageStore } from '@/store/modules/image';
import { mobileStore } from '@/store/modules/mobile';
import { snackbarStore } from '@/store/modules/snackbar';

export const currentProjectModule = currentProjectStore;
export const darkmodeModule = darkmodeStore;
export const imageModule = imageStore;
export const mobileModule = mobileStore;
export const snackbarModule = snackbarStore;
