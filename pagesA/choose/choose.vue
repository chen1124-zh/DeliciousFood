<template>
	<view>
		<view :style="{'height':navigation.height+'px','paddingTop': navigation.top + 'px','paddingBottom':'10rpx'}" >
			<view :style="{'height':navigation.height+'px','width':navigation.left+'px'}" class="topNavigation">
				<view class="search" style="display: flex;">
					<view class="">
						'+'
					</view>
					<view class="">
						s
					</view>
					<view class="">
						s
					</view>
				</view>
			</view>
		</view>
		
		<view class="">
			
		</view>
		
		<view class="" style="border-radius: 20rpx 20rpx 0 0;background: #4CD964;">
			<view class="" style="display: flex;justify-content: space-between;padding: 20rpx;">
				<view class="">
					选择
				</view>
				<view class="">
					木木
				</view>
			</view>
			
			<view class="" style="display: flex;justify-content: space-between;">
				<view class="">
					电击小子
				</view>
				<view class="">
					<view class="">
						截止
					</view>
					<view class="">
						12
					</view>
					<view class="">
						112
					</view>
					<view class="">
						餐团
					</view>
				</view>
			</view>
			
			<view class="">
				动庭
			</view>
			
			
			<view class="good_box">
				<view class="good_left">
					<view class="time">
						早餐
					</view>
					<view class="good_title_select">
						<view class="">
							<text>特色菜</text>
						</view>
						<view class="">
							<text>特色菜</text>
						</view>
						<view class="">
							<text>特色菜</text>
						</view>
						<view class="">
							<text>特色菜</text>
						</view>
						<view class="">
							<text>特色菜</text>
						</view>
					</view>
				</view>
				<view class="good_right">
					<view class="good_title">
						特色菜
					</view>
					<view class="good_item_box">
						<view class="good_item">
							<view class="good_img">
								
							</view>
							<view class="good_content">
								<view class="good_name">
									麻辣香锅
								</view>
								<view class="good_describe">
									12313213123123
								</view>
								<view class="operation">
									<view class="price_discount">
										<view class="discount">
											9.8
										</view>
										<view class="price">
											4.5
										</view>
									</view>
									
									<view class="">
										<text class="">
											修改
										</text>
										<text class="">
											下架
										</text>
									</view>
								</view>
								
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		
		
		
			
			
			
		
		
		<view class="Submit">
			<view class="">
				<view class="">
					
				</view>
				<view class="">
					<view class="">
						59
					</view>
					<view class=""> 
						30
					</view>
				</view>
			</view>
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
	.Submit{
		width: 100%;
		height: 110rpx;
		position: fixed;
		justify-content: space-between;
		align-items: center;
		bottom: 0;
		display: flex;
		background: #007AFF;
	}
	
	.good_box{
		display: flex;
	}
	
	.time{
		margin: 20rpx;
		padding:10rpx 20rpx;
		background: #999;
	}
	.good_title_select{
		width: 190rpx;
		background: #ccc;
	}
	
	.good_title_select view{
		width: auto;
		padding: 0 6rpx;
		
	}
	
	.good_title_select view text{
		display: block;
		text-align: center;
		padding: 10rpx 0;
		margin: 10rpx 0;
		border-left: 4rpx solid #007AFF;
	}	
	
	.good_right{
		margin-left: 30rpx;
		flex: 1;
	}
	.good_title{
		margin: 20rpx 0;
		font-size: 30rpx;
	}
	
	
	.good_item{
		margin: 20rpx 0;
		display: flex;
		align-items: center;
	}
	
	.good_img{
		width: 200rpx;
		height: 200rpx;
		background: #000000;
		margin-right: 10rpx;
	}
	
	.good_name{
		font-size: 30rpx;
		font-weight: 800;
	}
	
	.good_describe{
		font-size: 28rpx;
		color: #D4C3CE;
	}
	
	.operation{
		display: flex;
		align-items: flex-end;
	}
	
	
	
</style>
