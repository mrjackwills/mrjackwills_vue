<template>
	The staticPi backend is an asynchronous, multi-threaded, CRUD application, token server, and WebSocket message forwarder.
	It enables users of the staticPi service to;
	<ul class='ml-10 mt-4'>
		<li>
			interact with the <IHref repo='staticpi_vue'/>, via a JSON based API
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
	<Companion repo='staticpi_vue' />, and is used by the
	<IHref repo='leafcast_vue' />,
	the <IHref repo='leafcast_pi' />,
	the <IHref repo='belugasnooze_vue' />,
	and the <IHref repo='belugasnooze_pi' />.
	<BackendApi/>
	
</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import BackendApi from '@/components/BackendApi.vue';
import Companion from '@/components/CompanionVue.vue';
import IHref from '@/components/IHref.vue';
import Png from '@/assets/png/adsbdb.png';
import Webp from '@/assets/webp/staticpi_backend.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

</script>