<template>
	<view class="content">
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
							<!-- logo -->
						</view>
						<view class="good_name">
							店铺名称
						</view>
					</view>
					<view class="order_statce">
						待支付
					</view>
					
				</view>
				
				<view class="order_miao">
					<view class="order_img_name">
						<view class="order_img">
							<view class="order_item_img">
								
							</view>
						</view>
						<view class="order_item_name">
							鱼蛋分、肥牛
						</view>
					</view>
					<view class="order_price_num">
						<view class="order_item_price">
							25.5
						</view>
						<view class="order_item_num">
							共4件
						</view>
					</view>
				</view>
				
				<view class="difference">
					共3人下单还差345可下单
				</view>
				
				<view class="button_group">
					<view class="button_q">
						取消付款
					</view>
					<view class="button_q">
						立即付款
					</view>
					<view class="button_q">
						提交订单
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
	.content{
		background: #cccc;
		height: 100vh;
	}
	
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
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	
	.good_item_top{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}
	
	.item_order_box{
		display: flex;
		align-items: center;
	}
	
	.good_logo{
		width: 40rpx;
		height: 40rpx;
		background: #000;
		border: 10rpx;
	}
	
	.good_name{
		font-size: 26rpx;
		font-weight: 800;
		margin-left: 10rpx;
	}
	
	.order_statce{
		font-size: 26rpx;
	}
	
	.order_miao{
		display: flex;
		justify-content: space-between;
	}
	
	.order_img_name{
		display: flex;
		align-items: center;
	}
	
	.order_img{
		display: flex;
	}
	
	.order_item_img{
		width: 112rpx;
		height: 112rpx;
		background: #000;
	}
	
	.order_item_name{
		color: #999;
		margin-left: 20rpx;
	}
	
	.order_item_price{
		color: #000;
		font-size: 50rpx;
	}
	
	.order_item_num{
		font-size: 26rpx;
		text-align: center;
	}
	
	.difference{
		margin: 10rpx 0 20rpx 0;
		font-size: 26rpx;
		color: #999;
	}
	
	.button_group{
		display: flex;
		justify-content: flex-end;
	}
	
	.button_q{
		padding: 14rpx 36rpx;
		border: 1rpx solid #ccc;
		border-radius: 10rpx;
		color: #333;
		font-size: 24rpx;
		margin-left: 10rpx;
	}
	
	
</style>
