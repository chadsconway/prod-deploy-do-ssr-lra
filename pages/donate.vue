<template>
	<div class="contwrap">
		<b-container>
			<b-row align-h="center">
				<b-col xs="12" sm="12" md="8" lg="6" class="gradient1 rounded">
					<embed
						height="500"
						src="https://www.gofundme.com/f/this-living-rosary-apostolate/widget/large"
					></embed>
					
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
  embed {
    width: 100%;
  }
	b-button {
		color: gray;
	}
	embed:focus {
    outline: none;
  }
 
  
</style>
