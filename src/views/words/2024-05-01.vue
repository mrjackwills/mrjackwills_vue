<template>
	<v-row align='start' justify='space-around' class='mt-md-4 ma-0 pa-0'>

		<v-col cols='11' class='ma-0 pa-0'>

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
						the database up to date.

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
						The first request, which sends a POST request to <RedSpan text='https://ginfoapi.caa.co.uk/api/aircraft/search' />
						with the following request and response bodies;
					</p>

					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock cols='5' :code='post_body' lang='json' label='POST body'/>
						<CodeBlock cols='5' :code='post_response' lang='json' label='POST response'/>
					</v-row>
					<p>
						This seems like a good start, but this response is nowhere near as information rich as rendered in the browser, so the second request must be where the good stuff is.

					</p>

					<p>
						
						The second request, this time a GET request to <RedSpan text='https://ginfoapi.caa.co.uk/api/aircraft/details/46457' />,
						which clearly has the <RedSpan text='AircraftID' /> appeneded to it,
						and returns a large response stuffed with all the detailed information that we are after.
					</p>
					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock cols='auto' :code='caa_full_response' lang='json' label='full smörgåsbord GET response'/>
					</v-row>
					<p>
						Unfortunately, one simply can't visit the URL from the GET request to see the data for yourself, as a ReCaptchaToken header is required, but more on that later.

					</p>

					<br>
					<p>
						So the process so far seems to be, make POST request to <RedSpan text='https://ginfoapi.caa.co.uk/api/aircraft/search' />
						with an aircraft’s registration, then use the <RedSpan text='AircraftID' /> field from this to make a GET request
						to <RedSpan text='https://ginfoapi.caa.co.uk/api/aircraft/details' />.

					</p>
					<br>
					<p>

					</p>
					<p>
						UK registered aircraft have a registration in the format G-XXXX, where X can be a letter from A to Z.
						<AHref :to='links.wikipedia.to' text='This Wikipedia article' /> sheds some light on the conventions,
						but to make things easy we can just search from G-AAAA to G-ZZZZ, which will be a total of 456,976 registrations (26 * 26 * 26 *26).
						The CAA website tells us that the G-INFO Compact Disc, the one we are doing all of this in order to avoid pay £400, contains over 18,000 aircraft,
						so the majority of our requests will be futile.
					</p>
					<br>
					<p>

						Finally, after all of this pre-amble, some Rust code.

						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock cols='auto' :code='generate_registrations'  :lang='"rust"' label='Generate all registrations from AAAA to ZZZZ'/>
						</v-row>
					</p>

					<p>
						Starting with this simple function, it will create all possible registrations using nested loops. We know the length of the output, so we can create a Vec with the
						<AHref :to='links.with_capacity.to' text='desired capacity' />, which will allocate the correct heap space in one fell swoop.
						The <RedSpan text='letter' /> variable is a <AHref :to='links.range_inclusive.to' text='Range Inclusive' /> from A to Z,
						which make iterating over each letter simple. The <RedSpan text='letter' /> variable is cloned for each loop,
						so that each of the loops has access to its own unique letter, independent from the other three loops.
						The registrations themselves are stored in a new type <RedSpan text='GInfoRegistrations' />, more on this later.

					</p>
					<br>
					<p>
						So we now have an <RedSpan text='Vec<GInfoRegistrations>' />, it's time to exploit Rusts <AHref :to='links.fearless_concurrency.to' text='Fearless Concurrency' />
						to vastly speed up the near half a million requests.
					</p>
					<p>
						First of all, lets make a <span class='font-italic'>simple</span> request.
						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='first_request' :lang='"rust"' label='Make a POST request with a single registration'/>
							
						</v-row>
						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='g_info' :lang='"rust"' label='GInfo implementation'/>
							
						</v-row>
						It does appear that Rust is verbose, and there is a lot going on here - much of which we will later cut out or generic-ise - but by being explicit we are able to remove doubt and ambiguity is good.
						The first thing we check is if this registration, and its associated data, is in our database.
						The <RedSpan text='GInfo::exists'/> function will return an <RedSpan text='Option<()>' />at this point we only care if it exists or not,
						and an Option is preferable to a bool in this situation. Option types are on of Rusts killer features, and helps to fix the billion dollar null problem.
						By implementing this check, we can run the scraping process multiple times without inserting duplicate data into our SQLite table.

					</p>

					<!-- next -->

				</section>
			</v-container>
		</v-col>
	</v-row>
