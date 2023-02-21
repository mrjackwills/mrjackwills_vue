<template>
	The staticPi backend is an asynchronous, multi-threaded, CRUD application, token server, and WebSocket message forwarder.
	It enables users of the staticPi service to;
	<ul class='ml-10 mt-4'>
		<li>
			interact with the <span class='font-weight-bold link cl' @click='click(`staticpi_vue`)'>frontend</span>, via a JSON based API
		</li>
		<li>
			generate access tokens for their devices
		</li>
		<li>
			connect devices & clients to the service, via websockets, to enable messages to be routed from client to device, and vice versa
		</li>
	</ul>
	<br>
	Its other features include, but are not limited to, password hashing with Argon2,
	<AHref href='https://haveibeenpwned.com/' text='HIBP' />-powered weak password detection, two-factor authentication with backup codes, secure cookie based user sessions using Redis,
	automated email templating, rate limiting, multiple User Level authorization controls.
	<br>
	<br>
	It is the backend that powers the <span class='font-weight-bold link cl' @click='click(`staticpi_vue`)'>staticPi site</span>, and is used by the
	<span class='font-weight-bold link cl' @click='click(`leafcast_vue`)'>leafcast client</span>,
	<span class='font-weight-bold link cl' @click='click(`leafcast_pi`)'>leafcast site</span>,
	<span class='font-weight-bold link cl' @click='click(`belugasnooze_pi`)'>belugasnooze client</span>, and
	<span class='font-weight-bold link cl' @click='click(`belugasnooze_vue`)'>belugasnooze site</span>.
	<br>
	<br>
	Built in <CHref text='Rust' />,
	with data stored using <CHref text='PostgreSQL' /> and <CHref text='Redis' />,
	and deployed via <CHref text='Docker' /> and <CHref text='Nginx' />.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Png from '@/assets/png/adsbdb.png';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/staticpi_backend.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	currentProjectModule().set_current_project(name);
};
</script>