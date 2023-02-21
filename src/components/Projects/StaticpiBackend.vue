<template>
	The staticPi backend is an asynchronous, multithreaded, CRUD application, token server, and WebSocket message forwarder.
	It enables users of the staticPi service to;
	<ul class='ml-10'>
		<li>
			interact with the <span class='font-weight-bold link cl' @click='click(`staticpi_vue`)'>frontend</span>, via a JSON based api
		</li>
		<li>
			generate access tokens for their devices
		</li>
		<li>
			connect devices & clients to the service, via websockets, to enable messages to be routed from client to device, and vice versa
		</li>
	</ul>
	<br>
	It's other features include, but are not limited to, password hashing with Argon2,
	<AHref href='https://haveibeenpwned.com/' text='HIBP' />-powered weak password detection, two-factor authentication with backup codes, secure cookie based user sessions using Redis,
	automated email templating, rate limiting, multiple User Level authorization controls.
	It is the backend that powers <span class='font-weight-bold link cl' @click='click(`staticpi_vue`)'>staticPi site</span>
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
	emits('set_index', name);
};
const emits = defineEmits([ 'set_index' ]);
</script>