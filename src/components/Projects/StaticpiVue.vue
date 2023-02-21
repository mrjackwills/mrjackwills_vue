<template>
	The staticPi site is the frontend PWA for <span class='font-italic'>"staticPi - The simple messaging service"</span>. Users are able to
	<ul class='ml-10 mt-4'>
		<li>
			register, login, reset passwords, change passwords, enable Two-Factor Authentication, create, remove and download Two-Factor Authentication backups
		</li>
		<li>
			create, edit, and remove, devices & API keys to be used by the service
		</li>
		<li>
			directly connect and message created devices
		</li>
		<li>
			download all of their personal user data
		</li>
		<li>
			and numerous other features
		</li>
	</ul>
	<br>
	The site also enables Admin Users to perform a variety of administrative tasks, including killing websocket connections, de-activating devices, examine and remove rate-limits,
	viewing any contact messages sent, and much more.
	<br>
	<br>
	It is the fontend companion to the <span class='font-weight-bold link cl' @click='click(`staticpi_backend`)'>staticpi backend</span>.
	<br>
	<br>
	Built in <CHref text='Vue' />,
	with <CHref text='Typescript' />,
	styled with <CHref text='Vuetify' />,
	and deployed via <CHref text='Nginx' />.

</template>

<script setup lang="ts">
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/staticpi_vue.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/staticpi_vue.webp';
import { currentProjectModule } from '@/store';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	currentProjectModule().set_current_project(name);
};
</script>