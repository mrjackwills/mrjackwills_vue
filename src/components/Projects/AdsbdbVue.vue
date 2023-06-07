<template>
	adsbdb is a free, open, public flightroute & aircraft callsign API, using an asynchronous and multithreaded approach, and allows anybody to query for;
	<ul class='ml-10 mt-4 mb-n4'>
		<li>
			over 175,000 aircraft, by registration or <AHref :href='href_icao_adsbdb' text='hex code' />
		</li>
		<li>
			over 100,000 flightroutes by callsign
		</li>
		<li>
			over 6,000 airlines by short code
		</li>
	</ul>
	<BackendApi/>
	<TSBranch repo='adsbdb' />

</template>

<script setup lang="ts">
import Png from '@/assets/png/adsbdb.png';
import Webp from '@/assets/webp/adsbdb.webp';

onMounted(() => {
	imageModule().set_image(Png);
	imageModule().set_webp(Webp);
});

const href_icao_adsbdb= 'https://en.wikipedia.org/wiki/Aviation_transponder_interrogation_modes#ICAO_24-bit_address';

</script>