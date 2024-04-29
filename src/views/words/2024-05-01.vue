<template>
	<v-row align='start' justify='space-around' class='mt-md-4 ma-0 pa-0'>

		<v-col cols='11' md='8' class='ma-0 pa-0'>

			<v-container class='card_height ma-a pa-0'>
				<v-row class='mb-4'>

					<v-col>

						{{ date }}
						<br>
						<span class='text-h3 font-weight-bold'>
							{{ title }}

						</span>
					</v-col>
				</v-row>
				<section class='article-font'>

		
				<p>
					Yes, the title is indeed hyperbolic incendiary click-bait, the use case that I am detailing here
					is incredible niche, and some would argue mostly pointless, but by using
					<AHref :to='links.rust.to' :txt='links.rust.txt' />, I was able to save over $500, can continue to
					do so, and had an urge to write about various aspects of the process.
				</p>
				<br>
				<p>
					This rambling post touches on traits, async, generics, multi-threading, SQL, deserializing,
					channels, macros, web-scraping, whilst using the Rust
					<AHref :to='links.rust_std.to' :txt='links.rust_std.txt' />, as well as popular,
					powerful crates like
					<AHref :to='links.tokio.to' :txt='links.tokio.txt' />,
					<AHref :to='links.serde.to' :txt='links.serde.txt' />,
					<AHref :to='links.sqlx.to' :txt='links.sqlx.txt' />,
					<AHref :to='links.reqwest.to' :txt='links.reqwest.txt' /> and more.

				</p>
				<br>
				<p>
					I created and maintain
					<AHref :to='links.adsbdb.to' :txt='links.adsbdb.txt' />, which is a public API for searching
					aircraft, flight routes and airlines.
					First
					<AHref :to='links.adsbdb_typescript.to' :txt='links.adsbdb_typescript.txt' /> in TypeScript,
					and then
					<AHref :to='links.adsbdb_rust.to' :txt='links.adsbdb_rust.txt' /> in Rust.
					The data originally came from only a few sources, and was published with permission.
					However, I wanted users to be able to submit missing data, or data errors, to the
					<AHref :to='links.adsbdb_issue_page.to' :txt='links.adsbdb_issue_page.txt' /> in order to keep the
					database up to date.

				</p>
				<br>
				<p>
					A user kindly submitted an
					<AHref :to='links.adsbdb_data_issue.to' :text='links.adsbdb_data_issue.txt' />, listing a number of
					aircraft that weren’t in the database,
					but more importantly provided a link to a
					<AHref :to='links.caa_search.to' :text='links.caa_search.txt' /> tool that can be used to find any, and hopefully all, UK registered
					aircraft.
				</p>
				<br>
				<p>
					The CAA will happily
					<AHref :to='links.caa_pdf.to' :text='links.caa_pdf.txt' /> the entire dataset, for an excessive fee,
					delivered via Compact Disc. This is an issue for a number of reasons;
					<br>
				<ul class='ml-8'>
					<li>
						I don’t own any device that is capable of reading optical media, and haven’t done for
						at
						least 10 years.
					</li>
					<li>
						adsbdb is a hobby service, which I run on a
						<AHref :to='links.hetzner.to' :txt='links.hetzner.txt' />, and which I will never charge, for nor make any money from.
					</li>
					<li>
						Other countries simply provide this information to download directly for free as a CSV
						or
						similar, see <span v-for='(item, index) in countries_data' :key='index'>
							<AHref :to='item.to' :txt='item.txt' />,
						</span>
						and others.
					</li>
				</ul>


				</p>
				<br>
				<p>
					So, lets search for
					<AHref :to='links.gviij.to' :text='links.gviij.txt' /> and see what result we get back.
				</p>
			</section>
			</v-container>
		</v-col>
	</v-row>
</template>

<script setup lang='ts'>
import AHref from '@/components/AHref.vue';


// todo add parktitle etc


const title = 'Save over $500 a year using Rust';
const date = '2024-05-01';


const countries_data = [
	{
		to: 'https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download',
		txt: 'The United States of America',
	},
	{
		to: ' https://wwwapps.tc.gc.ca/Saf-Sec-Sur/2/CCARCS-RIACC/DDZip.aspx',
		txt: 'Canada',
	},
	{
		to: ' https://immat.aviation-civile.gouv.fr/immat/servlet/aeronef_liste.html',
		txt: 'France',
	},
	{
		to: 'https://www.casa.gov.au/aircraft/aircraft-registration/data-files-registered-aircraft#Tipstodownloadthefiles',
		txt: 'Austrailia',
	},
];

const links = {
	adsbdb: {
		to: 'https://adsbdb.com',
		txt: 'adsbdb'
	},

	adsbdb_data_issue: {
		to: 'https://github.com/mrjackwills/adsbdb/issues/27',
		txt: 'issue'
	},
	adsbdb_issue_page: {
		to: 'https://www.github.com/mrjackwills/adsbdb/issues',
		txt: 'issues page'
	},
	adsbdb_typescript: {
		to: 'https://github.com/mrjackwills/adsbdb/tree/typescript',
		txt: 'written'
	},
	adsbdb_rust: {
		to: 'https://www.github.com/mrjackwills/adsbdb',
		txt: 're-written'
	},
	caa_search: {
		to: 'https://www.caa.co.uk/aircraft-register/g-info/search-g-info/',
		txt: 'CAA search'
	},
	caa_pdf: {
		to: 'https://www.caa.co.uk/media/1koaifpt/uk-register-information-service-order-form-2023.pdf',
		txt: 'provide',
	},
	gviij: {
		to: 'https://api.adsbdb.com/v0/aircraft/g-viij',
		txt: 'G-VIIJ'
	},
	hetzner: {
		to: 'https://hetzner.com/cloud',
		txt: 'cheap VPS'
	},
	reqwest: {
		to: 'https://github.com/seanmonstar/reqwest',
		txt: 'reqwest'
	},
	rust: {
		to: 'https://rust-lang.org',
		txt: 'Rust'
	},
	rust_std: {
		to: 'https://doc.rust-lang.org/std',
		txt: 'standard library'
	},
	serde: {
		to: 'https://github.com/serde-rs/serde',
		txt: 'serde'
	},
	sqlx: {
		to: 'https://github.com/launchbadge/sqlx',
		txt: 'sqlx'
	},
	tokio: {
		to: 'https://github.com/tokio-rs/tokio',
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


<style>
.article-font{
	font-size: 1.25rem;
}

 /* {
	color: red;
} */
</style>