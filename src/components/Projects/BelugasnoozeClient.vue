<template>
	The Beluga Snooze client is the backend code, built specifically for a <AHref href='https://www.raspberrypi.com/products/raspberry-pi-zero-w' text='Raspberry Pi Zero W' />
	and a <AHref href='https://shop.pimoroni.com/products/blinkt' text='Blinkt LED strip' />, which functions as a sunrise alarm clock.
	It is powered by <span class='font-weight-bold link cl' @click='click(`staticpi_backend`)'>staticPi</span>,
	and is the companion to the <span class='font-weight-bold cl link' @click='click(`belugasnooze_vue`)'>belugasnooze site</span>.
	<br>
	<br>
	Built in <CHref text='Rust' />,
	with data stored using <CHref text='SQLite' />,
	and deployed via <CHref text='Docker' />.
	<br><br>
	A previous, now outdated and unmaintained, Typescript <AHref href='https://github.com/mrjackwills/leafcast_pi/tree/typescript' text='branch' /> is available in the GitHub repository.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/belugasnooze_pi.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/belugasnooze_pi.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	emits('set_index', name);
};
const emits = defineEmits([ 'set_index' ]);
</script>