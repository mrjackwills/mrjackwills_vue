<template>
	oxker is a simple tui to view & control docker containers, using an asynchronous and multithreaded architecture. It is published to <AHref :href='href_crates' text='crates.io' />,
	<AHref :href='href_dockerhub' text='DockerHub' />, and <AHref :href='href_ghcr' text='ghcr' />.
	Using a <AHref :href='href_github_action' text='GitHub Action'/>, executables for Linux x86, armv6 & arm64, and Windows x86 platforms, are automatically built.
	<br>
	Inspired by <AHref :href='href_lazy_docker' text='Lazy Docker' />, but created with an aim to work even more proficiently  on low powered Raspberry Pi Zero computers.
	<br>
	<br>
	Built in <CHref text='Rust'/>.
</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/oxker.jpg';
import Webp from '@/assets/webp/oxker.webp';

const href_dockerhub = 'https://hub.docker.com/r/mrjackwills/oxker';
const href_crates ='https://crates.io/crates/oxker';
const href_github_action ='https://github.com/mrjackwills/oxker/blob/main/.github/workflows/create_release_and_build.yml';
const href_lazy_docker = 'https://github.com/jesseduffield/lazydocker';
const href_ghcr = 'https://ghcr.io/mrjackwills/oxker';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

</script>