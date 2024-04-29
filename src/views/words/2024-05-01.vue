<template>
	<v-row align='start' justify='space-around' class='mt-md-4 ma-0 pa-0'>

		<v-col cols='11' md='8' class='ma-0 pa-0'>

			<v-container class='card_height ma-a pa-0'>
				<v-row class="mb-4">

					<v-col>

						{{ date }}
						<br>
						<span class="text-h4">
							{{ title }}

						</span>
					</v-col>
				</v-row>
				<p>
					Yes, the title is indeed hyperbolic incendiary click-bait, the use case that I am detailing here
					is incredible niche, and some would argue mostly pointless, but by using
					<AHref :to='links.rust.to' :txt='links.rust.txt' />, I was able to save over $500, can continue to
					do so, and have a number of things to say about it.
				</p>
				<br>
				<p>
					This rambling post touches on traits, async, generics, multi-threading, SQL, deserializing,
					channels, macros, web-scraping, whilst using the Rust
					<AHref :to='links.rust_std.to' :txt='links.rust_std.txt' />, and as well as popular
					powerful crates like as
					<AHref :to='links.tokio.to' :txt='links.tokio.txt' />,
					<AHref :to='links.serde.to' :txt='links.serde.txt' />,
					<AHref :to='links.sqlx.to' :txt='links.sqlx.txt' />,
					<AHref :to='links.reqwest.to' :txt='links.reqwest.txt' /> and more.

				</p>

				<!-- first article -->
			</v-container>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">

// todo add parktitle etc


const title = 'Save over $500 a year using Rust';
const date = '2024-05-01';


const links = {
	reqwest: {
		to: "https://github.com/seanmonstar/reqwest",
		txt: 'reqwest'
	},
	rust: {
		to: "https://rust-lang.org",
		txt: 'Rust'
	},
	rust_std: {
		to: "https://doc.rust-lang.org/std",
		txt: 'standard library'
	},

	serde: {
		to: "https://github.com/serde-rs/serde",
		txt: 'serde'
	},
	sqlx: {
		to: "https://github.com/launchbadge/sqlx",
		txt: 'sqlx'
	},
	tokio: {
		to: "https://github.com/tokio-rs/tokio",
		txt: 'tokio'
	},
}


// defineProps<{title: string, date: string}>();

// import type { TGithubRepos, TProject, u } from '@/types';

// import AHref from '@/components/AHref.vue';

// const darkmodeStore = darkmodeModule();


// const dark_mode = computed({
// 	get (): boolean {
// 		return darkmodeStore.darkmode;
// 	},
// 	set (b: boolean): void {
// 		darkmodeStore.set_darkmode(b);
// 	}
// });


// const articles= [
// 	{
// 		date: '2024-05-01',
// 		text: 'Save $500 a year using Rust',
// 		href: 'todo',
// 		tooltip: 'tooltip todo'
// 	}
// ]
</script>
