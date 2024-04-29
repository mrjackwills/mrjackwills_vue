<template>
	<v-row align='start' justify='space-around' class='mt-md-4 ma-0 pa-0' >
				
		<v-col cols='11' md='8' class='ma-0 pa-0'>

			<v-container class='card_height ma-a pa-0'>
			
				<v-row justify="center">
					<v-col cols="auto" class="mt-4 text-h1 text-red-darken-4">
						<v-icon :icon="mdiAlertOctagon" />

					</v-col>
				</v-row>

				<v-row justify="center">
					<v-col cols="auto" class="text-h2">
						Page not found
					</v-col>
				</v-row>
				
				
			
			</v-container>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import {mdiAlertOctagon} from '@mdi/js'

const darkmodeStore = darkmodeModule();


const dark_mode = computed({
	get (): boolean {
		return darkmodeStore.darkmode;
	},
	set (b: boolean): void {
		darkmodeStore.set_darkmode(b);
	}
});

</script>
