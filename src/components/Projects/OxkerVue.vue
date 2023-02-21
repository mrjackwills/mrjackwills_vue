<template>
	oxker is a simple tui to view & control docker containers, published to <AHref href='https://crates.io/crates/oxker' text='crates.io' />
	& <AHref href='https://hub.docker.com/r/mrjackwills/oxker' text='DockerHub' />. It has automated builds, via a
	<AHref href='https://github.com/mrjackwills/oxker/blob/main/.github/workflows/create_release_and_build.yml' text='GitHub Action'/>, for Liunx x86, armv6 & arm64, and Windows x86 platforms.
	Inspired by <AHref href='https://github.com/jesseduffield/lazydocker' text='Lazy Docker' />, but created with an aim to work even more profeciently on low powered Raspberry Pi Zero computers.
	<br>
	<br>
	Built in <CHref text='Rust'/>
</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import CHref from '@/components/CHref.vue';
import Jpg from '@/assets/jpg/oxker.jpg';
import type { TGithubRepos } from '@/types';
import Webp from '@/assets/webp/oxker.webp';

onMounted(() => {
	imageModule().set_image(Jpg);
	imageModule().set_webp(Webp);
});

const _click = (name: TGithubRepos): void => {
	emits('set_index', name);
};
const emits = defineEmits([ 'set_index' ]);
</script>