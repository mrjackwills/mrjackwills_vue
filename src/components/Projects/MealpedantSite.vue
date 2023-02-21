<template>
	The Meal Pedant site is the frontend PWA for a pedantic and meticulous daily log of evening meals. It enables an authenticated user to views the meals, whilst Admin Users
	are able to add, edit, and delete meals, as well are perform Administrative actions for the backend.
	<br><br>
	It is the frontend companion to the <span class='font-weight-bold link cl' @click='click(`mealpedant_api`)'>Meal Pedant API</span>.
	<br>
	<br>
	Built in <CHref text='Vue' />,
	with <CHref text='Typescript' />,
	styled with <CHref text='Vuetify' />,
	and deployed via <CHref text='Nginx' />.

</template>

<script setup lang="ts">
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/mealpedant_vue.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/mealpedant_vue.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	currentProjectModule().set_current_project(name);
};
</script>