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
						title="A Brief History of This Living Rosary Apostolate"
					>
						<b-card-text>
							During World War II at a Lenten retreat in Poland, servant of God
							Jan Tyranowski a Catholic layman, was asked by Salesian Priests to
							organize Living Rosary groups since all priests were targeted by
							the Nazi regime. Groups were composed of fifteen devotees each
							meditating upon one of the fifteen mysteries daily. This ministry
							became a cornerstone for the Catholic underground in 1940. From
							these original devotions came ten men into the priesthood. At St.
							Stanislaus University in Krakow, Jan was the youth leader and
							central figure in the spiritual formation of the young Karol
							Wojtyla. Karol attended these meetings entitled the Living Rosary
							which fostered many vocations including Fr. Karol Wojtyla who in
							turn became Pope John Paul II. In Mitchell South Dakota, US, in
							2003, two priests from neighboring parishes asked their
							parishioners to start the Living Rosary for Lent. One of these
							priests Fr. Andrew being from Poland, was friends with Fr.
							Wojtyla. Father Andrew prayed the Living Rosary from his youth and
							instructed parishioners on how to pray the Living Rosary. In turn
							these parishioners’ numbers grew totaling five hundred devotees,
							thus began this Living Rosary in the US. The group asked others to
							help spread this beautiful devotion and rediscover the power of
							the Rosary. As of June 2019, this Living Rosary has spread to
							several states and countries in the world.
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
