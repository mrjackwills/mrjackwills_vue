export type u<T> = T | undefined
export type nu = u<number>
export type su = u<string>

export type TSnack = {
	message?: string,
	icon?: string
	timeout?: number,
	closable?: boolean,
	loading?: boolean
} & Partial<TSnackPosition>

export type TPositions = 'bottom' | 'left' | 'right' | 'top'

export type TSnackPosition = {x: u<TPositions>, y: u<TPositions> }

export enum ModuleName {
	DarkMode ='darkmode',
	Image = 'image',
	CurrentProject = 'current_project',
	Mobile = 'mobile',
	Snack = 'snackbar',
}

export type TProjectLink = {
	href: string
	tooltip: string
}

export type TProject = {
	name: string,
	github: TGithubRepos,
	link?: TProjectLink,
	component: Component,
}

export type TCommon =
	'Docker' |
	'Nginx' |
	'PostgreSQL' |
	'Redis' |
	'Rust' |
	'SQLite' |
	'tauri' |
	'TypeScript' |
	'Vue'|
	'Vuetify';

export type TGithubRepos =
'adsbdb'|
'belugasnooze_pi'|
'belugasnooze_vue'|
'leafcast_pi'|
'leafcast_vue'|
'mealpedant_api'|
'mealpedant_vue'|
'mrjackwills_vue'|
'obliqoro'|
'oxker'|
'staticpi_backend'|
'staticpi_vue'