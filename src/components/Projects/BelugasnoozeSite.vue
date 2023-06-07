<template>
	The Beluga Snooze site is a website/PWA, that enables a user to control a sunrise alarm clock.
	<CompanionVue repo='belugasnooze_pi' />
	<UseStaticPi />
	<FrontendVue />
	
</template>

<script setup lang="ts">
import Jpg from '@/assets/jpg/belugasnooze_vue.jpg';
import Webp from '@/assets/webp/belugasnooze_vue.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>
