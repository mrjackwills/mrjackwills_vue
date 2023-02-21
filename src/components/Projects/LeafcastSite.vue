<template>
	The Leafcast site is a website/PWA, that enables a user to view live imagery of a plant-filled corner.
	<br>
	<br>
	It is powered by <span class='font-weight-bold link cl' @click='click(`staticpi_backend`)'>staticPi</span>,
	and is the companion to the <span class='font-weight-bold link cl' @click='click(`leafcast_pi`)'>Leafcast client</span>.
	<br>
	<br>
	Built in <CHref text='Vue' />,
	with <CHref text='Typescript' />,
	styled with <CHref  text='Vuetify' />,
	and deployed via <CHref  text='Nginx' />.

</template>

<script setup lang="ts">
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/leafcast_vue.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/leafcast_vue.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	currentProjectModule().set_current_project(name);
};
</script>