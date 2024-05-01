<template>
	<v-row align='start' justify='space-around' class='mt-md-4 ma-0 pa-0' >
				
		<v-col cols='auto' class='ma-0 pa-0'>

			<v-container class='card_height ma-a pa-0 font-boost'>
				
				<ul class='mb-6'>
					<li v-for='(item,index) in articles' :key='index'>
						{{ item.date }}
						<AHref class='ml-2' tooltip='something' :to='create_href(item.title)' :id='`words_${index}`' :internal='true' :txt='item.title' />
					</li>
				</ul>

			<!-- More in the pipeline -->
			</v-container>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { articles, create_href } from '@/router';

import AHref from '@/components/AHref.vue';

// const darkmodeStore = darkmodeModule();

// const dark_mode = computed({
// 	get (): boolean {
// 		return darkmodeStore.darkmode;
// 	},
// 	set (b: boolean): void {
// 		darkmodeStore.set_darkmode(b);
// 	}
// });

// const create_href = (text: string): string => `/words/${ text.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

// const a= [
// 	{
// 		date: '2024-05-01',
// 		text: 'Save over $500 a year using Rust',
// 		href: 'todo',
// 		tooltip: 'Aircraft data scraping'
		
// 	}
// ]
</script>

<style>
/* .font-boost{
	font-size: 1.4rem;
} */
</style>
