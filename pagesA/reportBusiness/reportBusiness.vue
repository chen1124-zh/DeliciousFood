<template>
	<view style="margin: 30rpx;">
		<view class="title">
			举报原因
		</view>
		
		<view class="problem">
			<input type="text" value="" placeholder="请描述"/>
		</view>
		
		<view class="title">
			添加图片
		</view>
		
		<view class="">
			<view class="">
				
			</view>
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
	.title{
		font-size: 30rpx;
	}
	
	.problem{
		margin: 10rpx 0 70rpx 0;
	}
	
	.problem input{
		padding: 20rpx 0;
		font-size: 35rpx;
		border-bottom: 1rpx solid #ccc;
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
