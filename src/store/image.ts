import { defineStore } from 'pinia';
import { ModuleName } from '@/types';

export const imageModule = defineStore(ModuleName.Image, {

	state: () => ({
		image: '',
		webp: '',
	}),

	actions: {
		set_image (s: string): void {
			this.image = s;
		},
		set_webp (s: string): void {
			this.webp = s;
		},
	},
});