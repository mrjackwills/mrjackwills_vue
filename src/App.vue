<template>
	<v-app class='ma-0 pa-0 unselectable fill-height' :class='bg'>
		<v-main>
			<AppBar />
			<RouterView  />
			<AppSnackBar />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register';
import { snackSuccess } from '@/services/snack';
import { useDark } from '@vueuse/core';
import { useDisplay } from 'vuetify';
import { useHead } from '@vueuse/head';
import { useRegisterSW } from 'virtual:pwa-register/vue';
import AppBar from '@/components/AppBar.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppSnackBar from '@/components/SnackBar.vue';

const { updateServiceWorker } = useRegisterSW();

if ('serviceWorker' in navigator) {
	registerSW({
		onNeedRefresh () {
			appUpdate();

		}
	});
}

const mobile = useDisplay().mdAndDown;

watch(() => mobile.value, (i) => {
	mobileModule().set_mobile(i);
});

onMounted(() => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	window.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault();
	});
	mobileModule().set_mobile(mobile.value);
	const platform = useDisplay().platform.value;
	mobileModule().set_android_ios(platform.ios || platform.android);
});

onBeforeMount(() => {

	if (!darkmodeModule().init) {
		darkmodeModule().set_darkmode(useDark().value);
	}
	console.log(log_me);
});

const bg = computed((): string => {
	return darkmodeModule().bg_color;
});

useHead({
	title: `Mr Jack Wills`,

	meta: [
		{ name: 'description', content: `Mr Jack Wills` }
	],
	link: [
		{ rel: 'canonical', href: `https://www.mrjackwills.com` }
	]
});

const appUpdate = (): void => {
	snackSuccess({
		message: 'updating website',
		loading: true,
		timeout: 4500,
	});
	window.setTimeout(() => updateServiceWorker(), 5000);
	
};
const log_me =`                                                                             ▄▄          
                                                                           ▀███          
                                                                             ██          
▄██▀███ ▄██▀██▄▀███  ▀███ ▀███▄███ ▄██▀██  ▄▄█▀██     ▄██▀██  ▄██▀██▄   ▄█▀▀███   ▄▄█▀██ 
██   ▀▀██▀   ▀██ ██    ██   ██▀ ▀▀██▀  ██ ▄█▀   ██   ██▀  ██ ██▀   ▀██▄██    ██  ▄█▀   ██
▀█████▄██     ██ ██    ██   ██    ██      ██▀▀▀▀▀▀   ██      ██     █████    ██  ██▀▀▀▀▀▀
█▄   ████▄   ▄██ ██    ██   ██    ██▄    ▄██▄    ▄   ██▄    ▄██▄   ▄██▀██    ██  ██▄    ▄
██████▀ ▀█████▀  ▀████▀███▄████▄   █████▀  ▀█████▀    █████▀  ▀█████▀  ▀████▀███▄ ▀█████▀
                                                                                         
                                    ▄▄                                  ▄▄        
                         ▄▄█▀▀▀█▄█  ██   ██   ▀████▀  ▀████▀▀           ▄██        
                       ▄██▀     ▀█       ██     ██      ██               ██        
 ▄██▀██▄▀████████▄     ██▀       ▀▀███ ██████   ██      ██  ▀███  ▀███   ██▄████▄  
██▀   ▀██ ██    ██     ██           ██   ██     ██████████    ██    ██   ██    ▀██ 
██     ██ ██    ██     ██▄    ▀████ ██   ██     ██      ██    ██    ██   ██     ██ 
██▄   ▄██ ██    ██     ▀██▄     ██  ██   ██     ██      ██    ██    ██   ██▄   ▄██ 
 ▀█████▀▄████  ████▄     ▀▀███████▄████▄ ▀████ ████▄  ▄████▄▄ ▀████▀███▄ █▀█████▀  
                                                                                   
https://www.github.com/mrjackwills/mrjackwills_vue`;
</script>

<style>

.tooltip_light {
	background: white!important;
	color: black!important;
}

.tooltip_dark {
	background: black!important;
	color: white!important;
}

.v-application__wrap {
  min-height: 100dvh !important;
}
</style>