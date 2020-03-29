<template>
	<div
		id="sfs"
		class="w3-sidebar w3-hide-xsmall w3-hide-small d1 w3-bar-block w3-card w3-animate-left"
		v-on:mouseover="updateWidth('wide')"
		v-on:mouseout="updateWidth('narrow')"
		v-bind:style="{ width: navwidth }"
	>
		<iconspritelite />

		<nuxt-link to="/" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="0 0 310 310" width="30" height="30" class="icon">
				<use xlink:href="#church" />
			</svg>
			Home
		</nuxt-link>
		<nuxt-link to="/donate" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="0 0 496 496" width="30" height="30" class="icon">
				<use xlink:href="#christian-1" />
			</svg>
			Donate
		</nuxt-link>
		<nuxt-link to="/overview" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="0 0 512 512.00027" width="30" height="30" class="icon">
				<use xlink:href="#bracelet" />
			</svg>
			Overview
		</nuxt-link>
		<nuxt-link to="/what" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="-1 0 512.00244 512" width="30" height="30" class="icon">
				<use xlink:href="#prayer" />
			</svg>
			What?
		</nuxt-link>
		<nuxt-link to="/how" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="0 0 492.388 492.388" width="30" height="30" class="icon">
				<use xlink:href="#praying-hands" />
			</svg>
			How?</nuxt-link
		>
		<nuxt-link to="/history" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="0 -15 512 511" width="30" height="30" class="icon">
				<use xlink:href="#book" />
			</svg>
			History
		</nuxt-link>
		<nuxt-link to="/approvals" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="0 0 300.002 300.002" width="30" height="30" class="icon">
				<use xlink:href="#priest" />
			</svg>
			Approvals
		</nuxt-link>

		<nuxt-link to="/join" class=" pl-1 w3-bar-item w3-button cc-text">
			<svg viewBox="0 0 100 125" width="40" height="40" class="icon">
				<use xlink:href="#heartshake" />
			</svg>
			Join
		</nuxt-link>
		<nuxt-link to="/founders" class=" w3-bar-item w3-button cc-text">
			<svg viewBox="0 0 467.963 467.963" width="30" height="30" class="icon">
				<use xlink:href="#three-candles" />
			</svg>
			Founders
		</nuxt-link>
		<theme-colors />
	</div>
</template>

<script>
	import iconspritelite from '@/components/iconspritelite.vue';
	import themeColors from '@/components/theme-colors.vue';
	export default {
		components: {
			iconspritelite,
			themeColors
		},
		name: 'sidenav',
		data: function() {
			return {
				myColor: 'w3-theme-d1',
				bkClass: 'bk',
				blurClass: 'blur',
				navwidth: '60px',
				isWide: false,
				sidenavIsHid: false,
				variants: [
					{
						variantId: 'wide',
						variantwidth: '200px'
					},
					{
						variantId: 'narrow',
						variantwidth: '60px'
					}
				]
			};
		},
		methods: {
			updateWidth(variantId) {
				if (variantId === 'wide') {
					this.navwidth = '200px';
					this.isWide = true;
				}
				if (variantId === 'narrow') {
					this.navwidth = '60px';
					this.isWide = false;
				}
			}
		}
	};
</script>

<style scoped>
	.cc-text {
		color: #fff;
		opacity: 1;
	}

	.active {
		background-color: #005755;
		color: #fff;
	}
	.hideSideNav {
		display: none;
	}

	svg use {
		margin-right: 2%;
		color: #d1d1d1;
	}
	.cc-iconbox {
		width: 40px;
		position: inline;
		left: 0;
	}
	#sfs {
		transition: 0.5s;
		height: 100%;
		width: 60px;
		padding-top: 60px;
		left: 0;
		white-space: nowrap;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	a {
		color: #d1d1d1;
	}

	a {
		height: 45px;
		width: 100%;
		overflow-x: hidden;
	}

	a:hover {
		background-color: #007977;
	}

	#sfs a {
		padding: 10px 0px 5px 10px;
		text-decoration: none;
		font-size: 18px;
		display: block;
	}

	#sfs a:hover {
		background-color: #007977;
		color: #d1d1d1;
	}

	.bk {
		transition: all 0.5s linear;
	}

	.blur {
		opacity: 0.9;
	}
	.w3-button {
		background-color: #007977;
	}
	.w3-bar-item {
		background-color: #007977;
	}
	.cc-text {
		color: white;
	}
	.w3-sidebar {
		background-color: #007977;
	}
</style>
