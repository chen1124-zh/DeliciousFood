<template>
	<view>
		<view class="box" >
			<view class="" style="text-align: center;">
				在参团中
			</view>
			<view class="step">
				<view class="speed">
					<!-- <view class=""> -->
						1
					<!-- </view> -->
					
					<view class="">
						基本
					</view>
				</view>
				<view class="DottedLine">
					
				</view>
				<view class="speed">
					2
					<view class="">
						规格	
					</view>
				</view>
				<view class="DottedLine">
					
				</view>
				<view class="speed">
					3
					<view class="">
						参数
					</view>
				</view>
			</view>
			<view class="">
				参团
			</view>
		</view>
	
	
		<view class="box">
			<view class="">
				配送信息
			</view>
			<view class="">
				地址
			</view>
			<view class="">
				预约
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
	
	.box{
		padding: 30rpx;
		margin: 30rpx;
		background: #007AFF;
		border-radius: 20rpx;
	}
	
	.step{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40rpx 0;
	}
	
	.DottedLine{
		width: 160rpx;
		height: 0rpx;
		border:1px dashed #ccc; 
	}
	
	.speed{
		position: relative;
		width: 60rpx;
		height: 60rpx;
		color: #fff;
		border-radius: 50%;
		background: #000;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
	}
	
	.speed view{
		
		position: absolute;
		font-size: 24rpx;
		top: 110%;
		color: #000;
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
	
</style>
