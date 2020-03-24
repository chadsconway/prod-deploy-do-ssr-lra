<template>
	<div id="footer" class="w3-theme-d4 w3-hide-small">
		<b-container>
			<b-row>
				<b-col xs="12" sm="6" md="4">
					<v-list-item-group v-model="item" color="primary">
						<v-list-item>
							<v-list-item-content>
								<v-list-item-title class="text-light"
									>Special Thanks To:</v-list-item-title
								>
								<v-list-item-subtitle>
									<h5 class="text-light">
										Eminence Cardinal Anders Arborelius OCD
									</h5>
									<p>
										<i class="text-light"
											>Protector of The Living Rosary Apostolate</i
										>
									</p>
									></v-list-item-subtitle
								>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</b-col>
				<b-col xs="12" sm="6" md="4">
					<v-list-item-group v-model="item" color="primary">
						<v-list-item>
							<v-list-item-content>
								<v-list-item-avatar>
									<v-img :src="/img/acdeeloorrrtuwx.png"></v-img>
								</v-list-item-avatar>
								<v-list-item-title class="text-light"
									>In Loving Memory:</v-list-item-title
								>
								<v-list-item-subtitle>
									<h5 class="text-light">
										Genevieve Mamai
									</h5>
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-list-item-group>
				</b-col>
				<b-col xs="12" sm="6" md="4">
					This Living Rosary Apostolate 2020 ©
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#footer {
		bottom: 0;
		left: 0;
		z-index: 15;
		height: auto;
		width: 100%;
		font-size: 12px;
		line-height: 25px;
		text-align: start;
	}
</style>
