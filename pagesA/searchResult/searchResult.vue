<template>
	<view>
		<view :style="{'height':navigation.height+'px','paddingTop': navigation.top + 'px','paddingBottom':'10rpx'}" >
			<view :style="{'height':navigation.height+'px','width':navigation.left+'px'}" class="topNavigation">
				<view class="search">
					<view class="search_box">
						<view class="search_icon">
							<image src="../../static/search_icon.png" style="width: 100%;height: 100%;" mode=""></image>
						</view>
						<view class="">
							水煮牛肉
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="screen_box">
			<view class="screen_left">
				
				<view class="select_item">
					<picker mode="selector" :range="sorte" range-key="name" @change="sortchange">
						<view style="font-weight: bold;font-size: 30rpx;color: #007AFF;">{{sorte[storeIndex].name}}
							<uni-icons type="arrowdown" color='#007AFF'></uni-icons>
						</view>
					</picker>
				</view>
				<view class="select_item">
					距离
				</view>
				<view class="select_item">
					销量
				</view>
			</view>
			<view class="screen">
				筛选 <image src="../../static/screen.png" mode="" style="width: 28rpx;height: 28rpx;"></image>
			</view>
		</view>
		<view class="good_all_box">
			<view class="good_item_box" v-for="(item,index) in storeList" :key='index' @click="rGoog(index)">
				<view class="googImgBox">
					<image :src="item.storeLogo" mode="" style="width: 100%;height: 100%;"></image>
				</view>
				<view class="good_item_describe">
					<view class="good_name_mueu">
						<view class="good_name">
							{{item.storeName}}
						</view>
						<view class="good_mueu">
							...
						</view>
					</view>
					
					<view class="good_describe">
						<view class="good_score">
							<!-- 1 -->4.8
						</view>
						<view class="good_sale">
							{{item.saleNum||0}}
						</view>
					</view>
					
					<view class="good_performance">
						<view class="good_start_price">
							{{item.startingPrice}}
						</view>
						<view class="good_distance_time">
							{{item.deliveryTime}}分钟 {{item.deliveryRange}}km
						</view>
					</view>
					
					<view class="good_describe_label_box">
						
						<view class="good_item_describe_label" v-for="(foods,i) in item.appraiseManagerList" :key='i'>
							{{foods}}
						</view>
						<!-- <view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view>
						<view class="good_item_describe_label">
							配送
						</view> -->
					</view>
					<view class="good_taste_label_box">
						<view style="flex: 1;overflow-x: auto;display: flex;margin-right: 10rpx;">
							<view class="good_item_taste_label_box" v-for="(food,i) in item.foodSortList" :key='i'>
								{{food}}
							</view>
						</view>
						<view class="good_reserve">
							支持预定 	
						</view>
					</view>
					
					
					
				</view>
			</view>
				
			
			
			
			
		</view>
			
	</view>
</template>

<script>
	import Api from '@/common/http.js'
	export default {
		data() {
			return {
				navigation:null,
				storeList:[],
				sorte: [{
					name: '综艺排序',
					value: 'zc'
				}],
				storeIndex: 0,
			}
		},
		onLoad() {
			this.getStore()
		},
		components: {
		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		methods: {
			getStore(){
				Api.getStoreList({}).then(res => {
					// console.log('res',res);
					this.storeList = res.data
					this.storeList.map((item) => {
						item.foodSortList = []
						var foodLabelObj = JSON.parse(item.foodLabel)
						
						foodLabelObj.system.map((items)=>{
							item.foodSortList.push(items.name)
						})
						
						foodLabelObj.custom.map((items)=>{
							item.foodSortList.push(items)
						})
						
						item.appraiseManagerList = []
						var appraiseManagerObj = JSON.parse(item.appraiseManager)
						appraiseManagerObj.system.map((items)=>{
							item.appraiseManagerList.push(items.name)
						})
						
						appraiseManagerObj.custom.map((items)=>{
							item.appraiseManagerList.push(items)
						})
						
						
					})
					// this.storeList.foodSortList = this.storeList
					// console.log('this.storeList.foodSortList',this.storeList)
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			rGoog(index){
				uni.navigateTo({
					url:'../../pagesA/goodDetails/goodDetails?id='+this.storeList[index].id
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.search{
		height: 100%;
		// background-color: #0D92FF;
		padding: 0rpx 25rpx;
	}
	
	.search_box{
		height: 100%;
		display: flex;
		align-items: center;
		width: 100%;
		color: #ccc;
		background-color: #f0f0f0;
		border-radius: 38rpx;
	}
	
	.search_icon{
		width: 40rpx;
		height: 40rpx;
		padding: 20rpx;
		// background: #ccc;
	}
	
	
	.screen_box{
		margin: 0 10rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.screen{
		font-size: 28rpx;
		margin-right: 10rpx;
		color: #999;
	}
	
	.screen_left{
		display: flex;
		align-items: center;
	}
	
	.select_item{
		margin: 0 10rpx;
		font-size: 24rpx;
		color: #999;
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
		overflow: hidden;
	}
	.good_item_describe{
		flex: 1;
		overflow: hidden;
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
		color: #F8621E;
		display: flex;
		align-items: center;
	}
	
	.good_sale{
		font-size: 28rpx;
	}
	
	.good_start_price,.good_distance_time,.good_describe_label_box,.good_taste_label_box{
		font-size: 24rpx;
		color: #999;
		margin-top: 10rpx;
	}
	
	.good_performance{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.good_describe_label_box{
		display: flex;
		overflow-x: auto;
	}
	
	.good_item_describe_label{
		color: #E19D58;
		background: #FEF4E9;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
		white-space: nowrap;
	}
	
	.good_item_taste_label_box{
		color: #EEACAA;
		border: 1rpx solid #FCFCFC;
		margin-right: 16rpx;
		padding: 2rpx 20rpx;
		border-radius: 1rpx;
		white-space: nowrap;
	}
	
	.good_taste_label_box{
		display: flex;
	}
	
	.good_reserve{
		padding: 10rpx;
		border: 1rpx solid #999;
	}
</style>
