<template>
	<view>
		<view :style="{'height':navigation.height+'px',
						'paddingTop': navigation.top + 'px',
						'paddingBottom':'10rpx',
						'backgroundColor':'#0D92FF',
						'color':'#fff'}" >
			<view :style="{'height':navigation.height+'px'}" class="topNavigation">
				我的订单
			</view>
		</view>
		
		<view class="screen_select">
			<view class="screen_select_name">
				全部
			</view>
			<view class="screen_select_name">
				全部
			</view>
			<view class="screen_select_name">
				全部
			</view>
			<view class="screen_select_name">
				全部
			</view>
		</view>
		
		<view class="good_order_box">
			<view class="good_item_order">
				<view class="good_item_top">
					<view class="item_order_box">
						<view class="good_logo">
							logo
						</view>
						<view class="good_name">
							店铺名称
						</view>
					</view>
					<view class="order_statce">
						待支付
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigation:''
			}
		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		methods: {
			
		}
	}
</script>

<style>
	.topNavigation{
		font-size: 40rpx;
		margin-left: 40rpx;
		font-weight: 800;
	}
	
	.screen_select{
		display: flex;
		background: #0D92FF;
	}
	
	.screen_select_name{
		font-size: 36rpx;
		padding:20rpx 40rpx;
		color: #fff;
	}
	
	.good_item_order{
		margin: 20rpx;
	}
	
	.good_item_top{
		display: flex;
		justify-content: space-between;
	}
	
</style>
