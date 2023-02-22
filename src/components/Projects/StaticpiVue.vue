<template>
	The staticPi site is the frontend PWA for <span class='font-italic'>"staticPi - The simple messaging service"</span>.
	<br>
	Users are able to
	<ul class='ml-10 mt-4'>
		<li>
			register, login, reset passwords, change passwords, enable Two-Factor Authentication, create, remove and download Two-Factor Authentication backups
		</li>
		<li>
			create, edit, and remove, devices & API keys to be used by the service
		</li>
		<li>
			view statistics about devices and connections
		</li>
		<li>
			directly connect and message created devices
		</li>
		<li>
			download all of their personal user data
		</li>
		<li>
			and many other features
		</li>
	</ul>
	<br>
	The site also enables Admin Users to perform a variety of administrative tasks, including killing websocket connections, de-activating devices, examine and remove rate-limits,
	viewing any contact messages sent, and much more.
	<Companion repo='staticpi_backend' />.
	<FrontendVue />
</template>

<script setup lang="ts">
import Companion from '@/components/CompanionVue.vue';
import FrontendVue from '@/components/FrontendVue.vue';
import Jpg from '@/assets/jpg/staticpi_vue.jpg';
import Webp from '@/assets/webp/staticpi_vue.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>