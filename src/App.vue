<template>
	<v-app class='ma-0 pa-0 unselectable' :class='bg'>
		<v-main>
			<AppBar />
			<RouterView  />
			<AppSnackBar />
		</v-main>
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
	mobileModule().set_mobile(mobile.value);
});

onBeforeMount(() => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	document.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault();
	});

	if (!darkmodeModule().init) {
		darkmodeModule().set_darkmode(useDark().value);
	}
	console.log(ff);
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
		message: 'Downloading Updates',
		loading: true,
		timeout: 4500,
	});
	window.setTimeout(() => updateServiceWorker(), 5000);
	
};

// const log_me =`
// Y88b   d88P                     888                                           888    888
//  Y88b d88P                      888                                           888    888
//   Y88o88P                       888                                           888    888
//    Y888P  .d88b.  888  888      888  888 88888b.   .d88b.  888  888  888      888888 88888b.   .d88b.
//     888  d88""88b 888  888      888 .88P 888 "88b d88""88b 888  888  888      888    888 "88b d8P  Y8b
//     888  888  888 888  888      888888K  888  888 888  888 888  888  888      888    888  888 88888888
//     888  Y88..88P Y88b 888      888 "88b 888  888 Y88..88P Y88b 888 d88P      Y88b.  888  888 Y8b.
//     888   "Y88P"   "Y88888      888  888 888  888  "Y88P"   "Y8888888P"        "Y888 888  888  "Y8888
                                                                                                            
//                                                                               888               d8b
//                                                                               888               Y8P
//                                                                               888
// .d8888b   .d88b.  888  888 888d888 .d8888b .d88b.        .d8888b .d88b.   .d88888  .d88b.       888 .d8888b
// 88K      d88""88b 888  888 888P"  d88P"   d8P  Y8b      d88P"   d88""88b d88" 888 d8P  Y8b      888 88K
// "Y8888b. 888  888 888  888 888    888     88888888      888     888  888 888  888 88888888      888 "Y8888b.
//      X88 Y88..88P Y88b 888 888    Y88b.   Y8b.          Y88b.   Y88..88P Y88b 888 Y8b.          888      X88
//  88888P'  "Y88P"   "Y88888 888     "Y8888P "Y8888        "Y8888P "Y88P"   "Y88888  "Y8888       888  88888P'
                                                                                                            
//          888 888                              .d8888b.  d8b 888    888    888          888     .d8888b.
//          888 888                             d88P  Y88b Y8P 888    888    888          888    d88P  Y88b
//          888 888                             888    888     888    888    888          888         .d88P
//  8888b.  888 888       .d88b.  88888b.       888        888 888888 8888888888 888  888 88888b.   .d88P"
//     "88b 888 888      d88""88b 888 "88b      888  88888 888 888    888    888 888  888 888 "88b  888"
// .d888888 888 888      888  888 888  888      888    888 888 888    888    888 888  888 888  888  888
// 888  888 888 888      Y88..88P 888  888      Y88b  d88P 888 Y88b.  888    888 Y88b 888 888 d88P
// "Y888888 888 888       "Y88P"  888  888       "Y8888P88 888  "Y888 888    888  "Y88888 88888P"   888
                                                                                                            
// https://www.github.com/mrjackwills/mrjackwills_vue`;

