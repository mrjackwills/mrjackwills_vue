<template>
	Obliqoro is a cross platform GUI application, although currently only tested and published for Windows and Linux.
	<br>
	<br>
	It combines the creative approach of <AHref href='https://en.wikipedia.org/wiki/Oblique_Strategies' text='Oblique Strategies' />,
	with the time management system of the <AHref href='https://en.wikipedia.org/wiki/Pomodoro_Technique' text='Pomodoro Technique'/>.
	<br>
	<br>
	Built using <CHref text='tauri' />
	in <CHref text='Rust' /> and <CHref text='Vue' />,
	with <CHref text='TypeScript' />,
	data stored using <CHref text='SQLite' />,
	and styled with <CHref text='Vuetify' />.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Png from '@/assets/png/obliqoro.png';
import Webp from '@/assets/webp/obliqoro.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

</script>