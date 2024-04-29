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

// import { defineStore } from 'pinia';
// import { ModuleName } from '@/types';

// export const darkmodeModule = defineStore(ModuleName.DarkMode, {

// 	state: () => ({
// 		darkmode: false,
// 		init: false,
// 	}),

// 	// return 'bg-grey-darken-4';
// 	// return 'bg-grey-lighten-5';

// 	getters: {
// 		text_color: (state) => {
// 			return `text-${state.darkmode? 'grey-darken-4' : 'grey-lighten-5'}`;
// 		},
// 		bg_color: (state) => {
// 			return `bg-${state.darkmode? 'grey-lighten-5' : 'bg-grey-darken-4'}`;
// 		},
// 		color: (state) => {
// 			return `${state.darkmode? 'grey-lighten-5' : 'bg-grey-darken-4'}`;
// 		},
// 		color_invert: (state) => {
// 			return `${state.darkmode? 'bg-grey-darken-4' : 'grey-lighten-5'}`;
// 		}
// 	},

// 	actions: {
// 		set_darkmode (b: boolean): void {
// 			this.darkmode = b;
// 			this.init = true;
// 		},
// 	},
// 	persist: true,
// });