// const gg =`
// ██╗   ██╗ ██████╗ ██╗   ██╗    ██╗  ██╗███╗   ██╗ ██████╗ ██╗    ██╗    ████████╗██╗  ██╗███████╗
// ╚██╗ ██╔╝██╔═══██╗██║   ██║    ██║ ██╔╝████╗  ██║██╔═══██╗██║    ██║    ╚══██╔══╝██║  ██║██╔════╝
//  ╚████╔╝ ██║   ██║██║   ██║    █████╔╝ ██╔██╗ ██║██║   ██║██║ █╗ ██║       ██║   ███████║█████╗
//   ╚██╔╝  ██║   ██║██║   ██║    ██╔═██╗ ██║╚██╗██║██║   ██║██║███╗██║       ██║   ██╔══██║██╔══╝
//    ██║   ╚██████╔╝╚██████╔╝    ██║  ██╗██║ ╚████║╚██████╔╝╚███╔███╔╝       ██║   ██║  ██║███████╗
//    ╚═╝    ╚═════╝  ╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝        ╚═╝   ╚═╝  ╚═╝╚══════╝
// ███████╗ ██████╗ ██╗   ██╗██████╗  ██████╗███████╗     ██████╗ ██████╗ ██████╗ ███████╗    ██╗███████╗
// ██╔════╝██╔═══██╗██║   ██║██╔══██╗██╔════╝██╔════╝    ██╔════╝██╔═══██╗██╔══██╗██╔════╝    ██║██╔════╝
// ███████╗██║   ██║██║   ██║██████╔╝██║     █████╗      ██║     ██║   ██║██║  ██║█████╗      ██║███████╗
// ╚════██║██║   ██║██║   ██║██╔══██╗██║     ██╔══╝      ██║     ██║   ██║██║  ██║██╔══╝      ██║╚════██║
// ███████║╚██████╔╝╚██████╔╝██║  ██║╚██████╗███████╗    ╚██████╗╚██████╔╝██████╔╝███████╗    ██║███████║
// ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚══════╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝    ╚═╝╚══════╝
//  ██████╗ ███╗   ██╗     ██████╗ ██╗████████╗██╗  ██╗██╗   ██╗██████╗ ██████╗
// ██╔═══██╗████╗  ██║    ██╔════╝ ██║╚══██╔══╝██║  ██║██║   ██║██╔══██╗╚════██╗
// ██║   ██║██╔██╗ ██║    ██║  ███╗██║   ██║   ███████║██║   ██║██████╔╝  ▄███╔╝
// ██║   ██║██║╚██╗██║    ██║   ██║██║   ██║   ██╔══██║██║   ██║██╔══██╗  ▀▀══╝
// ╚██████╔╝██║ ╚████║    ╚██████╔╝██║   ██║   ██║  ██║╚██████╔╝██████╔╝  ██╗
//  ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝   ╚═╝

// https://www.github.com/mrjackwills/mrjackwills_vue`;

const ff=`                                                                             ▄▄          
                                                                           ▀███          
                                                                             ██          
▄██▀███ ▄██▀██▄▀███  ▀███ ▀███▄███ ▄██▀██  ▄▄█▀██     ▄██▀██  ▄██▀██▄   ▄█▀▀███   ▄▄█▀██ 
██   ▀▀██▀   ▀██ ██    ██   ██▀ ▀▀██▀  ██ ▄█▀   ██   ██▀  ██ ██▀   ▀██▄██    ██  ▄█▀   ██
▀█████▄██     ██ ██    ██   ██    ██      ██▀▀▀▀▀▀   ██      ██     █████    ██  ██▀▀▀▀▀▀
█▄   ████▄   ▄██ ██    ██   ██    ██▄    ▄██▄    ▄   ██▄    ▄██▄   ▄██▀██    ██  ██▄    ▄
██████▀ ▀█████▀  ▀████▀███▄████▄   █████▀  ▀█████▀    █████▀  ▀█████▀  ▀████▀███▄ ▀█████▀
                                                                                         
                                    ▄▄                                  ▄▄        
                         ▄▄█▀▀▀█▄█  ██   ██  ▀████▀  ▀████▀▀           ▄██        
                       ▄██▀     ▀█       ██    ██      ██               ██        
 ▄██▀██▄▀████████▄     ██▀       ▀▀███ ██████  ██      ██  ▀███  ▀███   ██▄████▄  
██▀   ▀██ ██    ██     ██           ██   ██    ██████████    ██    ██   ██    ▀██ 
██     ██ ██    ██     ██▄    ▀████ ██   ██    ██      ██    ██    ██   ██     ██ 
██▄   ▄██ ██    ██     ▀██▄     ██  ██   ██    ██      ██    ██    ██   ██▄   ▄██ 
 ▀█████▀▄████  ████▄     ▀▀███████▄████▄ ▀████████▄  ▄████▄▄ ▀████▀███▄ █▀█████▀  
                                                                                   
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