<template>
	The Meal Pedant site is the frontend PWA for a pedantic and meticulous daily log of evening meals. It enables an authenticated user to views the meals, whilst Admin Users
	are able to add, edit, and delete meals, as well are perform Administrative actions for the backend.
	<Companion repo='mealpedant_api' />.
	<FrontendVue />
	
</template>

<script setup lang="ts">
import Companion from '@/components/CompanionVue.vue';
import FrontendVue from '@/components/FrontendVue.vue';
import Jpg from '@/assets/jpg/mealpedant_vue.jpg';
import Webp from '@/assets/webp/mealpedant_vue.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>