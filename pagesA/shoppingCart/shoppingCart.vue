<template>
	<view>
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
</style>
