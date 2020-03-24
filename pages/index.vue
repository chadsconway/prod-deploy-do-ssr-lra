<template>
	<div>
		<div class="w3-display-container" max-height="450px">
			<v-img
				src="img/still_from_video.png"
				height="100%"
				:aspect-ratio="3 / 1"
			></v-img>
		</div>
		<video-frame-2 />
	</div>
</template>

<script>
	import videoFrame2 from '@/components/video-frame-2';
	import cardVuetify from '@/components/card-vuetify';
	export default {
		transition: {
			duration: 500,
			enterActiveClass: 'animated slideInUp',
			leaveActiveClass: 'animated slideOutDown'
		},
		components: {
			cardVuetify,
			videoFrame2
		}
	};
</script>

<style scoped>
	.w3Container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
	}
</style>
