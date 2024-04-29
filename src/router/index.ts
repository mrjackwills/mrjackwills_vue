import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';



export const strip_title = (text: string) =>  text.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

export const create_href = (text: string): string => `/words/${ strip_title(text)}`;

export const articles = [ 
	{
		title: 'Save over $500 a year using Rust',
		date: '2024-05-01'
	}
]

const base_routes  = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/words',
		name: 'Words',
		component: () => import('@/views/WordsView.vue')
	},
	{
		path: '/:pathMatch(.*)*', name: 'not-found',
		component: () => import('@/views/404.vue')
	}
];

const words_routes: Array<RouteRecordRaw>  = [];
for (const i of articles) {
	words_routes.push(
		{
			path: `/words/${strip_title(i.title)}`,
			component: () => import(`@/views/words/${i.date}.vue`)
	})
}


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...words_routes, ...base_routes],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		else if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		} else if (to.name?.toString() !== from.name?.toString()) {
			return { top: 0 };
		}
	}
});

export default router;
