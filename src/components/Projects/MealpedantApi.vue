<template>
	The Meal Pedant API is an asynchronous, multi-threaded, CRUD application. With features including, but not limited to, password hashing with Argon2;
	<AHref href='https://haveibeenpwned.com/' text='HIBP' />-powered weak password detection; two-factor authentication with backup codes; secure cookie based user sessions using Redis;
	automated email templating and sending; rate limiting; image uploading, watermarking, and compression.
	<Companion repo='mealpedant_vue' />.
	<BackendApi/>
	<TSBranch repo='mealpedant_api'/>
	
</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import BackendApi from '@/components/BackendApi.vue';
import Companion from '@/components/CompanionVue.vue';
import Png from '@/assets/png/mealpedant_api.png';
import TSBranch from '@/components/TSBranch.vue';
import Webp from '@/assets/webp/mealpedant_api.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

</script>