<template>
	The Beluga Snooze site is a website/PWA, that enables a user to control a sunrise alarm clock.
	<br><br>
	It is the frontend to the <span class='font-weight-bold link cl' @click='click(`belugasnooze_pi`)'>belugasnooze client</span>,
	and is powered by <span class='font-weight-bold link cl' @click='click(`staticpi_backend`)'>staticPi</span>,
	<br>
	<br>
	Built in <CHref text='Vue' />,
	with <CHref text='Typescript' />,
	styled with <CHref text='Vuetify' />,
	and deployed via <CHref text='Nginx' />.

</template>

<script setup lang="ts">
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/belugasnooze_vue.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/belugasnooze_vue.webp';
import { currentProjectModule } from '@/store';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	currentProjectModule().set_current_project(name);
};
</script>