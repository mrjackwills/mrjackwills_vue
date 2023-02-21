import { defineStore } from 'pinia';
import { ModuleName } from '@/types';

export const mobileStore = defineStore(ModuleName.Mobile, {

	state: () => ({
		mobile: false
	}),

	actions: {
		set_mobile (b: boolean): void {
			this.mobile = b;
		},
	},
});