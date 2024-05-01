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
						<AHref :to='links.rust.to' :txt='links.rust.txt' />, I was able to save over $500, can continue
						to
						do so, and had an urge to write about various aspects of the process.
					</p>
					<br>
					<p>
						This rambling post touches on traits, async, generics, multi-threading, SQL, deserializing,
						channels, macros, web-scraping, using the Rust
						<AHref :to='links.rust_std.to' :txt='links.rust_std.txt' />, as well as popular,
						powerful crates including
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
						<AHref :to='links.adsbdb_issue_page.to' :txt='links.adsbdb_issue_page.txt' /> in order to keep
						the
						database up to date.

					</p>
					<br>
					<p>
						A user kindly submitted an
						<AHref :to='links.adsbdb_data_issue.to' :text='links.adsbdb_data_issue.txt' />, listing a number
						of
						aircraft that weren’t in the database,
						but more importantly provided a link to a
						<AHref :to='links.caa_search.to' :text='links.caa_search.txt' /> tool that can be used to find
						any, and hopefully all, UK registered
						aircraft.
					</p>
					<br>
					<p>
						The CAA will happily
						<AHref :to='links.caa_pdf.to' :text='links.caa_pdf.txt' /> the entire dataset, for an excessive
						fee,
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
								<AHref :to='links.hetzner.to' :txt='links.hetzner.txt' />, and which I will never charge,
								for nor make any money from.
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
						So, lets search for an aircraft with registration
						<AHref :to='links.gviij.to' :text='links.gviij.txt' /> and see what result we get back.
						The CAA search tool looks promising, you can search via an aircraft’s registration, and it will
						return a smörgåsbord of information, more than is actually required for a new entry into adsbdb.
						<section class='my-4'>
							<v-row justify='space-around' align='center'>
								<v-col cols='7' md='5'>
									<v-row justify='center' class='ma-0 pa-0'>
										<v-col cols='12' class='ma-0 pa-0'>
											<v-img src='@/assets/blog/2024-05-01/gviij.jpg' class='ma-0 pa-0' alt='Photograph of BA G-VIIJ aircraft'>
												<template #sources>
													<source srcset='@/assets/blog/2024-05-01/gviij.webp'>
												</template>
											</v-img>
										</v-col>
									</v-row>
									<v-row justify='center' class='ma-0 pa-0 mb-2'>
										<v-col cols='auto' class='ma-0 pa-0 text-caption'>
											G-VIIJ as seen on 2023-11-13
										</v-col>
									</v-row>
								</v-col>

								<v-col cols='7' md='5'>
									<v-row justify='center' class='ma-0 pa-0'>
										<v-col cols='12' class='ma-0 pa-0'>
											<v-img src='@/assets/blog/2024-05-01/caa_search.jpg' class='ma-0 pa-0' alt='Screenshot of CAA search response when searching for G-VIIJ'>
												<template #sources>
													<source srcset='@/assets/blog/2024-05-01/caa_search.webp'>
												</template>
											</v-img>
										</v-col>
									</v-row>
									<v-row justify='center' class='ma-0 pa-0 mb-2'>
										<v-col cols='auto' class='ma-0 pa-0 text-caption'>
											CAA search result
										</v-col>
									</v-row>
								</v-col>
							</v-row>
						</section>
					</p>
					<p>
						When we delve into the browsers developer tools, we can see two requests are made.
						The first request, which sends a POST request to <span class='font-weight-bold text-red-darken-4'>https://ginfoapi.caa.co.uk/api/aircraft/search</span>,
						with the this body, and results in this response;
					</p>

					<!-- https://github.com/PrismJS/prism-themes -->

					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock cols='4' :code='post_body' :lang='"JSON"' label='request body'/>
						<CodeBlock cols='4' :code='post_response' :lang='"JSON"' label='request response'/>
					</v-row>

					This seems like a good start, but this response is nowhere near as information rich as rendered in the browser, so the second request must be where the good stuff is.

					Indeed, this second request, this time a GET request to <span class='font-weight-bold text-red-darken-4'>https://ginfoapi.caa.co.uk/api/aircraft/details/46457</span>,
					which id clearly appended with the <span class='font-weight-black'>AircraftID</span> obtained from the first request,
					returns a large response stuffed with all the detailed information that we are after.
					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock cols='auto' :code='caa_full_response' :lang='"JSON"' label='the full smörgåsbord response'/>
					</v-row>
					Unfortunately, one simply can't visit the URL from the GET request to see the data for yourself, as a ReCaptchaToken header is required, but more on that later.

					<!-- next -->

				</section>
			</v-container>
		</v-col>
	</v-row>
