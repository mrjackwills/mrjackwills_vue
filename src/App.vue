<template>
	<v-app class='ma-0 pa-0 fill-height' :class='bg'>
		<v-main>
			<AppBar />
			<RouterView />
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

const { updateServiceWorker } = useRegisterSW();

if ('serviceWorker' in navigator) {
	registerSW({
		onNeedRefresh () {
			appUpdate();
		}
	});
}

const mobile = useDisplay().mdAndDown;

watch(mobile, (i) => {
	mobileModule().set_mobile(i);
});
const platform = useDisplay().platform;

watch(platform, (i) => {
	mobileModule().set_android_ios(i.ios || i.android);
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


// todo use something in pinia for this, 
// need to add meta information as well, e.g. twitter links facebook etc

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

</style>