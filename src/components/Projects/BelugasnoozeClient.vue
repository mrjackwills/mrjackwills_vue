<template>
	The Beluga Snooze client is the specifically built client for a <AHref :href='href_pizero' text='Raspberry Pi Zero W' />
	and a <AHref :href='href_blinkt' text='Blinkt LED strip' />, which functions as a sunrise alarm clock.
	<br><br>
	It is the backend companion to the <span class='font-weight-bold cl link' @click='click(`belugasnooze_vue`)'>belugasnooze site</span>,
	and is powered by <span class='font-weight-bold link cl' @click='click(`staticpi_backend`)'>staticPi</span>,
	<br>
	<br>
	Built in <CHref text='Rust' />,
	with data stored using <CHref text='SQLite' />,
	and deployed via <CHref text='Docker' />.
	<br><br>
	A previous, now outdated and unmaintained, Typescript <AHref :href='href_typescript' text='branch' /> is available in the GitHub repository.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/belugasnooze_pi.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/belugasnooze_pi.webp';

const href_pizero = 'https://www.raspberrypi.com/products/raspberry-pi-zero-w';
const href_blinkt ='https://shop.pimoroni.com/products/blinkt';
const href_typescript ='https://github.com/mrjackwills/leafcast_pi/tree/typescript';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const click = (name: TGithubRepos): void => {
	currentProjectModule().set_current_project(name);
};
</script>