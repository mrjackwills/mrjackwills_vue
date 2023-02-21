import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const head = createHead();

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(head)
	.use(router)
	.use(pinia)
	.use(vuetify)
	.mount('#app');
