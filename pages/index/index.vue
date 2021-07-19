<template>
	<view class="content">
		<view :style="{'height':navigation.height+'px',
						'paddingTop': navigation.top + 'px',
						'paddingBottom':'10rpx',
						'backgroundColor':'#0D92FF',
						'color':'#fff'}" >
			<view :style="{'height':navigation.height+'px'}" class="topNavigation">
				<view class="address">
					街道
				</view>
				<view style="text-align: center;">
					美食天下
				</view>
			</view>
		</view>
		<view class="search">
			<view class="search_box">
				<view class=".search_icon">
					
				</view>
				<view class="">
					水煮牛肉
				</view>
			</view>
		</view>
		
		<view class="Carousel">
			<swiper class="swiper" :indicator-dots="true" 
					:autoplay="true"
					:circular = 'true'
					:interval="2000"
					:duration="500"
					indicator-color='#fff'
					indicator-active-color='#0D92FF'>
				<swiper-item>
					<view style="width: auto;height: 300px;background-color: #007AFF;">A</view>
				</swiper-item>
				<swiper-item>
					<view style="width: auto;height: 300px;background-color: #3F536E;">B</view>
				</swiper-item>
				<swiper-item>
					<view style="width: auto;height: 300px;background-color: #4CD964;">C</view>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view class="">
			<view class="">
				<view class="">
					
				</view>
				<view class="title">
					团餐
				</view>
			</view>
			
			<view class="">
				<view class="">
					
				</view>
				<view class="title">
					拼餐
				</view>
			</view>
			
			<view class="">
				<view class="">
					
				</view>
				<view class="title">
					贵宾
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigation:'',
			}
		},
		onLoad() {

		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		methods: {

		}
	}
</script>

<style scoped>
	.address{
		position: absolute;
		left: 25rpx;
		font-size: 28rpx;
	}
	.topNavigation{
		/* padding: 0 20rpx; */
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
	}
	
	.search{
		background-color: #0D92FF;
		padding: 12rpx 25rpx;
	}
	
	.search_box{
		display: flex;
		align-items: center;
		width: 100%;
		color: #ccc;
		/* height: 0; */
		background-color: #fff;
		border-radius: 38rpx;
	}
	
	.search_icon{
		width: 40rpx;
		height: 40rpx;
		padding: 20rpx;
		background: #ccc;
	}
	.Carousel{
		padding: 10rpx 25rpx;
		padding-bottom: 20rpx;
		background-color: #0D92FF;
	}
</style>
