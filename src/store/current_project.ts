import { defineStore } from 'pinia';
import { ModuleName, type TGithubRepos, type u } from '@/types';

export const currentProjectModule = defineStore(ModuleName.CurrentProject, {

	state: () => ({
		current_project: undefined as u<TGithubRepos>
	}),

	actions: {
		set_current_project (s: u<TGithubRepos>): void {
			this.current_project = s;
		},
	},
	persist: true,
});