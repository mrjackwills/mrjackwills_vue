<template>
	The Leafcast client is the backend code, built specifically for a <AHref href='https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/' text='Raspberry Pi Zero 2 W' /> with a
	<AHref href='https://www.raspberrypi.com/products/camera-module-v2/' text='Pi Camera' />, that continually photographs the plant-filled corner.
	<Companion repo='leafcast_vue' />
	<UseStaticPi />
	<br>
	<br>
	Built in <CHref text='Rust' />.
	<TSBranch repo='leafcast_pi' />

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Companion from '@/components/CompanionVue.vue';
import TSBranch from '@/components/TSBranch.vue';
import Jpg from '@/assets/jpg/leafcast_pi.jpg';
import UseStaticPi from '@/components/UseStaticPi.vue';
import Webp from '@/assets/webp/leafcast_pi.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>