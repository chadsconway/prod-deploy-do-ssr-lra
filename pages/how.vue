<template>
	<div class="contwrap">
		<b-container>
			<b-row align-h="center">
				<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
					<b-card
						img-top
						img-src="/img/pb/cross.jpg"
						bg-variant="dark"
						text-variant="white"
						title="How To Pray This Living Rosary Apostolate Devotion"
					>
						<b-card-text>
							The Rosary will begin the 1st of each month. Each person who joins
							will be assigned to specific decades and mysteries which will be
							for 20 months, and with completion of the 20 months you will start
							over from the beginning, that’s why it’s called This Living Rosary
							it lives on. You will pray one (1) decade of the Rosary for the
							period of one (1) Month and on the first of the following month,
							you will go on to the following decade. You do not have to meet
							anyone, you pray individually anytime of the day at your own
							convenience.
						</b-card-text>
						<b-card-text>
							While praying and meditating your assigned decade each day of
							every month Our Blessed Mother Mary is leading you slowly to Her
							Son Jesus. Remember: When it is your turn to pray the First Decade
							of each Mystery of the Rosary, you will also have to say the
							prayers that begin the Rosary: The Apostles Creed, The Our Father,
							The three (3) Hail Marys’ The Glory Be to the Father, and The O,
							my Jesus, forgive us our sins. Likewise when it is your turn to
							pray the Fifth Decade of each Mystery of the Rosary, you will say
							the ending prayer: Hail, Holy Queen. If, however, you forget to
							pray your decade of the Rosary on a day, please pray it twice the
							following day. This way you will have completed the Rosary which
							was not completed the day before. Please include with your
							intentions, prayers for the spiritual and temporal needs of your
							parish, prayers for Pro-Life Intentions, prayers for Our Holy
							Father, all Bishops, Priests, Religious, and for the petitions of
							those who have joined the living Rosary Family.
						</b-card-text>
					</b-card>
					<b-card
						img-top
						img-src="/img/pb/hands.jpg"
						bg-variant="dark"
						text-variant="white"
					>
						<b-card-text>
							Join us in Praying the Gospel and Changing the World! The Rosary
							will begin the 1st of each month. Each person who joins will be
							assigned to specific decades and mysteries which will be for 20
							months, and with completion of the 20 months you will start over
							from the beginning, that’s why it’s called This Living Rosary it
							lives on. You will pray one (1) decade of the Rosary for the
							period of one (1) Month and on the first of the following month,
							you will go on to the following decade. You do not have to meet
							anyone, you pray individually anytime of the day at your own
							convenience. While praying and meditating your assigned decade
							each day of every month Our Blessed Mother Mary is leading you
							slowly to Her Son Jesus.
						</b-card-text>

						<b-card-text>
							Remember: When it is your turn to pray the First Decade of each
							Mystery of the Rosary, you will also have to say the prayers that
							begin the Rosary: The Apostles Creed, The Our Father, The three
							(3) Hail Marys’ The Glory Be to the Father, and The O, my Jesus,
							forgive us our sins. Likewise when it is your turn to pray the
							Fifth Decade of each Mystery of the Rosary, you will say the
							ending prayer: Hail, Holy Queen. If, however, you forget to pray
							your decade of the Rosary on a day, please pray it twice the
							following day. This way you will have completed the Rosary which
							was not completed the day before. Please include with your
							intentions, prayers for the spiritual and temporal needs of your
							parish, prayers for Pro-Life Intentions, prayers for Our Holy
							Father, all Bishops, Priests, Religious, and for the petitions of
							those who have joined the living Rosary Family. Join us in Praying
							the Gospel and Changing the World!
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
