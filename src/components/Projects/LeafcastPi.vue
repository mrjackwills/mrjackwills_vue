<template>
	The Leafcast client is the backend code, built specifically for a <AHref href='https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/' text='Raspberry Pi Zero 2 W' /> with a
	<AHref href='https://www.raspberrypi.com/products/camera-module-v2/' text='Pi Camera' />, that continually photographs the plant-filled corner.
	<CompanionVue repo='leafcast_vue' />
	<UseStaticPi />
	<br>
	<br>
	Built in <CHref text='Rust' />.
	<TSBranch repo='leafcast_pi' />

</template>

<script setup lang="ts">
import Jpg from '@/assets/jpg/leafcast_pi.jpg';
import Webp from '@/assets/webp/leafcast_pi.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>