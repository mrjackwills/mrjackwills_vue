<template>
	The Meal Pedant api is an asynchronous, multithreaded, CRUD application. With features including, but not limited to, password hashing with Argon2,
	<AHref href='https://haveibeenpwned.com/' text='HIBP' />-powered weak password detection, two-factor authentication with backup codes, secure cookie based user sessions using Redis,
	automated email templating, rate limiting, image uploading watermarking and compressing.
	It is the backend that powers <span class='font-weight-bold link cl' @click='click(`mealpedant_vue`)'>Meal Pedant site</span>.
	<br>
	<br>
	Built in <CHref text='Rust' />,
	with data stored using <CHref text='PostgreSQL' /> and <CHref text='Redis' />,
	and deployed via <CHref text='Docker' /> and <CHref text='Nginx' />.
	<br>
	<br>
	A previous, now outdated and unmaintained, Typescript <AHref href='https://github.com/mrjackwills/mealpedant_api/tree/typescript' text='branch' /> is available in the GitHub repository.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Png from '@/assets/png/mealpedant_api.png';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/mealpedant_api.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	emits('set_index', name);
};
const emits = defineEmits([ 'set_index' ]);
</script>