</template>

<script setup lang='ts'>
import AHref from '@/components/AHref.vue';

// const show_caa_full_response=ref(false);

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
	with_capacity: {
		to: 'https://doc.rust-lang.org/std/vec/struct.Vec.html#method.with_capacity',
		txt: 'provide',
	},
	fearless_concurrency: {
		to: 'https://doc.rust-lang.org/book/ch16-00-concurrency.html',
		txt: 'Fearless Concurrency'
	},
	gviij: {
		to: 'https://api.adsbdb.com/v0/aircraft/g-viij',
		txt: 'G-VIIJ'
	},
	hetzner: {
		to: 'https://hetzner.com/cloud',
		txt: 'cheap VPS'
	},
	range_inclusive: {
		to: 'https://doc.rust-lang.org/std/ops/struct.RangeInclusive.html'
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
	wikipedia: {
		to: 'https://en.wikipedia.org/wiki/United_Kingdom_aircraft_registration',
	},
};

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

const generate_registrations =`fn generate_all_registrations() -> Vec<GInfoRegistration> {
    let mut output = Vec::with_capacity(26 * 26 * 26 * 26);
    let letter = 'A'..='Z';
    for one in letter.clone() {
        for two in letter.clone() {
            for three in letter.clone() {
                for four in letter.clone() {
                    output.push(GInfoRegistration::from(format!("{one}{two}{three}{four}")));
                }
            }
        }
    }
    output
}`;

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

const first_request = `// CAA API Post request body
#[derive(Debug, Serialize, Deserialize)]
pub struct RegistrationPost {
  #[serde(rename = "Registration")]
  registration: String,
}

// CAA API Post request response
#[derive(Debug, Serialize, Deserialize, Hash)]
 pub struct SearchResponse {
  #[serde(rename = "AircraftID")]
  pub aircraft_id: 64,
 }

// Convert from our newtype GInfoRegistration into the RegistrationPost request body
impl From<&GInfoRegistration> for RegistrationPost {
  fn from(value: &GInfoRegistration) -> Self {
    Self {
      registration: value.get().to_owned(),
    }
  }
}

async fn registration_to_caa_id(
  sqlite: &SqlitePool,
  reg: &GInfoRegistration,
  token: &str
) -> Result<(), AppError> {
  if GinfoId::exists(sqlite, reg).await?.is_none() {
    let request = reqwest::Client::builder()
      .connect_timeout(std::time::Duration::from_millis(20000))
      .gzip(true)
      .brotli(true)
      .build()?
      .post("https://ginfoapi.caa.co.uk/api/aircraft/search")
      .header("RecaptchaToken", token)
      .json(&RegistrationPost::from(reg))
      .send()
      .await?
      .json::<Vec<SearchResponse>>()
      .await?;
    if let Some(data) = request.first() {
      GinfoId::insert(sqlite, reg, data).await?;
    }
  }
  Ok(())
}
`;

const g_info = `// This is modelled on our SQLite table
#[derive(sqlx::FromRow, Debug, Clone, Serialize)]
pub struct GinfoId {
  pub g_info_id i64,
  pub registration: String,
  pub caa_id: CaaId,
}

impl GinfoId {
  pub async fn exists(
  db: &SqlitePool,
  registration: &GInfoRegistration,
  ) -> Result<Option<()>, AppError> {
  let query = "SELECT * from g_info WHERE registration = $1";
  Ok(sqlx::query_as::<_, Self>(query)
    .bind(registration.get())
    .fetch_optional(db)
    .await?
    .map(|_| ()))
  }
  pub async fn insert(
        sqlite: &SqlitePool,
        registration: &Registration,
        data: Option<&SearchResponse>,
    ) -> Result<(), AppError> {
        let query = "INSERT OR REPLACE INTO g_info (registration, caa_id) VALUES ($1, $2)";
        sqlx::query(query)
            .bind(registration.get())
            .bind(data.as_ref().map(|i| i.aircraft_id))
            .execute(sqlite)
            .await?;
        Ok(())
    }
}
`;
</script>

<style>

/* .article-font { */
	/* font-size: 1.25rem;
} */

</style>