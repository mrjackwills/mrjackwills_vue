<template>
	The staticPi site is the frontend PWA for "staticPi - The simple messaging service". User's are able to register, login, reset passwords, change passwords,
	enable Two Factor Authentication & backups, create - and edit - devices to be used by the service, directly connect and message those devices, download all of their personal user data,
	delete all of their personal user data, and more
	<br>
	The site also enables Admin Users to perform a variety of administrative tasks, including killing websocket connections, de-activtaing devices, remove rate-limits, viewing any contact messages sent, and much more.
	and is the companion to the <span class='font-weight-bold link cl' @click='click(`staticpi_backend`)'>staticpi backend</span>.
	<br>
	<br>
	Built in <CHref text='Vue' />,
	with <CHref text='Typescript' />,
	styled with <CHref text='Vuetify' />,
	and deployed via <CHref text='Nginx' />,

</template>

<script setup lang="ts">
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/staticpi_vue.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/staticpi_vue.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	emits('set_index', name);
};
const emits = defineEmits([ 'set_index' ]);
</script>