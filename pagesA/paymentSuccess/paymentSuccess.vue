<template>
	<view>
		<view class="c">
			<view class="icon">
				
			</view>
			<view class="Aweek">
				8999
			</view>
			<view class="">
				支付成功
			</view>
		</view>
		<view class="item">
			付款时间
		</view>
		
		<view class="item">
			订单
		</view>
		
		<view class="item">
			支付
		</view>
		
		<view class="Submit">
			查看订单
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


.c{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50rpx;
}

.icon{
	width: 300rpx;
	height: 300rpx;
	background: #007AFF;
}

.item{
	margin: 30rpx;
}

	.Submit{

		width: 30%;
		height: 110rpx;
		position: fixed;
		justify-content: center;
		align-items: center;
		bottom: 100rpx;
		display: flex;
		background: #007AFF;
	}


</style>
