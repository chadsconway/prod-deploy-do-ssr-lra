<template>
	<div id="footer" class="w3-theme-d4 p-0 w3-hide-small" :elevation="15">
		<b-container>
			<b-row>
				<b-col xs="12" sm="6" md="4">
					<v-list-item-group>
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title class="text-light"></v-list-item-title>
								<v-list-item-subtitle>
									<h5 class="text-light"></h5>
									<p>
										<i class="text-light"></i>
									</p>
									></v-list-item-subtitle
								>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</b-col>
				<b-col xs="12" sm="6" md="4">
					This Living Rosary Apostolate 2020 ©
				</b-col>
				<b-col xs="12" sm="6" md="4">
					<v-list-item-group color="primary">
						<v-list-item>
							<v-list-item-content>
								<div class="container h-flex">
									<div class="container v-flex h-flex-item">
										<v-list-item-title
											class="text-light v-flex-item"
										></v-list-item-title>
										<v-list-item-subtitle class="v-flex-item">
											<h5 class="text-light"></h5>
										</v-list-item-subtitle>
									</div>
								</div>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>

					<!-- end vertical-flex -->
					<div
						id="imagediv"
						style="width:61px;height:61px;"
						class="h-flex-item"
					>
						<img
							src="/img/watercolor.png"
							alt=""
							id="watercolor"
							style="width:60px;height:60px;"
						/>
					</div>
				</b-col>
				<!-- end horizontal-flex -->
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#footer {
		position: fixed;
		padding-top: 5px;
		padding-left: 60px;
		padding-right: 10px;
		padding-bottom: 40px;
		bottom: 0;
		left: 0;
		height: 75px;
		width: 100%;
		font-size: 12px;
		line-height: 25px;
		text-align: start;
	}
	.container {
		display: flex;
	}
	.h-flex {
		flex-basis: 1 0 1;
	}
	.h-flex-item {
		flex-basis: 1 0 1;
	}
	.v-flex {
		flex-basis: 1 0 1;
	}
	.v-flex-item {
		flex-basis: 1 0 1;
	}
</style>
