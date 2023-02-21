<template>
	adsbdb is a free, open, public flightroute & aircraft callsign API,
	and allows anybody to query for over 175,000 aircraft, by registration or MODE_S hex code; 100,000 flighroutes by callsign; and 6,000 airlines by short code.
	<br>
	<br>
	Built in <CHref text='Rust' />,
	with data stored using <CHref text='PostgreSQL' /> and <CHref text='Redis' />,
	and deployed via <CHref text='Docker' /> and <CHref text='Nginx' />,
	<br><br>
	A previous, now outdated and unmaintained, Typescript <AHref href='https://github.com/mrjackwills/adsbdb/tree/typescript' text='branch' /> is available in the GitHub repository.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Png from '@/assets/png/adsbdb.png';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/adsbdb.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

const _click = (name: TGithubRepos): void => {
	emits('set_index', name);
};
const emits = defineEmits([ 'set_index' ]);

</script>