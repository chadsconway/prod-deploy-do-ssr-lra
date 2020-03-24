<template>
	<div>
		<div class="bluebg"></div>
		<div class="contwrap">
			<b-container>
				<b-row align-h="center">
					<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
						<b-form
							id="signupform"
							@submit.prevent="onSubmit($data)"
							@reset="onReset"
							v-if="show"
						>
							<b-form-group
								id="input-group-1"
								label="Email address:"
								label-for="input-1"
							>
								<b-form-input
									id="input-1"
									v-model="form.email"
									type="email"
									required
									placeholder="Enter email"
								></b-form-input>
							</b-form-group>
							<b-form-group label="First Name:" label-for="input-2">
								<b-form-input
									id="input-2"
									v-model="form.firstname"
									required
									placeholder="Enter first name"
								></b-form-input>
							</b-form-group>
							<b-form-group label="Last Name:" label-for="input-2">
								<b-form-input
									v-model="form.lastname"
									required
									placeholder="Enter last name"
								></b-form-input>
							</b-form-group>
							<b-form inline>
								<label class="mr-sm-2" for="continent-selector"
									>Geographical Region</label
								>
								<b-form-select
									v-model="form.region"
									class="mb-2 mr-sm-2 mb-sm-0"
									:options="region"
									required
									id="continent-selector"
								>
									<template v-slot:first>
										<option :value="null">Choose...</option>
									</template>
								</b-form-select>
							</b-form>

							<b-form-group id="input-group-4">
								<b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
									<b-form-checkbox value="join"
										>Please send me information so I may join in praying This
										Living Rosary</b-form-checkbox
									>
								</b-form-checkbox-group>
							</b-form-group>

							<b-form-textarea
								id="note"
								v-model="form.note"
								placeholder="(optional) Write a personalized note..."
								rows="3"
								max-rows="6"
							></b-form-textarea>

							<b-button type="submit" variant="primary">Submit</b-button>
							<b-button type="reset" variant="danger">Reset</b-button>
						</b-form>
					</b-col>
				</b-row>

				<!-- <b-card class="mt-3" header="Form Data Result">
					<pre class="m-0">{{ form }}</pre>
				</b-card>
				<b-card class="mt-3" header="Results">
					<pre class="m-0">{{ results }}</pre>
				</b-card> -->
			</b-container>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
			transition: {
			duration: 500,
			enterActiveClass: 'animated slideInUp',
			leaveActiveClass: 'animated slideOutDown'
		},
		data() {
			return {
				form: {
					email: 'dave@gmail.com',
					firstname: 'Dave',
					lastname: 'Davids',
					note: 'Hello apostolates',
					checked: ['join'],
					region: 'test' //default null
				},
				region: [
					'Africa',
					'Antartica',
					'Asia',
					'Australia',
					'Canada',
					'Caribbean',
					'Europe',
					'Mexico',
					'South America',
					'United States',
					'other',
					'test'
				],
				show: true,
				testurlechopostbody: 'http://localhost:9000/test/echopostbody',
				testurlsend: 'http://localhost:9000/test/send',
				results: {}
			};
		},
		methods: {
			onSubmit: function(data) {
				axios
					.post(
						'http://test.thelivingrosaryapostolate.com:9000/test/send',
						data.form
					)
					.then(response => {
						this.results = response.data;
						alert('results: ', this.results);
					})
					.catch(error => {
						this.results = response.data;
						alert('results: ', this.results);
					});
			},
			onReset: function(evt) {
				evt.preventDefault();
				// Reset our form values
				this.form.email = '';
				this.form.firstName = '';
				this.form.lastName = '';
				this.form.note = '';
				yarn;
				this.form.region = null;
				this.form.checked = [];
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
			}
		},
		asyncData() {}
	};
</script>
<style scoped>
	.bluebg {
		position: absolute;
		top: 0;
		z-index: 0;
		background-image: url('/img/pb/blue-church.jpg');
		filter: blur(8px);
		-webkit-filter: blur(8px);
		width: 100vw;
		min-height: 100vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.contwrap {
		position: absolute;
		top: 100px;
		width: 100%;
	}
	b-container {
		position: absolute;
		margin-top: 100px;
		z-index: 2;
	}
	b-col {
		padding-top: 100px;
	}
	.l5 {
		background-color: #ebffff;
	}
	.l4 {
		background-color: #bcfffe;
	}
	.l3 {
		background-color: #78fffd;
	}
	.l2 {
		background-color: #35fffc;
	}
	.l1 {
		background-color: #00f1ed;
	}
	.w3 {
		background-color: #00aba9;
	}
	.d1 {
		background-color: #009c99;
	}
	.d2 {
		background-color: #008b88;
	}
	.d3 {
		background-color: #007977;
	}
	.d4 {
		background-color: #006866;
	}
	.d5 {
		background-color: #005755;
	}

	.gradient1 {
		color: #fff;
		background-image: linear-gradient(to right, #007977, #005755);
	}
</style>
