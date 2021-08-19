<template>
	<view style="margin: 30rpx;">
		<view class="single_branch">
			<view class="">
				<view class="branch_name">
					名字
				</view>
				<view class="branch_p">
					4.0
				</view>
				<view class="branch_l">
					地址
				</view>
			</view>
			<view class="">
				联系商家
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
	.single_branch{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #ccc;
		padding: 30rpx 0;
	}
	
	
	
	.branch_name{
		font-size: 35rpx;
	}
	
	.branch_p{
		font-size: 30rpx;
	}
	
	.branch_l{
		font-size: 30rpx;
	}
</style>
