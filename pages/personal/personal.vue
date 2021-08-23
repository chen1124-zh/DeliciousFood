<template>
	<view>
		<view class="user_information">
			<view class="information">
				<view class="user_left"  @click="getUser()">
					<view class="user_img">
						<image :src="userInfo.images" style="width: 100%;height: 100%;" mode=""></image>
					</view>
					<view class="" style="line-height: 110rpx;" v-if="!userInfo">
						未登陆 
					</view>
					<view class="" v-else>
						
						<view class="user_name">
							{{userInfo.nickName}}
						</view>
						<view class="user_phone">
							{{userInfo.mobile}}
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
						收藏	
					</view>
				</view>
				<view class="history_item">
					<view class="history_num">
						0
					</view>
					<view class="history_name">
						评价
					</view>
				</view>
				<view class="history_item">
					<view class="history_num">
						0
					</view>
					<view class="history_name">
						饭卡
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
			<view :class="switchs==1?'setMeal_item select_setMeal_item':'setMeal_item'" @click="selectSwitchs(1)">
				为你推荐
			</view>
			<view :class="switchs==2?'setMeal_item select_setMeal_item':'setMeal_item'"  @click="selectSwitchs(2)">
				新品推荐
			</view>
			<view :class="switchs==3?'setMeal_item select_setMeal_item':'setMeal_item'" @click="selectSwitchs(3)">
				附近热卖
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
						<view class="good_item_taste_label_box" v-for="(food,i) in item.foodSortList" :key='i'>
							{{food}}
						</view>
						<!-- <view class="good_item_taste_label_box">
							香辣
						</view>
						<view class="good_item_taste_label_box">
							香辣
						</view> -->
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
	import Api from '@/common/http.js'
	export default {
		data() {
			return {
				userInfo:'',
				switchs:1,
				storeList:[]
			}
		},
		onLoad() {
			this.getStore()
		},
		onShow() {
			var user = uni.getStorageSync('user');
			if(user != ''){
				this.userInfo = user
			}
			
		},
		methods: {
			rGoog(index){
				uni.navigateTo({
					url:'../../pagesA/goodDetails/goodDetails?id='+this.storeList[index].id
				})
			},
			selectSwitchs(index){
				this.switchs = index
			},
			getStore(){
				Api.getStoreList({}).then(res => {
					// console.log('res',res);
					this.storeList = res.data
					this.storeList.map((item)=>{
						item.foodSortList = item.foodLabel.split(",")
						item.appraiseManagerList = item.appraiseManager.split(",")
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
			getUser(){
				var than = this
				var user = uni.getStorageSync('user')
				
				if(user == ''){
					uni.getUserProfile({
						desc: '登录',
						success: (res) => {
							uni.login({
								success: (ress) => {
									let code = ress.code
									console.log(code)
									uni.request({
										url: 'http://47.113.217.251:8080/user/save', //仅为示例，并非真实接口地址。
										method:"POST", 
										data: {           
											"code":code,
											"type":1, 
											"rawData":{  
												"nickName":res.userInfo.nickName,
												"mobile":"17888888888",
												"isVip":0,
												"images":res.userInfo.avatarUrl,
												"userName":"", 
												"password":"", 
												"accountType":1,
												"gender":res.userInfo.gender
											}
										},
										success: (resdata) => {
											console.log('resdata',resdata)
											this.userInfo = resdata.data.data
											uni.setStorageSync('token',resdata.data.data.data.openId);
											uni.setStorageSync('user',resdata.data.data.data);
											
											
										}
									});
									
								},
							})
						},
						fail() {
							uni.showToast({
								title: '需要授权后才能继续',
								duration: 1500,
								icon: 'none'
							})
						}
					})
				}else{
					this.user = user
				}
				
			}
			
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
		overflow: hidden;
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
	
	.select_setMeal_item{
		font-weight: bold;
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
