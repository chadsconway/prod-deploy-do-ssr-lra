<template>
	<div class="contwrap">
		<b-container>
			<b-row align-h="center">
				<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
					<b-card
						img-top
						img-src="/img/pb/greece.jpg"
						bg-variant="dark"
						text-variant="white"
						title="An Overview of This Living Rosary Apostolate"
					>
						<b-card-text>
							The Living Rosary Apostolate is a devotion that has become a
							worlwide call to prayer. It is the Rosary in its entirety, but it
							is a shared devotion and accessible to all even in the busy
							schedule of our modern society. You do not need to meet with a
							group of people, you can pray individually as an adult or young
							person, anytime of the day or night at your own convenience.
						</b-card-text>
						<b-card-text class="para">
							However if you desire, it can be prayed together as a husband and
							wife, or as a family with your children, or teachers with their
							student’s in our Catholic schools & CCD classes, it’s a wonderful
							way to teach the children how to pray the Rosary. This rosary can
							be prayed by itself, or included with the rosaries, chaplets or
							private prayers that we pray on a daily basis. This rosary
							devotion is very do-able on a daily basis, and we assure you that
							it will be Spiritually very beneficial for you and your family.
						</b-card-text>
						<b-card-text class="para">
							Each person who joins will be assigned to a specific decade or
							mystery of the rosary. You will only pray one decade of the rosary
							every day, that is it. It is that simple!!! For example - let’s
							take the Joyful Mysteries, if you are assigned the first decade,
							you would pray the beginning prayers, The sign of the Cross, The
							Apostles Creed, The Our Father, The Three Hail Marys and The Glory
							Be. Then you would pray and meditate slowly on the 1st Joyful
							Mystery(The Annunciation) while praying 1 Our Father, 10 Hail
							Marys, Glory Be and the Fatima Prayer (O’ My Jesus). That is it,
							you are finished for the day.
						</b-card-text>
					</b-card>
					<b-card
						img-top
						img-src="/img/pb/uponcliff.jpg"
						bg-variant="dark"
						text-variant="white"
					>
						<b-card-text class="para">
							You pray this decade the same exact way every single day for 1
							month. Then the 1st day of the 2nd month you switch to the 2nd
							Joyful Mystery (The Visitation ), pray 1 Our Father, 10 Hail
							Marys, Glory Be and O’ My Jesus. Pray this decade the same exact
							way every single day for the entire month. The 1st day of the 3rd
							month switch to the 3rd decade, pray this decade the same exact
							way every day for the entire month. The 1st day of the 4th month
							switch to the 4th decade, the 1st day of the 5th month switch to
							the 5th decade, and end with the Hail Holy Queen prayer, this
							completes the Rosary.
						</b-card-text>
						<b-card-text class="para">
							So by praying the Rosary in this fashion it will take you 5 months
							to pray one rosary this way and it will take you 20 months to pray
							all 4 Mysteries of the rosary. After completion of the 20 month
							schedule, you would start at the beginning again. That is why it
							is called The “Living Rosary”. It lives on and on and on. One of
							the beautiful parts about this devotion is the Meditations that
							are included with your schedule. Before you pray your assigned
							decade, you find the designated Meditation, read it and meditate
							on it while you are praying your decade. This way of praying
							empties and quiets our hearts from the ways of the world. We are
							drawn intimately into the lives of Our Lord and Our Lady, and
							receive the love, peace and joy from Them, that we can’t obtain
							from worldly things.
						</b-card-text>
						<b-card-text class="para">
							We ask you to please pray for our Holy Father, all of our beloved
							Cardinals, Bishops, Priests, Deacons, and the religious throughout
							the entire world, for vocations, for all of the pro-life
							endeavors, and for all of the Spiritual and temporal needs of your
							own Parish.
						</b-card-text>
					</b-card>
					<b-card
						img-top
						img-src="/img/pb/sunset.jpg"
						bg-variant="dark"
						text-variant="white"
					>
						<b-card-text class="para">
							The beauty and power that makes this Rosary so special eminate
							from the hearts of the millions of people around the world who are
							also praying this devotion. They pray for all of your own personal
							heartfelt intentions, while you pray for theirs, so you are
							praying together in unity as one family. It is very, very
							powerful. Upon joining you will receive 3 sheets of information .
							The 1st sheet will be your 20 month schedule from top to bottom,
							and when you finish at the bottom of your schedule, you start over
							again at the top. (It is a life time commitment) The 2nd sheet is
							an explanation on how to pray this Living Rosary, along with the
							suggested intentions at the bottom, and the 3rd sheet front and
							back are all the meditations that go along with each individual
							decade that you pray.
						</b-card-text>
						<b-card-text class="para">
							This “Living Rosary” began in Nazi occupied Poland during the
							second World War. Started in Krakow, Poland, as Nazis were
							arresting the Salesian Priests. The priests asked Catholic layman,
							Jan Tyranowski, to gather groups of 15 youth to pray the 15
							decades (which are now 20). These groups were called Living Rosary
							Circles. Pryaing for their freedom and families in war torn
							Europe, the Living Rosary brought peace and unity to those fleeing
							for their lives. From this 1st group of 15 youth, 10 became
							priests. One of these priests name was Fr. Karol Wojtyla, who is
							now our beloved St. Pope John Paul the II. This Living Rosary was
							a part of his path to the priesthood. He also prayed and promoted
							this Rosary his entire life.
						</b-card-text>
						<b-card-text class="para">
							To receive your schedule and join in the joy of this devotion fill
							out the short form by <a href="join">clicking here</a>, or
							scrolling down to the contact section of this webpage. Please join
							us in Praying the Gospel and Changing the World! Thank you and God
							Love You!
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
