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
			<view class="">
				<image src="../../static/logo.png" mode=""></image>
			</view>
		</view>
		
		<view class="words_describe">
			<view class="name">
				名字
			</view>
			<view class="Record">
				好评
			</view>
			<view class="Price">
				<view class="">
					4.5
				</view>
				<view class="">
					2
				</view>
			</view>
			<view class="title">
				商品详情
			</view>
			<view class="">
				<view class="">
					<view class="">
						商品
					</view>
					<view class="">
						本
					</view>
				</view>
			</view>
			<view class="">
				商品评价
			</view>
		</view>
		
		
		<view class="recommend">
			<view class="name">
				为你添加
			</view>
			<view class="recommend_box">
				<view class="">
					<view class="goodImg">
						
					</view>
					<view class="good_name">
						五香
					</view>
					<view class="sale">
						月
					</view>
					<view class="" style="display: flex;justify-content: space-between;">
						
						<view class="">
							4
						</view>
						<view class="">
							2
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
	
	.words_describe{
		padding: 30rpx;
	}
	
	.name{
		font-size: 35rpx;
	}
	
	.Record{
		color: #ccc;
	}
	
	.Price{
		display: flex;
		justify-content: space-between;
	}
	
	.title{
		font-size: 32rpx;
	}
	
	.recommend_box{
		width: 230rpx;
	}
	
	.goodImg{
		width: 230rpx;
		height: 230rpx;
		background: #007AFF;
	}
	.recommend{
		padding: 30rpx;
	}
	
	.good_name{
		font-size: 400;
	}
	
	.sale{
		font-size: 30rpx;
	}
</style>
