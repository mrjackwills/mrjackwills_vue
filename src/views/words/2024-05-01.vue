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
						with the following body and response;
					</p>

					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock cols='5' key='POST_body' :code='post_body' lang='json' label='POST body' id='post_body'/>
						<CodeBlock cols='5' key='POST_response' :code='post_response' lang='json' label='POST response'/>
					</v-row>

					<p>
						This seems like a good start, but this response is nowhere near as information rich as rendered in the browser, so the second request must be where the good stuff is.
					</p>

					<p>
						The second request, this time a GET request to <RedSpan text='https://ginfoapi.caa.co.uk/api/aircraft/details/46457' />,
						which clearly has the <RedSpan text='AircraftID' /> obtained from the first request appended to it,
						and returns a large response stuffed with all the detailed information that we are after.
					</p>
					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock cols='auto' :code='caa_full_response' lang='json' label='full smörgåsbord GET response'/>
					</v-row>
					<p>
						Unfortunately, the URL can't simply be visited in browser, as a ReCaptchaToken header is required, but more on that later.
					</p>
					<p>
						So the process so far seems to be, make POST request to <RedSpan text='https://ginfoapi.caa.co.uk/api/aircraft/search' />
						with an aircraft’s registration, then use the <RedSpan text='AircraftID' /> field from this to make a GET request
						to <RedSpan text='https://ginfoapi.caa.co.uk/api/aircraft/details/[AircraftID]'/>.

					</p>
					<p>
						UK registered aircraft have a registration in the format G-XXXX, where X can be a letter from A to Z.
						<AHref :to='links.wikipedia.to' text='This Wikipedia article' /> sheds some light on the conventions,
						but to make things easy we can just scrape from G-AAAA to G-ZZZZ, which will be a total of 456,976 registrations (26 * 26 * 26 * 26).
						The CAA website tells us that the G-INFO Compact Disc, the one we are doing all of this in order to avoid pay £400 for, contains over 18,000 aircraft,
						so the majority of our requests will be futile.
					</p>
					<p>
						Finally, after all of this pre-amble, some Rust code.
						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock cols='auto' :code='generate_registrations' :lang='"rust"' label='Generate all registrations from AAAA to ZZZZ'/>
						</v-row>

						<!-- <v-row justify='space-around' class='my-3' align='end' > -->
						<!-- <CodeBlock :code='reg_new_type' :lang='"rust"' label='Registration new type'/> -->
						<!-- </v-row> -->
					</p>
					<p>
						We are using the new type pattern here to create a distinct <RedSpan text='Registration' /> type, and then implementing <RedSpan text='From<String>' />.
						Using this pattern ensures that <RedSpan text='Registration' /> instances are distinct from plain strings, and, if required, enables extra functionality to be added
						to this distinct type.
						<!-- A <AHref :to='links.try_from.to' txt='Try<From>' /> method could, for example, -->
						<!-- guarantee that the input string is exactly four characters long, and composed only of the characters 'A' through to 'Z'. -->
						<!-- Later we  combine this with our SQLite database later, to create a robust type system unique to each table, all while using a macro to reduce the amount of -->
						<!-- code that is needed to be written. -->
						<!-- When storing and retrieving data from the SQLite database, having unique types can reduce confusion and conflict, to further enforce a strong type system. -->
					</p>
					<p>
						Next, <RedSpan text='generate_all_registrations()' /> will create all possible registrations using nested loops. We know the length of the output, so we can create a
						<AHref :to='links.rust_vecdeque.to' txt='VecDeque' /> with the <AHref :to='links.with_capacity.to' text='desired capacity' />, which will allocate the correct heap space in one fell swoop.
						The <RedSpan text='letter' /> variable is a <AHref :to='links.range_inclusive.to' text='Range Inclusive' /> from A to Z,
						which make iterating over each letter simple. The <RedSpan text='letter' /> variable is cloned for each loop,
						so that each of these loops has access to its own unique letter, independent from the others.
						<!-- We push into our output<RedSpan text='Registration' />, created using the <RedSpan text='From<String>' /> into our Vec, and return <RedSpan text='output' />. -->
					</p>
		
					<p>
						So we now have a <RedSpan text='Vec<Registration>' />, we can make a POST request for each registration, extract the <RedSpan text='AircraftID'/>, then use this for the GET request.
					</p>
					<p>
						Lets make that <span class='font-italic'>simple</span> POST request.
					</p>
					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock :code='first_request' :lang='"rust"' label='Simple POST request'/>
					</v-row>

					<!-- add button to highlight text! -->
					<!-- talk about serdes body and response, can ignore the non used parts, as all we want is the caaid -->
					<!-- Show macro for the id -->
					<!-- <br> -->
					<!-- It does appear that this <span class='font-italic'>simple</span> request code is verbose, and there is a lot going on here -->
					<!-- - much of which we will later cut out or make generic, but by being explicit we are able to remove doubt and ambiguity. -->

					<p>
						After playing around with the API it will still gladly respond when when all that is sent is a JSON containing just the "registration" field,
						rather than the previously detailed <AHref to='#post_body' :internal='true' txt='POST body' />,
						The <RedSpan text='From<&Registration>' /> block will create our body from, as the name suggests, a borrowed <RedSpan text='Registration' /> instance, which will then be serialized into JSON.
					</p>

					<p>
						The <RedSpan text='SearchResponse' /> is the data that we are expecting to receive back from the API, and even though
						the <AHref to='#post_body' :internal='true' txt='POST response' /> contained multiple fields, we can ignore all but the <RedSpan text='AircraftID' />.
						By decorating this field with the <RedSpan text='#[serde(rename = "AircraftID")]'/> <AHref :to='links.attribute_macro.to' :txt='links.attribute_macro.txt'/>,
						during deserialization it will automatically be renamed to follow the standard Rust naming conventions.
					</p>

					<p>
						Next we use the <AHref :to='links.reqwest.to' :txt='links.reqwest.txt' /> crate to build a
						<AHref :to='links.reqwest_client.to' txt='Client' /> instance, with a 20 second connection timeout, POST'ing to the given URL, using our <RedSpan text='RegistrationPost' />
						as the body, adding a <RedSpan text='ReCaptchaToken'/> header, submitting the request, then Serializing the response into a <RedSpan text='Vec<SearchResponse>' />. This function
						returns a <AHref :to='links.rust_result.to' txt='Result type' />, and by using the <RedSpan text='?'/> operator, any error encountered will be propagated up to the caller.
					</p>

					<p>
						Annoyingly, this <RedSpan text='ReCaptchaToken'/> isn't an automated process. When searching on the CAA website, a simple captcha needs to be solved
						in order to continue. We will have to complete one of these captchas, save the resultant <RedSpan text='ReCaptchaToken'/>, found in the Headers section of the devtools,
						then re-use this for every request. Saving the <RedSpan text='ReCaptchaToken'/> in an .env file means it can be easily updated without having to re-compile the entire application.
					</p>
					<p>
						Fortunately the generated token seems to have generous permission, isn't locked to our IP address, and has a substantial lifespan, which in testing seems valid for many, many, many hours.
					</p>

					<section class='my-4'>
						<v-row justify='space-around' align='end'>
							<v-col cols='7' md='3'>
								<v-row justify='center' class='ma-0 pa-0'>
									<v-col cols='12' class='ma-0 pa-0'>
										<v-img src='@/assets/blog/2024-05-01/captcha.jpg' class='ma-0 pa-0' alt='Screenshot of a captcha to be solved'>
											<template #sources>
												<source srcset='@/assets/blog/2024-05-01/captcha.webp'>
											</template>
										</v-img>
									</v-col>
								</v-row>
								<v-row justify='center' class='ma-0 pa-0 mb-2'>
									<v-col cols='auto' class='ma-0 pa-0 text-caption'>
										The simple captcha to be solved
									</v-col>
								</v-row>
							</v-col>

							<v-col cols='7' md='7'>
								<v-row justify='center' class='ma-0 pa-0'>
									<v-col cols='12' class='ma-0 pa-0'>
										<v-img src='@/assets/blog/2024-05-01/token.jpg' class='ma-0 pa-0' alt='Screenshot of devtools containing the token, pixelated'>
											<template #sources>
												<source srcset='@/assets/blog/2024-05-01/token.webp'>
											</template>
										</v-img>
									</v-col>
								</v-row>
								<v-row justify='center' class='ma-0 pa-0 mb-2'>
									<v-col cols='auto' class='ma-0 pa-0 text-caption'>
										Screenshot of devtools containing the token, pixelated because you never know
									</v-col>
								</v-row>
							</v-col>
						</v-row>
					</section>

					<!-- </p> -->

					<!-- <p>
						The <RedSpan text='GInfo::exists'/> function will return an <RedSpan text='Option<()>'/> at this point we only care if it exists or not,
						and an Option is preferable to a bool in this situation. Option types are on of Rusts killer features, and helps to fix the billion dollar null problem.
						By implementing this check, we can run the scraping process multiple times without inserting duplicate data into our SQLite table.
					</p> -->

					<p>
						So far, so good, but we have yet to actually run any multi-threaded operations, and if each request took, optimistically, 100 milliseconds,
						we would still be looking at over 12 hours for all 456,976 registrations alone. It's time to exploit Rusts <AHref :to='links.fearless_concurrency.to' text='Fearless Concurrency' />
						to vastly speed up the near half a million requests.
					</p>

					<v-row justify='space-around' class='my-3' align='end' >
						<CodeBlock :code='first_threaded_request' :lang='"rust"' label='First multi-threaded request attempt'/>
					</v-row>

					<p>
						The heart of the multi-threaded approach is <RedSpan text='request_thread_handler()'/> which uses a <AHref :to='links.rust_mpsc.to' txt='Multi Producer Single Consumer' />
						channel to send and receive messages across threads.
					</p>

					<p>
						The VecDeque created from  <RedSpan text='generate_all_registrations()' />  is first split into two parts, <RedSpan text='all_registrations'/> will now contain the
						first <RedSpan text='app_env.threads'/> number of entries, <RedSpan text='registrations_to_spawn'/> will contain all of the remaining entries.
						After some trial-and-error testing, 375 concurrent threads seems to be roughly the greatest number that won’t overload the CAA API server.
					</p>
					<p>
						<!-- <v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='app_env' :lang='"rust"' label='.env parsing & AppEnv creation' :hidden='true'/>
						</v-row> -->
						
						For each of these first 375 <RedSpan text='Registration'/> entries we call <RedSpan text='spawn_request()' />, which will spawn a request into its own
						<AHref :to='links.tokio_task.to' txt='tokio task thread' />.
						When <RedSpan text='tokio::spawn()' /> is invoked, we have to to take ownership of the <RedSpan text='token' /> and <RedSpan text='sx'/> variables,
						as the spawned thread could out live the lifetime of the borrowed data. However, the Rust compiler will simply refuse to build our application, and inform us that
						"borrowed data escapes outside of associated function" if we had such a glaring lifetime error.
						
					</p>
					<p>
						Each spawned request <span class='font-italic'>should</span> send a Result over the channel, to be handled in the main thread. Once received,
						the <RedSpan text='msg_count' /> is increased by one, the Result is then <AHref :to='links.rust_match.to' txt='matched' />, with the response or error printed to screen.
						Following this, if the number of messaged received is equal to the total number of registrations, the channel is closed. This has to be done manually
						as <RedSpan text='sx' /> is kept alive, in order to pass it as a reference into <RedSpan text='spawn_request()'/>, and as such <RedSpan text='rx' /> would loop forever
						Finally, if the <RedSpan text='data_to_spawn'/> VecDeque still contains any <RedSpan text='Registration' />'s, we pop the first entry, and repeat the whole process.
					</p>

					<p>
						Using this approach, my home internet connection can complete all 456,976 requests in under 30 minutes. However, as the <RedSpan text='RecaptchaToken' /> has such generous
						and lax permissions, we can deploy this application on a remote server with an order of magnitude more bandwidth, and potentially lower latency, to hopefully hasten the process.
					</p>
					
					<p>
						Things seem to be going well, but so far we aren't actually storing the data we receive, nor are we handling any errors, nor do we have a generic approach to make
						the two different requests. So the next step should be to create methods that are agnostic to the request type,
						write the response into a SQLite database, and then check for errors.
					</p>
					<p>
						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='scrape_enum' :lang='"rust"' label='ScrapeStep enum'/>
						</v-row>
						We only have two request types, each with it's own url and <AHref :to='links.http_verb.to' text='http verb' />, so this can be stored in an <AHref to='enum' txt='enum'/>, where we then add
						methods to create the specific request for each of the variants. Not shown here, but we should extend this implementation to cover Deserializing the data, inserting said data into
						the database, as well as inserting any errors into the database.
					</p>

					<p>
						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='thread_handler_trait' :lang='"rust"' label='Generic Traits'/>
							<CodeBlock :code='scrape_step_from' :lang='"rust"' label='impl From for ScrapeStep'/>
						</v-row>
						Next we need to alter <RedSpan text='request_thread_handler()' /> to accept a generic type, and also introduce two <AHref :to='links.trait_bounds.to' txt='trait bounds' />.
						The first, <RedSpan text='T: Send + &apos;static + Sync' />, limits the generic type to one that can be safely sent and shared across threads, removing any potential data-race problems.
						The second, <RedSpan text='ScrapeStep: std::convert::From<T>' /> further limits the generic type to only those that can be converted into a <RedSpan text='ScrapeStep' /> enum, meaning
						we now need to implement From for both AircraftId and Registration.
						<!--
						<CodeBlock :code='get_trait' :lang='"rust"' label='Get trait'/>
						Implementing the get trait on both <RedSpan text='Registration' /> and <RedSpan text='AircraftId' />
						means we can now easily return the interior data, even though these are two distinct types. -->
					</p>

					<p>

						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='insert_db_data' :lang='"rust"' label='insert the data into SQLite'/>
						</v-row>
						Next we should handle the database queries. As this is a small and portable project, SQLite seemed like the best choice. If we wanted to, we could clone
						a <AHref :to='links.sqlx_pool.to' txt='SQLitePool' /> into each spawned task, and insert the data there,
						but an easier solution would be to handle the database insertions in the main thread. It would also make sense to handle any errors, and data Deserializing,
						in the main thread, so <RedSpan text='sx' /> now contains an Optional tuple of <RedSpan text='Option<(ScrapeStep, Result<String, AppError>)>' />. As seen earlier,
						by using the match expression, each <RedSpan text='ScrapeStep' /> variant can share a method name but have different internal methods, so the SQL queries can be distinct
						from one another by implementing the <RedSpan text='insert' /> and <RedSpan text='insert_error()' /> methods.
							
					</p>
					<p>
						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='make_request_hash' :lang='"rust"' label='Check a hashset for included data'/>
						</v-row>
						We haven't yet dealt with the possibility of duplicate data, but there is no point scraping the same url twice. Now that we're using a persistent SQLite database
						we can check before each request to see if that URL has already been hit. The first solution to do this was to execute a simple SQL query, but due to the number of threads active,
						and the shear number of URL's to hit, this soon became a huge bottleneck. So, instead we create a HashSet of all the <RedSpan text='ScrapeStep' />'s
						that are already stored in the database, afterwhich a simple and ridicslouyl fast memory <RedSpan text='contains' /> method can tell us if we need to make this
						soecific request or not.

					</p>
					<!-- <p>
						<v-row justify='space-around' class='my-3' align='end' >
							<CodeBlock :code='sql_string_type_macro' :lang='"rust"' label='sqlx newtype macro'/>
						</v-row>
						
						macro for sql string type
					</p> -->

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

