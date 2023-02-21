<template>
	<v-footer
		color='transparent'
		id='footer'
		absolute
		app
	>
		<v-row justify='center' align='center' class='no-gutters ma-0 pa-0 mt-4'>

			<v-col cols='auto' class='no-gutters ma-0 pa-0' @click='buildInfo'>
				
				<v-chip
					:ripple='false'
					:color='color'
					class='elevation-0 cl font-weight-bold'
					variant='outlined'
					pill
				>
					<section v-if='showBuild' >
						<span>site version: {{ env.version }}</span>
						<span class='ml-3 '>built: {{ env.build_date }}</span>
					</section>

					<section v-else >
						<v-icon :color='color' class='mr-2' :icon='mdiInformationOutline' />
						<span>
							mrjackwills 2023 -
						</span>
					</section>
					
				</v-chip>
			</v-col>
		</v-row>
			
	</v-footer>
</template>

<script setup lang='ts'>

import { env } from '@/services/env';
import { mdiInformationOutline } from '@mdi/js';

onBeforeUnmount(() => {
	clearTimeout(buildTimeout.value);

});

const color = computed((): string => {
	return darkmodeModule().color;
});

const buildTimeout = ref(0);
const showBuild = ref(false);

/**
 ** Show build date on version number click if authed
 */
const buildInfo = (): void => {
	showBuild.value = !showBuild.value;
	clearTimeout(buildTimeout.value);
	if (showBuild) buildTimeout.value = window.setTimeout(() => {
		showBuild.value = false;
	}, 5000);
};

</script>
