<template>
	The Leafcast client is the backend code, built specifically for a <AHref href='https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/' text='Raspberry Pi Zero 2 W' /> with a
	<AHref href='https://www.raspberrypi.com/products/camera-module-v2/' text='Pi Camera' />, that continually photographs the plant-filled corner, it is powered by
	<span class='font-weight-bold link cl' @click='click(`staticpi_backend`)'>staticPi</span>, and is the companion to the <span class='font-weight-bold cl link' @click='click(`leafcast_vue`)'>Leafcast site</span>.
	<br>
	<br>
	Built in <CHref text='Rust' />,
	<br><br>
	A previous, now outdated and unmaintained, Typescript <AHref href='https://github.com/mrjackwills/leafcast_pi/tree/typescript' text='branch' /> is available in the GitHub repository.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/leafcast_pi.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/leafcast_pi.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	emits('set_index', name);
};
const emits = defineEmits([ 'set_index' ]);
</script>