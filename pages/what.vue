<template>
	<div class="contwrap">
		<b-container>
			<b-row align-h="center">
				<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
					<b-card
						img-top
						img-src="/img/pb/winterlite.jpg"
						bg-variant="dark"
						text-variant="white"
						title="What is This Living Rosary Apostolate"
					>
						<b-card-text>
							This Living Rosary embraces the hearts of thousands of families
							and individuals through the meditation on one decade daily,
							unifying their intentions with the Roman Catholic hierarchy,
							religious, parishes and pro-life endeavors. The devotion shows how
							the mysteries of Christ's life can be transformed into our daily
							lives, allowing the experience to live and love as Christ asks of
							us. Meditating with Jesus and Mary through these mysteries help us
							to discover the messages her son intends for our daily growth.
						</b-card-text>
						<b-button href="/" variant="primary">Back</b-button>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
		<theme-colors />
	</div>
</template>

<script>
	import themeColors from '@/components/theme-colors.vue';
	export default {
		transition: {
			duration: 500,
			enterActiveClass: 'animated slideInUp',
			leaveActiveClass: 'animated slideOutDown'
		},
		components: {
			themeColors
		}
	};
</script>

<style scoped>
	b-button {
		color: gray;
	}
</style>
