<template>
	recursive
	<br>
	<br>
	Built in <CHref txt='Vue' />,
	with <CHref txt='TypeScript' />,
	styled with <CHref txt='Vuetify' />,
	and deployed via <CHref txt='Nginx' />.

</template>

<script setup lang="ts">
import DarkJpg from '@/assets/jpg/mrjackwills_dark_desktop.jpg';
import DarkWebp from '@/assets/webp/mrjackwills_dark_desktop.webp';
import LightJpg from '@/assets/jpg/mrjackwills_light_desktop.jpg';
import LightWebp from '@/assets/webp/mrjackwills_light_desktop.webp';
import MobileDarkJpg from '@/assets/jpg/mrjackwills_dark_mobile.jpg';
import MobileDarkWebp from '@/assets/webp/mrjackwills_dark_mobile.webp';
import MobileLightJpg from '@/assets/jpg/mrjackwills_light_mobile.jpg';
import MobileLightWebp from '@/assets/webp/mrjackwills_light_mobile.webp';

const image_store = imageModule();

onMounted(() => {
	update_images();
});

const update_images = (): void => {
	image_store.set_image(jpg.value);
	image_store.set_webp(webp.value);

};

const darkmode = computed((): boolean => {
	return darkmodeModule().darkmode;
});

const mobile = computed((): boolean => {
	return mobileModule().mobile;
});

const webp = computed((): string => {
	if (darkmode.value) {
		return mobileModule().mobile ? MobileDarkWebp : DarkWebp;
	} else {
		return mobileModule().mobile? MobileLightWebp : LightWebp;
	}
});

const jpg = computed((): string => {
	if (darkmode.value) {
		return mobileModule().mobile ? MobileDarkJpg : DarkJpg;
	} else {
		return mobileModule().mobile ? MobileLightJpg : LightJpg;
	}
});

watch(mobile, (_) => {
	update_images();
});

watch(darkmode, (_) => {
	update_images();
});

</script>