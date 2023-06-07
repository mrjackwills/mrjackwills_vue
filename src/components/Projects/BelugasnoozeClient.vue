<template>
	The Beluga Snooze client is the specifically built client for a <AHref :href='href_pizero' text='Raspberry Pi Zero W' />,
	with an accompanying <AHref :href='href_blinkt' text='Blinkt LED strip' />, which functions as a sunrise alarm clock.
	<CompanionVue repo='belugasnooze_vue' />
	<UseStaticPi />
	<br>
	<br>
	Built in <CHref text='Rust' />,
	with data stored using <CHref text='SQLite' />,
	and deployed via <CHref text='Docker' />.
	<TSBranch repo='belugasnooze_pi' />

</template>

<script setup lang="ts">
import Jpg from '@/assets/jpg/belugasnooze_pi.jpg';
import Webp from '@/assets/webp/belugasnooze_pi.webp';

const href_pizero = 'https://www.raspberrypi.com/products/raspberry-pi-zero-w';
const href_blinkt ='https://shop.pimoroni.com/products/blinkt';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>