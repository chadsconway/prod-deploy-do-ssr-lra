	<form method="post" action="">						
							<group
								id="input-group-1"
								label="Email address:"
								label-for="input-1"
							>
								<input
									id="input-1"
									v-model="form.email"
									type="email"
									required
									placeholder="Enter email"
								></input>
							</group>
							<group label="First Name:" label-for="input-2">
								<input
									id="input-2"
									v-model="form.firstname"
									required
									placeholder="Enter first name"
								></input>
							</group>
							<group label="Last Name:" label-for="input-2">
								<input
									v-model="form.lastname"
									required
									placeholder="Enter last name"
								></input>
							</group>
						<div class="form-group">
								<label class="mr-sm-2" for="continent-selector"
									>Geographical Region</label
								>
								<select
									v-model="form.region"
									class="mb-2 mr-sm-2 mb-sm-0"
									:options="region"
									required
									id="continent-selector"
								>
									<template v-slot:first>
										<option :value="null">Choose...</option>
									</template>
								</select>
							</div>
            </div>
							<div id="input-group-4">
								<checkbox-group v-model="form.checked" id="checkboxes-4">
									<checkbox value="join"
										>Please send me information so I may join in praying This
										Living Rosary</checkbox
									>
								</checkbox-group>
							</div>

							<textarea
								id="note"
								v-model="form.note"
								placeholder="(optional) Write a personalized note..."
								rows="3"
								max-rows="6"
							></textarea>

							<button type="submit" variant="primary">Submit</button>
              <button type="reset" variant="danger">Reset</button>
            
				</form>>
				

		
	