</template>

<script setup lang='ts'>
import AHref from '@/components/AHref.vue';

// const show_caa_full_response=ref(false);

const post_response = `[
	{
		"AircraftID": 46457,
		"Mark": "VIIJ",
		"SerialNo": "27492",
		"MilitarySerialNo": null,
		"AircraftType": "BOEING 777-236",
		"RegistrationStatus": "R"
	}
]`;
const post_body = `{
	"AircraftType": null,
	"AOCHolder": null,
	"ICAO24BitHex": null,
	"ICAOAircraftTypeDesignator": null,
	"MilitarySerialNumber": null,
	"RegisteredOwner": null,
	"Registration": "VIIJ",
	"SerialNumber": null,
	"IncludeDeregistered": false
}`;

const title = 'Saving £400 a year using Rust';
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
};

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

const caa_full_response = `{
    "RegistrationDetails": {
        "Mark": "VIIJ",
        "PreviousID": "NEW USA",
        "Status": "Registered",
        "CurrentRegistrationDate": "29-Dec-1997",
        "DeRegistrationDate": null,
        "Reason": null,
        "To": null
    },
    "AircraftDetails": {
        "Manufacturer": "BOEING COMPANY",
        "Type": "BOEING 777-236",
        "SerialNumber": "27492",
        "ICAO24BitAircraftAddress": {
            "Binary": "0100_0000_0000_0110_0001_0000",
            "Hex": "400610",
            "Octal": "20003020"
        },
        "PopularName": "-",
        "ICAOAircraftTypeDesignator": "B772",
        "AircraftClass": "FIXED-WING LANDPLANE",
        "BuildCategory": null,
        "EasaCategory": "CS-25 : Large Aeroplane",
        "Engines": [
            {
                "NumberOfEngines": 2,
                "Name": "GENERAL ELECTRIC CO GE90-85B ",
                "TotalNumberOfEngines": 2,
                "IsPropeller": false
            }
        ],
        "Mtow": "267619 kg",
        "TotalAirframeHours": "107436 at 24-Jul-2023",
        "YearBuild": 1997,
        "MaintenanceProgramme": "MP/BOEING 777/1000/GB0441",
        "Expiry": null,
        "OwnershipStatus": "Owned",
        "MaximumPassengers": "226",
        "MaximumTakeOffMass": "267619",
        "CofaDetails": {
            "CofaCategory": "CAA Certificate of Airworthiness",
            "CofaValidityExpiryLabel": "EASA ARC Expiry:",
            "CofaValidityExpiry": "21-Aug-2024",
            "CofaValidityReference": "G-VIIJ/UK.MG.0037/24062021",
            "CofaOperatingLimitations": null,
            "ShowOperatingLimitations": false
        },
        "IsPotentialChangeOfOwnership": false,
        "EmergencyBallisticDeviceFitted": false
    },
    "MortgageDetails": [],
    "RegisteredAircraftOwners": [
        {
            "RegisteredOwner": "BRITISH AIRWAYS PLC",
            "AddressIndicatorID": 1,
            "AddressIndicator": "",
            "TradingAs": null,
            "TrusteeOf": null,
            "Address1": "WATERSIDE (HCA3)",
            "Address2": "PO BOX 365, HARMONDSWORTH",
            "Town": "WEST DRAYTON",
            "County": null,
            "PostCode": "UB7 0GB",
            "Country": "UNITED KINGDOM"
        }
    ],
    "AircraftOperatedByAocHolder": {
        "showSection": true,
        "OperatorName": "BRITISH AIRWAYS PLC",
        "OperatorTrandingAs": null
    },
    "InsuranceSummaryDetails": {
        "EvidenceVerifiedDate": "12-Jul-2022",
        "NoFlyDate": null,
        "AircraftMarkStatusID": 1,
        "AircraftID": 46457,
        "Mark": "VIIJ"
    },
    "NoiseSummaryDetails": {
        "NoiseCertificateIssueDate": "22-May-2014",
        "NoiseCertificateNumber": "023855",
        "NoiseChapter": "03"
    },
    "RegistrationMarkExemption": null,
    "OpenRegistrationCases": [],
    "OpenApplicationsAndApprovalsCases": [],
    "ExtractDate": "30-Apr-2024 19:45"
}`;
</script>

<style>

.abc{
	font-size: 1rem
}
.article-font {
	font-size: 1.25rem;
}

pre {
	font-size: 0.8rem!important;
}
/* {
	color: red;
} */
</style>