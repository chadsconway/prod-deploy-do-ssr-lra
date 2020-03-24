<template>
	<div id="header" class="w3-container gradient1 w3-theme-d1 w3-hide-small">
		<div id="headerText" class="w3-hide-medium">
			The Living Rosary Apostolate
		</div>
		<div id="headerTextSmall" class="w3-hide-large">
			The Living Rosary Apostolate
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	#header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 25;
		height: 60px;
		width: 100%;
		text-align: start;
	}
	#headerText {
		font-size: 24px;
		line-height: 60px;
		text-align: start;
	}
	#headerTextSmall {
		font-size: 18px;
		line-height: 60px;
		text-align: start;
	}
</style>
