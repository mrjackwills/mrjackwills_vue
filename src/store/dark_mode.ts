import { defineStore } from 'pinia';
import { ModuleName } from '@/types';

export const darkmodeModule = defineStore(ModuleName.DarkMode, {

	state: () => ({
		darkmode: false,
		init: false,
	}),

	getters: {
		text_color: (state) => {
			return `text-${state.darkmode? 'white' : 'black'}`;
		},
		bg_color: (state) => {
			return `bg-${state.darkmode? 'black' : 'white'}`;
		},
		color: (state) => {
			return `${state.darkmode? 'white' : 'black'}`;
		},
		color_invert: (state) => {
			return `${state.darkmode? 'black' : 'white'}`;
		}
	},

	actions: {
		set_darkmode (b: boolean): void {
			this.darkmode = b;
			this.init = true;
		},
	},
	persist: true,
});