import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{ path: '/:pathMatch(.*)*', name: 'not-found', redirect: { name: 'home' } },
	],
	scrollBehavior (to, from, savedPosition) {
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
