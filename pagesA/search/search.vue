<template>
	<view>
		<view class="search">
			<view class="search_box">
				<view class="search_icon">
					<image src="../../static/search_icon.png" style="width: 100%;height: 100%;" mode=""></image>
				</view>
				<view class="">
					<input type="text" v-model="ss" @confirm="TsrachResult" placeholder="水煮牛肉"/>
					<!-- 水煮牛肉 -->
				</view>
			</view>
		</view>
		
		<view class="title_name">
			<view class="name">
				历史搜索
			</view>
			<view class="d_icon" @click="DssList">
				<uni-icons type="trash"></uni-icons>
			</view>
		</view>
		
		<view class="select_name">
			<view class="item" v-for="(item,index) in ssList" :key='index' @click="tj">
				{{item}}
			</view>
		
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		data() {
			return {
				ss:'',
				ssList:[]
			}
		},
		onLoad() {
			var d = uni.getStorageSync('ssList')
			if(d == ''){
				this.ssList = []
			}else{
				this.ssList = d
			}
		},
		components:{
			uniIcons
		},
		methods: {
			
			tj(){
				uni.navigateTo({
					url:'../searchResult/searchResult'
				})
			},
			DssList(){
				uni.removeStorageSync({
					key : 'ssList',
				})
				this.ssList = []
			},
			TsrachResult(){
				this.ssList.push(this.ss)
				uni.setStorageSync('ssList',this.ssList)
				uni.navigateTo({
					url:'../searchResult/searchResult'
				})
			}
		}
	}
</script>

<style>

	.search{
		/* background-color: #0D92FF; */
		padding: 12rpx 25rpx;
	}
	
	.search_box{
		display: flex;
		align-items: center;
		width: 100%;
		color: #999;
		/* height: 0; */
		background-color: #f0f0f0;
		border-radius: 38rpx;
	}
	
	.search_icon{
		width: 40rpx;
		height: 40rpx;
		padding: 20rpx;
		/* background: #ccc; */
	}
	
	.title_name{
		margin: 70rpx 30rpx 30rpx 30rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.name{
		font-size: 28rpx;
		font-weight: 800;
	}
	
	.d_icon{
		width: 30rpx;
		height: 30rpx;
		/* background-color: #000000; */
	}
	
	
	.select_name{
		/* display: flex; */
		margin: 0 40rpx;
	}
	
	.item{
		float: left;
		margin: 10rpx;
		font-size: 28rpx;
		padding: 10rpx 40rpx;
		background: #f0f0f0;
	}
</style>
