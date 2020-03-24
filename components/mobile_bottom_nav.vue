<template>
	<div class="gradient1">
		<div class="text-center">
			<v-bottom-sheet v-model="sheet" class="d3transp">
				<v-list>
					<v-list-item @click="sheet = false">Close Menu</v-list-item>
					<v-list-item
						@click="sheet = false"
						to="/"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg viewBox="0 0 310 310" width="30" height="30" class="icon">
							<use xlink:href="#church" />
						</svg>
						Home
					</v-list-item>
					<v-list-item
						@click="sheet = false"
						to="/donate"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg viewBox="0 0 496 496" width="30" height="30" class="icon">
							<use xlink:href="#christian-1" />
						</svg>
						Donate
					</v-list-item>
					<v-list-item
						@click="sheet = false"
						to="/overview"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg
							viewBox="0 0 512 512.00027"
							width="30"
							height="30"
							class="icon"
						>
							<use xlink:href="#bracelet" />
						</svg>
						Overview
					</v-list-item>
					<v-list-item
						@click="sheet = false"
						to="/what"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg
							viewBox="-1 0 512.00244 512"
							width="30"
							height="30"
							class="icon"
						>
							<use xlink:href="#prayer" />
						</svg>
						What?
					</v-list-item>
					<v-list-item
						@click="sheet = false"
						to="/how"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg
							viewBox="0 0 492.388 492.388"
							width="30"
							height="30"
							class="icon"
						>
							<use xlink:href="#praying-hands" />
						</svg>
						How?</v-list-item
					>
					<v-list-item
						@click="sheet = false"
						to="/history"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg viewBox="0 -15 512 511" width="30" height="30" class="icon">
							<use xlink:href="#book" />
						</svg>
						History
					</v-list-item>
					<v-list-item
						@click="sheet = false"
						to="/approvals"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg
							viewBox="0 0 300.002 300.002"
							width="30"
							height="30"
							class="icon"
						>
							<use xlink:href="#priest" />
						</svg>
						Approvals
					</v-list-item>

					<v-list-item
						@click="sheet = false"
						to="/join"
						class=" pl-1 w3-bar-item w3-button cc-text"
					>
						<svg viewBox="0 0 100 125" width="40" height="40" class="icon">
							<use xlink:href="#heartshake" />
						</svg>
						Join
					</v-list-item>
					<v-list-item
						@click="sheet = false"
						to="/founders"
						class=" w3-bar-item w3-button cc-text"
					>
						<svg
							viewBox="0 0 467.963 467.963"
							width="30"
							height="30"
							class="icon"
						>
							<use xlink:href="#three-candles" />
						</svg>
						Founders
					</v-list-item>
				</v-list>
			</v-bottom-sheet>
		</div>
		<v-bottom-navigation
			class="gradient1 w3-theme-d3 w3-container w3-hide-medium w3-hide-large"
			style="position:fixed;z-index:40"
		>
			<v-btn to="/" v-bind:class="navClasses">
				<span>Home</span>
				<svg viewBox="0 0 310 310" width="20" height="20" class="icon">
					<use xlink:href="#church" />
				</svg>
			</v-btn>

			<v-btn v-bind:class="navClasses" @click="sheet = !sheet">
				<span>Menu</span>
				<svg viewBox="0 0 512 512.00027" width="20" height="20" class="icon">
					<use xlink:href="#bracelet" />
				</svg>
			</v-btn>
		</v-bottom-navigation>
		<theme-colors />
	</div>
</template>
<script>
	import themeColors from '@/components/theme-colors.vue';
	export default {
		data() {
			return {
				navClasses: 'w3-theme-d3',
				sheet: false,
				tiles: [
					{ img: 'keep.png', title: 'Keep' },
					{ img: 'inbox.png', title: 'Inbox' },
					{ img: 'hangouts.png', title: 'Hangouts' },
					{ img: 'messenger.png', title: 'Messenger' },
					{ img: 'google.png', title: 'Google+' }
				]
			};
		},
		components: {
			themeColors
		}
	};
</script>
<style scoped>
	span {
		color: white;
		text-decoration: none;
	}
</style>
