<template>
	<div>
		<div class="container">
			<img src="/img/fatima.jpg" alt="Notebook" style="width:100%;" />
			<div class="content">
				<h1>Letters of Approval from Clergy</h1>
			</div>
		</div>
		<b-container>
			<b-row align-h="center">
				<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
					<div class="container">
						<card-approvals
							v-for="letter in $store.state.approvalsArray"
							v-bind:key="letter.id"
							v-bind:id="letter.id"
							v-bind:pdfurl="letter.pdfurl"
							v-bind:author="letter.author"
							v-bind:church="letter.church"
							v-bind:location="letter.location"
						></card-approvals>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import cardApprovals from '@/components/card-approvals';
	export default {
		transition: {
			duration: 500,
			enterActiveClass: 'animated slideInUp',
			leaveActiveClass: 'animated slideOutDown'
		},
		components: {
			cardApprovals
		},
		methods: {
			goToLetter(letter) {
				this.$router.push({ name: 'letter', params: { pdf: letter.pdfurl } });
			}
		}
	};
</script>

<style scoped>
	.container {
		position: relative;
		margin: 0 auto; /* Center it */
	}

	.container .content {
		position: absolute; /* Position the background text */
		bottom: 0; /* At the bottom. Use top:0 to append it to the top */
		background: rgb(0, 0, 0); /* Fallback color */
		background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
		color: #f1f1f1; /* Grey text */
		width: 100%; /* Full width */
		padding: 20px; /* Some padding */
	}
</style>
