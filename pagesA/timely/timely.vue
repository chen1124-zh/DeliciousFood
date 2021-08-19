<template>
	<view>
		<view style="position: fixed;top: 0; height: 290rpx;background: #1093FF;width: 100%;z-index: -1;">
			
		</view>
		<view class="bao">
			<view class="">
				国社
			</view>
			<view class="">
				送货
			</view>
			<view class="">
				到店
			</view>
			<view class="">
				到店
			</view>
		</view>
		<view class="shop">
			<view class="" style="display: flex;justify-content: space-between;">
				<view class="">
					<view class="">
						name
					</view>
					<view class="">
						地址
					</view>
					<view class="">
						系统
					</view>
				</view>
				<view class="">
					距离
				</view>
				
			</view>
			<view class="">
				<view class="">
					预定电话
				</view>
				<view class="">
					123
				</view>
			</view>
			<view class="">
				<view class="">
					预定时间
				</view>
				<view class="">
					座位
				</view>
			</view>
		</view>
		
		<view class="single_shop">
			<view class="title">
				名字
			</view>
			<view class="shop_good">
				<view class="shop_item">
					<view class="shop_item_introduce">
						<view class="shop_item_img">
							
						</view>
						<view class="">
							<view class="" style="font-size: 30rpx;">
								五香
							</view>
							<view class="" style="font-size: 24rpx;">
								加
							</view>
							<view class="" style="font-size: 24rpx;">
								2
							</view>
						</view>
					</view>
					<view class="">
						4.5
					</view>
				</view>
				
				
				
			</view>
			
			<view class="" style="display: flex;justify-content: space-between;">
				<view class="">
					优化
				</view>
				<view class="">
					合计42.5
				</view>
			</view>
		</view>
		
		
		<view class="">
			<view class="" style="padding:10rpx 30rpx;">
				支付方式
			</view>
			<view class="" style="padding:10rpx 30rpx;">
				订单备注
			</view>
		</view>
		
		<view class="">
			我已
		</view>
		
		<view class="payment">
			<view class="" style="flex: 1;">
				<view class="">
					42
				</view>
				<view class="">
					20
				</view>
			</view>
			<view class=""style="width: 30%;">
				确认支付
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.bao{
		display: flex;
		margin: 20rpx;
		margin-bottom: 0;
	}
	
	.bao view{
		flex: 1;
		border-radius: 10rpx 10rpx 0 0;
		background: #fff;
		padding: 10rpx;
		text-align: center;
	}
	
	.shop{
		margin: 0 20rpx;
		background: #FFF;
		padding: 20rpx;
	}
	
	.single_shop{
		margin: 30rpx;
		background: #007AFF;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	
	.shop_item{
		display: flex;
		justify-content: space-between;
	}
	
	.shop_item_img{
		width: 100rpx;
		height: 100rpx;
		background: #000000;
		margin-right: 20rpx;
	}
	
	.shop_item_introduce{
		display: flex;
	}
	
	.payment{
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		
	}
</style>
