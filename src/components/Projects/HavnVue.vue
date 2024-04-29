<template>
	havn is a fast configurable port scanner with reasonable defaults. It is lightweight, configurable, and uses asynchronous multithreaded requests to deliver rapid reliable results.
	It is published to <AHref :to='href_crates' text='crates.io' />,
	<AHref :to='href_dockerhub' text='DockerHub' />, and <AHref :to='href_ghcr' text='ghcr' />.
	<br>
	<br>
	Built in <CHref txt='Rust'/>.
</template>

<script setup lang="ts">
import Gif from '@/assets/gif/havn.gif';
import Webp from '@/assets/webp/havn.webp';

const href_dockerhub = 'https://hub.docker.com/r/mrjackwills/havn';
const href_crates ='https://crates.io/crates/havn';
const href_ghcr = 'https://ghcr.io/mrjackwills/havn';

onMounted(() => {
	imageModule().set_image(Gif);
	imageModule().set_webp(Webp);
});

</script>