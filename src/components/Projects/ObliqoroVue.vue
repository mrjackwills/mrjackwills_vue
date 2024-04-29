<template>
	Obliqoro is a cross platform GUI application, although currently only tested and published for Windows and Linux.
	<br>
	<br>
	It combines the creative approach of <AHref to='https://en.wikipedia.org/wiki/Oblique_Strategies' text='Oblique Strategies' />,
	with the time management system of the <AHref to='https://en.wikipedia.org/wiki/Pomodoro_Technique' text='Pomodoro Technique'/>.
	<br>
	<br>
	Built using <CHref txt='tauri' />
	in <CHref txt='Rust' /> and <CHref txt='Vue' />,
	with <CHref txt='TypeScript' />,
	data stored using <CHref txt='SQLite' />,
	and styled with <CHref txt='Vuetify' />.

</template>

<script setup lang="ts">
import Png from '@/assets/png/obliqoro.png';
import Webp from '@/assets/webp/obliqoro.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

</script>