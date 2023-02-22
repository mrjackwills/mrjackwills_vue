<template>
	The Leafcast site is a website/PWA, that enables a user to view live imagery of a plant-filled corner.
	<Companion repo='leafcast_pi' />
	<UseStaticPi />
	<FrontendVue />
	
</template>

<script setup lang="ts">
import Companion from '@/components/CompanionVue.vue';
import FrontendVue from '@/components/FrontendVue.vue';
import Jpg from '@/assets/jpg/leafcast_vue.jpg';
import Webp from '@/assets/webp/leafcast_vue.webp';
import UseStaticPi from '@/components/UseStaticPi.vue';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>