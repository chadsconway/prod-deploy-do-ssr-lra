<template>
	<div id="masterdiv">
		<div class="bluebg"></div>
		<div class="contwrap">
			<b-container>
				<b-row align-h="center">
					<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
						<form
							id="signupform"
							action="https://formspree.io/info@thelivingrosaryapostolate.com"
							method="POST"
							@reset="onReset"
						>
							<input
								type="hidden"
								name="subject"
								value="Request to begin Living Rosary Apostolate Devotion"
							/>
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
									name="_replyto"
									value=""
								></b-form-input>
							</b-form-group>
							<b-form-group label="Name:" label-for="input-2">
								<b-form-input
									id="input-2"
									v-model="form.firstname"
									required
									placeholder="Enter name"
									name="name"
									value=""
								></b-form-input>
							</b-form-group>
							<b-form-group label="Country of Residence:" label-for="input-3">
								<b-form-input
									v-model="form.country"
									required
									placeholder="Enter Country of Residence"
									name="Country"
									value=""
								></b-form-input>
							</b-form-group>

							<b-form-group id="input-group-4">
								<b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
									<b-form-checkbox
										value="Please send me information so I may join in praying This Living Rosary Devotion!"
										name="join"
										>Please send me information so I may join in praying This
										Living Rosary Devotion!</b-form-checkbox
									>
								</b-form-checkbox-group>
							</b-form-group>

							<b-form-textarea
								id="note"
								v-model="form.note"
								placeholder="(optional) Write a personalized note..."
								rows="3"
								max-rows="6"
								name="note"
								value=""
							></b-form-textarea>

							<b-button type="submit" variant="primary" value="Send"
								>Submit</b-button
							>
							<b-button type="reset" variant="danger">Reset</b-button>
						</form>
					</b-col>
				</b-row>
			</b-container>
		</div>
		<theme-colors />
	</div>
</template>

<script>
	import axios from 'axios';
	import themeColors from '@/components/theme-colors.vue';
	export default {
		transition: {
			duration: 500,
			enterActiveClass: 'animated slideInUp',
			leaveActiveClass: 'animated slideOutDown'
		},
		data() {
			return {
				form: {
					email: '',
					name: '',
					note: '',
					checked: [],
					country: '',
					sendto: ''
				},
				show: true
			};
		},
		components: {
			themeColors
		},
		methods: {
			onReset: function(evt) {
				evt.preventDefault();
				// Reset our form values
				this.form.email = '';
				this.form.firstName = '';
				this.form.lastName = '';
				this.form.note = '';
				yarn;
				this.form.country = null;
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
	#masterdiv {
		padding-bottom: 200px;
	}
</style>
