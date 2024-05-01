<template>
	<span class='font-weight-bold text-red-darken-4'>{{ text }}</span>
</template>

<script setup lang="ts">

defineProps<{text: string}>();

</script>