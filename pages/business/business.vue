<template>
	<view>
		<view :style="{'height':navigation.height+'px','paddingTop': navigation.top + 'px','paddingBottom':'10rpx'}" >
			<view :style="{'height':navigation.height+'px','width':navigation.left+'px'}" class="topNavigation">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigation:null
			}
		},
		components: {
		},
		created() {
			this.navigation = this.$store.getters.getNavigation
			console.log(this.navigation)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

</style>
