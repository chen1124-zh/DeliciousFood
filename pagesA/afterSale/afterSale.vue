<template>
	<view style="margin: 30rpx;">
		<view class="" style="display: flex;justify-content: space-between;">
			<view class="title_T">
				退款商品
			</view>
			<view class="">
				全选
			</view>
		</view>
		
		<view class="">
			<view class="food_box">
				<view class="" style="display: flex;">
					<view class="food_img">
						
					</view>
					<view class="">
						<view class="">
							麻辣
						</view>
						<view class="">
							花椒
						</view>
						<view class="">
							x2
						</view>
					</view>
				</view>
				<view class="">
					+
				</view>
			</view>
		</view>
		
		<view class="title_T">
			退款原因
		</view>
		
		<input type="text" value="" />
		
		<view class="title_T">
			添加照片
		</view>
		
		
		<view class="Submit">
			
			<view class="">
				提交
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
	.title_T{
		font-size: 30rpx;
	}
	
	.food_box{
		display: flex;
		justify-content: space-between;
		margin: 10rpx;
	}
	
	.food_img{
		width: 110rpx;
		height: 110rpx;
		background: #007AFF;
	}
	
	.Submit{
		width: 90%;
		height: 110rpx;
		position: fixed;
		justify-content: center;
		align-items: center;
		bottom: 30rpx;
		display: flex;
		background: #007AFF;
	}
</style>
