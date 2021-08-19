<template>
	<view style="margin: 30rpx;">
		<view class="">
			订单备注
		</view>
		<view class="" style="border-bottom: 1rpx solid #ccc;">
			<input type="text" value="" placeholder="可输入口味" />
		</view>
		
		<view class="Submit">
			确认提交
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
	.Submit{
		width: 80%;
		padding: 20rpx;
		border-radius: 10rpx;
		position: fixed;
		bottom: 20rpx;
		background: #007AFF;
		text-align: center;
	}
</style>