// const anchor = (id: string) => `/{}`

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
		txt: 'Australia',
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
	attribute_macro: {
		to: 'https://doc.rust-lang.org/reference/procedural-macros.html#attribute-macros',
		txt: 'attribute macro'
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
	http_verb: {
		to: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods'
	},
	range_inclusive: {
		to: 'https://doc.rust-lang.org/std/ops/struct.RangeInclusive.html'
	},
	reqwest: {
		to: 'https://github.com/seanmonstar/reqwest',
		txt: 'reqwest'
	},
	reqwest_client: {
		to: 'https://docs.rs/reqwest/latest/reqwest/struct.Client.html',
	},
	rust: {
		to: 'https://rust-lang.org',
		txt: 'Rust'
	},
	rust_mpsc: {
		to: 'https://doc.rust-lang.org/std/sync/mpsc/'
	},
	rust_std: {
		to: 'https://doc.rust-lang.org/std',
		txt: 'standard library'
	},
	rust_match: {
		to: 'https://doc.rust-lang.org/std/keyword.match.html'
	},
	rust_vecdeque: {
		to: 'https://doc.rust-lang.org/std/collections/struct.VecDeque.html'
	},
	rust_result: {
		to: 'https://doc.rust-lang.org/std/result/'
	},
	serde: {
		to: 'https://github.com/serde-rs/serde',
		txt: 'serde'
	},
	sqlx: {
		to: 'https://github.com/launchbadge/sqlx',
		txt: 'sqlx'
	},
	sqlx_pool: {
		to: 'https://docs.rs/sqlx/latest/sqlx/sqlite/type.SqlitePool.html'
	},
	tokio: {
		to: 'https://github.com/tokio-rs/tokio',
		txt: 'tokio'
	},
	tokio_task: {
		to: 'https://docs.rs/tokio/latest/tokio/task/index.html'
	},
	trait_bounds: {
		to: 'https://doc.rust-lang.org/reference/trait-bounds.html'
	},
	try_from: {
		to: 'https://doc.rust-lang.org/std/convert/trait.TryFrom.html'
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

const thread_handler_trait=`async fn request_thread_handler<T>(
    app_env: &AppEnv,
    sqlite: &SqlitePool,
    mut data: VecDeque<T>,
) -> Result<(), AppError>
    where
    T: Send + 'static + Sync,
    ScrapeStep: std::convert::From<T>,
    `;

const scrape_step_from=`impl From<Registration> for ScrapeStep {
    fn from(reg: Registration) -> Self {
        Self::Search(reg)
    }
}

impl From<AircraftId> for ScrapeStep {
    fn from(aircraft_id: AircraftId) -> Self {
        Self::Details(AircraftId)
    }
}`;
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

const make_request_hash=`fn spawn_request(
    app_env: &AppEnv,
    sx: &std::sync::mpsc::Sender<Option<(ScrapeStep, Result<String, AppError>)>>,
    known_data: &HashSet<ScrapeStep>,
    scrape_step: ScrapeStep,
) {
    if known_data.contains(&scrape_step) {
        sx.send(None).ok();
    } else {
        let token = app_env.captcha_token.clone();
        let sx = sx.clone();
        tokio::spawn(async move {
            let msg =
                tokio::time::timeout(DUR + DUR, Self::_make_request(&scrape_step, &token))
                    .await
                    .unwrap_or(Err(AppError::Internal("timeout".to_owned())));

            sx.send(Some((scrape_step, msg))).ok();
        });
    }
}`;

const generate_registrations =`#[derive(Debug, Clone, Hash, PartialEq, Eq, PartialOrd, Ord)]
pub struct Registration(String);

impl From<String> for Registration {
    fn from(value: String) -> Self {
        Self(value)
    }
}

fn generate_all_registrations() -> VecDeque<Registration> {
    let mut output = VecDeque::with_capacity(26 * 26 * 26 * 26);
    let letter = 'A'..='Z';
    for one in letter.clone() {
        for two in letter.clone() {
            for three in letter.clone() {
                for four in letter.clone() {
                    output.push_back(Registration::from(format!("{one}{two}{three}{four}")));
                }
            }
        }
    }
    output
}`;

const _reg_new_type = `#[derive(Debug, Clone, Hash, PartialEq, Eq, PartialOrd, Ord]
pub struct Registration(String);

impl From<String> for Registration {
    fn from(value: String) -> Self {
        Self(value)
    }
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

const _sql_string_type_macro = `use std::hash::Hash;

use serde::Serialize;

pub trait Get {
    fn get(&self) -> &str;
}

#[macro_export]
macro_rules! sql_string_field {
    ($struct_name:ident) => {
        #[derive(Debug, Clone, Hash, PartialEq, Eq, PartialOrd, Ord, sqlx::Decode)]
        pub struct $struct_name(String);

        impl sqlx::Type<sqlx::Sqlite> for $struct_name {
            fn type_info() -> <sqlx::Sqlite as sqlx::Database>::TypeInfo {
                <String as sqlx::Type<sqlx::Sqlite>>::type_info()
            }
        }

        impl From<String> for $struct_name {
            fn from(value: String) -> Self {
                Self(value)
            }
        }

        impl Serialize for $struct_name {
            fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
            where
                S: serde::Serializer,
            {
                serializer.serialize_newtype_struct(stringify!($struct_name), &self.0)
            }
        }

        impl Get for $struct_name {
            fn get(&self) -> &str {
                self.0.as_str()
            }
        }
    };
}

sql_string_field!(Registration);
sql_string_field!(AircraftId);`;

const _get_trait =`pub trait Get {
    fn get(&self) -> &str;
}`;

const insert_db_data=`while let Ok(msg_data) = rx.recv() {
    if let Some((scrape_step, msg_data)) = msg_data {
        if let Ok(response) = msg_data {
            scrape_step.insert(sqlite, response).await?;
        } else {
            scrape_step.insert_error(sqlite).await?;
        }
    }
}`;

const first_request = `// CAA API Post request body
#[derive(Debug, Serialize)]
pub struct RegistrationPost {
  registration: String,
}

// CAA API Post request response
#[derive(Debug, Deserialize, Hash)]
 pub struct SearchResponse {
  #[serde(rename = "AircraftID")]
  pub aircraft_id: i64,
 }

// Convert Registration into RegistrationPost
impl From<&Registration> for RegistrationPost {
  fn from(value: &Registration) -> Self {
    Self {
      registration: value.get().to_owned(),
    }
  }
}

async fn make_request(
  reg: &Registration,
  token: &str
) -> Result<Vec<SearchResponse>, AppError> {
  Ok(reqwest::Client::builder()
      .connect_timeout(std::time::Duration::from_millis(20000))
      .build()?
      .post("https://ginfoapi.caa.co.uk/api/aircraft/search")
      .json(&RegistrationPost::from(reg))
      .header("RecaptchaToken", token)
      .send()
      .await?
      .json::<Vec<SearchResponse>>()
      .await?)
}
`;

const _g_info = `// This is modelled on our SQLite table
#[derive(sqlx::FromRow, Debug, Clone, Serialize)]
pub struct GinfoId {
  pub g_info_id i64,
  pub registration: String,
  pub aircraft_id: AircraftId,
}

impl GinfoId {
  pub async fn exists(
  db: &SqlitePool,
  registration: &Registration,
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
}`;

const first_threaded_request = `/// Make the request
async fn request(reg: &Registration, token: &str) -> Result<Vec<SearchResponse>, AppError> {
    Ok(reqwest::Client::builder()
        .connect_timeout(std::time::Duration::from_millis(20000))
        .build()?
        .post("https://ginfoapi.caa.co.uk/api/aircraft/search")
        .json(&RegistrationPost::from(reg))
        .header("RecaptchaToken", token)
        .send()
        .await?
        .json::<Vec<SearchResponse>>()
        .await?)
}

/// Spawn a request into a tokio thread
fn spawn_request(
    token: &str,
    registration: Registration,
    sx: &std::sync::mpsc::Sender<Result<Vec<SearchResponse>, AppError>>,
) {
    let token = token.to_owned();
    let sx = sx.clone();
    tokio::spawn(async move {
        let result = request(&registration, &token).await;
        sx.send(result).ok();
    });
}

/// Handle the concurrent request threads
fn request_thread_handler(
    app_env: &AppEnv,
    sqlite: &SqlitePool,
    mut all_registrations: VecDeque<Registration>,
) {
    let all_registrations_len = all_registrations.len();
    let (sx, rx) = std::sync::mpsc::channel();

    let mut registrations_to_spawn = all_registrations.split_off(app_env.threads);
    let mut msg_count = 0;

    for reg in all_registrations {
        spawn_request(&app_env.captcha_token, reg, &sx);
    }

    while let Ok(response) = rx.recv() {
        msg_count += 1;

        match response {
            Ok(data) => println!("{data:?}"),
            Err(e) => println!("error: {e:?}"),
        }

        if msg_count == all_registrations_len {
            break;
        }

        if let Some(reg) = registrations_to_spawn.pop_front() {
            spawn_request(&app_env.captcha_token, reg, &sx);
        }
    }
}`;

const _app_env =`use std::{collections::HashMap, env};
use thiserror::Error;

type EnvHashMap = HashMap<String, String>;

#[derive(Debug, Error)]
enum EnvError {
    #[error("missing env: '{0}'")]
    NotFound(String),
    #[error("Invalid Type: '{0}'")]
    TypeErr(String),
}

#[derive(Debug, Clone)]
pub struct AppEnv {
    pub captcha_token: String,
    pub threads: usize,
}

impl AppEnv {
    fn parse_string(key: &str, map: &EnvHashMap) -> Result<String, EnvError> {
        map.get(key).map_or_else(
            || Err(EnvError::NotFound(key.into())),
            |value| Ok(value.into()),
        )
    }

    fn parse_usize(map: &EnvHashMap) -> Result<usize, EnvError> {
        let Ok(value) = Self::parse_string("THREADS", map) else {
            return Err(EnvError::NotFound("THREADS".to_owned()));
        };
        value
            .parse::<usize>()
            .map_or(Err(EnvError::TypeErr("THREADS".to_owned())), Ok)
    }

    /// Load, and parse .env file, return AppEnv
    fn generate() -> Result<Self, EnvError> {
        let env_map = env::vars()
            .map(|i| (i.0, i.1))
            .collect::<HashMap<String, String>>();

        Ok(Self {
            captcha_token: Self::parse_string("CAPTCHA_TOKEN", &env_map)?,
            threads: Self::parse_usize(&env_map)?,
        })
    }

    pub fn get_env() -> Self {
        let local_env = ".env";
        if std::fs::metadata(local_env).is_err() {
            println!("Unable to load env file");
            std::process::exit(1);
        };
        dotenvy::from_path(local_env).ok();
        match Self::generate() {
            Ok(s) => s,
            Err(e) => {
                println!("{e:?}");
                std::process::exit(1);
            }
        }
    }
}`;

const scrape_enum = `#[derive(Debug, Hash, PartialEq, Eq)]
pub enum ScrapeStep {
    Details(AircraftId),
    Search(Registration),
}

impl ScrapeStep {
    fn build_request(&self, req: &reqwest::Client) -> reqwest::RequestBuilder {
        match self {
            Self::Search(registration) => req
                .post("https://ginfoapi.caa.co.uk/api/aircraft/search")
                .json(&RegistrationPost::from(registration)),

            Self::Details(caa_id) => req.get(format!(
                "https://ginfoapi.caa.co.uk/api/aircraft/details/{}",
                caa_id.get()
            )),
        }
    }
	
}`;
</script>

<style scoped>
p{
	margin-top: 1rem;
}

/* .article-font { */
	/* font-size: 1.25rem;
} */

</style>