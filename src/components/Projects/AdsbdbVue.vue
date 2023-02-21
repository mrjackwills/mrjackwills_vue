<template>
	adsbdb is a free, open, public flightroute & aircraft callsign API, using an asynchronous and multithreaded approach, and allows anybody to query
	<ul class='ml-10 mt-4'>
		<li>
			for over 175,000 aircraft, by registration or <AHref :href='href_icao_adsbdb' text='hex code' />
		</li>
		<li>
			100,000 flightroutes by callsign
		</li>
		<li>
			6,000 airlines by short code
		</li>
	</ul>
	<br>
	Built in <CHref text='Rust' />,
	with data stored using <CHref text='PostgreSQL' /> and <CHref text='Redis' />,
	and deployed via <CHref text='Docker' /> and <CHref text='Nginx' />.
	<br><br>
	A previous, now outdated and unmaintained, Typescript <AHref :href='href_typescript_branch' text='branch' /> is available in the GitHub repository.

</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Png from '@/assets/png/adsbdb.png';
import Webp from '@/assets/webp/adsbdb.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

const href_typescript_branch = 'https://github.com/mrjackwills/adsbdb/tree/typescript';
const href_icao_adsbdb= 'https://en.wikipedia.org/wiki/Aviation_transponder_interrogation_modes#ICAO_24-bit_address';

</script>