import { defineStore } from 'pinia';
import { ModuleName } from '@/types';

export const mobileStore = defineStore(ModuleName.Mobile, {

	state: () => ({
		mobile: false,
		android_ios: false,
	}),

	actions: {
		set_mobile (b: boolean): void {
			this.mobile = b;
		},
		set_android_ios (b: boolean): void {
			this.android_ios = b;
		},
	},
});