<template>
	<view>
		<view class="user_information">
			<view class="information">
				<view class="user_left">
					<view class="user_img">
						
					</view>
					<view class="">
						<view class="user_name">
							姓名
						</view>
						<view class="user_phone">
							134********
						</view>
					</view>
				</view>
				<view class="business_login">
					商家登录
				</view>
			</view>
			<view class="history_box">
				<view class="history_item">
					<view class="history_num">
						0
					</view>
					<view class="history_name">
						购物车
					</view>
				</view>
				<view class="history_item">
					<view class="history_num">
						0
					</view>
					<view class="history_namehistory_name">
						购物车
					</view>
				</view>
				<view class="history_item">
					<view class="history_num">
						0
					</view>
					<view class="history_name">
						购物车
					</view>
				</view>
				<view class="history_item">
					<view class="history_num">
						0
					</view>
					<view class="history_name">
						购物车
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="often_function">
			<view class="bar">
				
			</view>
			<view class="often_box">
				<view class="often_title">
					常用功能
				</view>
				<view class="often_item_box">
					<view class="often_item">
						<view class="often_icon">
							
						</view>
						<view class="often_name">
							我的客服
						</view>
					</view>
					<view class="often_item">
						<view class="often_icon">
							
						</view>
						<view class="often_name">
							消息
						</view>
					</view>
					<view class="often_item">
						<view class="often_icon">
							
						</view>
						<view class="often_name">
							意见反馈
						</view>
					</view>
					<view class="often_item">
						<view class="often_icon">
							
						</view>
						<view class="often_name">
							足迹
						</view>
					</view>
				</view>
			</view>
		</view>
	
		<view class="setMeal_box">
			<view class="setMeal_item">
				行政套餐
			</view>
			<view class="setMeal_item">
				自选套餐
			</view>
			<view class="setMeal_item">
				会务套餐
			</view>
		</view>
		
		<view class="good_all_box">
			<view class="good_item_box">
				<view class="googImgBox">
					
				</view>
				<view class="good_item_describe">
					<view class="good_name_mueu">
						<view class="good_name">
							111111
						</view>
						<view class="good_mueu">
							...
						</view>
					</view>
					
					<view class="good_describe">
						<view class="good_score">
							1
						</view>
						<view class="good_sale">
							2
						</view>
					</view>
					
					<view class="good_performance">
						<view class="good_start_price">
							1
						</view>
						<view class="good_distance_time">
							1
						</view>
					</view>
					
					<view class="good_describe_label_box">
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
					</view>
					<view class="good_taste_label_box">
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_reserve">
							预定
						</view>
							
					</view>
					
					
					
				</view>
			</view>
				
			
			<view class="good_item_box">
				<view class="googImgBox">
					
				</view>
				<view class="good_item_describe">
					<view class="good_name_mueu">
						<view class="good_name">
							111111
						</view>
						<view class="good_mueu">
							...
						</view>
					</view>
					
					<view class="good_describe">
						<view class="good_score">
							1
						</view>
						<view class="good_sale">
							2
						</view>
					</view>
					
					<view class="good_performance">
						<view class="good_start_price">
							1
						</view>
						<view class="good_distance_time">
							1
						</view>
					</view>
					
					<view class="good_describe_label_box">
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
					</view>
					<view class="good_taste_label_box">
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_reserve">
							预定
						</view>
							
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.user_information{
		background: #0D92FF;
		padding-bottom: 40rpx;
	}
	
	.information{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.user_left{
		display: flex;
		margin-left: 30rpx;
		
	}
	
	.user_img{
		width: 110rpx;
		height: 110rpx;
		background: #ccc;
		border-radius: 50rpx;
		margin-right: 10rpx;
	}
	
	.user_name{
		font-size: 40rpx;
		font-weight: 800;
	}
	
	.user_phone{
		font-size: 30rpx;
	}
	
	.business_login{
		font-size: 26rpx;
		color: #fff;
		background-color: #A9C8FF;
		padding: 4rpx 20rpx;
		border-radius: 20rpx 0rpx 0rpx 20rpx;
	}
	
	.history_box {
		display: flex;
		justify-content: space-around;
		margin-top: 40rpx;
		color: #fff;
	}
	
	.history_num{
		font-size: 36rpx;
		
		text-align: center;
	}
	
	.history_name{
		font-size:30rpx ;
	}
	
	.often_function{
		position: relative;
	}
	
	.bar{
		position: absolute;
		top: 0;
		z-index: -1;
		width: 100%;
		height: 40rpx;
		background: #0D92FF;
	}
	
	.often_box{
		border-radius: 20rpx;
		margin: 0 40rpx;
		padding: 30rpx;
		background-color: #fff;
		box-shadow: 10rpx 10rpx 10rpx #888888;
	}
	
	.often_title{
		font-size: 32rpx;
		font-weight: 800;
	}
	
	.often_item_box{
		display: flex;
		justify-content: space-around;
		margin-top: 20rpx;
	}
	
	.often_item{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.often_icon{
		width: 60rpx;
		height: 60rpx;
		background: #000000;
		margin: 20rpx 0;
	}
	
	.often_name{
		font-size: 24rpx;
		color: #999;
	}
	
	.setMeal_box{
		margin-top: 40rpx;
		display: flex;
	}
	
	
	.setMeal_item{
		margin: 0 26rpx;
		font-size: 30rpx;
	}
	
	
	.good_all_box{
		margin-bottom: 30rpx;
	}
	
	.good_item_box{
		display: flex;
		margin: 20rpx;
	}
	
	.googImgBox{
		width: 170rpx;
		height: 170rpx;
		border-radius: 10rpx;
		background: #007AFF;
		margin-right: 20rpx;
	}
	.good_item_describe{
		flex: 1;
	}
	
	.good_name_mueu{
		display: flex;
		justify-content: space-between;
	}
	
	.good_name{
		font-size: 30rpx;
		color: #000;
	}
	.good_describe{
		display: flex;
		margin: 5rpx 0;
	}
	
	.good_score{
		margin-right: 20rpx;
		font-size: 28rpx;
	}
	
	.good_sale{
		font-size: 28rpx;
	}
	
	.good_start_price,.good_distance_time,.good_describe_label_box,.good_taste_label_box{
		font-size: 24rpx;
	}
	
	.good_performance{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.good_describe_label_box{
		display: flex;
		
	}
	
	.good_item_describe_label{
		color: #E19D58;
		background: #FEF4E9;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
	}
	
	.good_item_taste_label_box{
		color: #EEACAA;
		border: 1rpx solid #FCFCFC;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
	}
	
	.good_taste_label_box{
		display: flex;
	}
	
	.good_reserve{
		padding: 10rpx;
		border: 1rpx solid #999;
	}
	
	
	
</style>
