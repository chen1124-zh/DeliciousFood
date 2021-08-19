<template>
	<view style="background: #2C405A;">
		<view :style="{'width':'100%','height':navigation.height+'px','paddingTop': navigation.top + 'px','paddingBottom':'10rpx','position': 'fixed','top':'0','background': 'rgba(0,0,0,.3)'}" >
			<view :style="{'height':navigation.height+'px','width':navigation.left+'px'}" class="topNavigation">
				<view class="search" style="height: 100%;display: flex;align-items: center;justify-content: space-between;">
					<view class="" 
					style="width: 50rpx;height: 50rpx;border-radius: 50%;background: rgba(0,0,0,.5);display: flex;justify-content: center;align-items: center;">
						<uni-icons type="arrowleft" color="#fff"></uni-icons>
					</view>
					<view class="">
						<uni-icons type="star"></uni-icons>
						
					</view>
					<!-- <view class="">
						s
					</view> -->
				</view>
			</view>
		</view>
		
		<view class="">
			<view class="">
				<image :src="store.storeIntroductImg" mode="" style="width: 100%;"></image>
			</view>
			
			
		</view>
		
		
		<view class="box" style="position: relative;top: -100rpx;">
			<view class="shop_information">
				<view class="shop_img">
					
				</view>
				
				<view class="shop_name">
					{{store.storeName}}
				</view>
			</view>
			
			<view class="evaluate">
				<view class="">
					4.8
				</view>
				
				<view class="">
					月售{{store.addOrderNum||0}}
				</view>
				
				<view class="">
					配送约{{store.deliveryTime}}分钟
				</view>
				<view class="">
					￥{{store.startingPrice}}
				</view>	
			</view>
			
			<view class="businessTime">
				营业时间{{store.businessTime}}
			</view>
			
			<view class="relation">
				<view class="">
					广州
				</view>
				<view class="">
					联系商家
				</view>
			</view>
			<view class="" style="display: flex;">
				<view class="optimization"  v-for="(item,index) in store.servuceConfigurationList" :key="index">
					{{item}}
				</view>
			</view>
			
			<view class="" style="display: flex;">
				<view class="lableBox" v-for="(item,index) in store.foodSortList" :key="index">
					{{item}}
				</view>
			</view>
			
			
			<view class="option">
				<view class="">
					点餐
				</view>
				<view class="">
					评价
				</view>
				<view class="">
					商家
				</view>
				
				<view class="">
					一周
				</view>
			</view>
			
			<view class="time">
				<view class="">
					午餐
				</view>
				<view class="">
					123123
				</view>
			</view>
			
			<view class="business_box">
				<view class="business_describe">
					本店
				</view>
				
				<view class="describe_img_box">
					<view class="describe_img">
						
					</view>
					<view class="describe_img">
						
					</view>
				</view>
				
				<view class="about">
					食品安全
	 			</view>
				<view class="about">
					配送
				</view>
				<view class="about">
					时间
				</view>
				<view class="about">
					分店
				</view>
				
				<view class="">
					举报商家
				</view>
			</view>
			
			
			<view class="good_box" style="margin-bottom: 100rpx;">
				<view class="good_left">
					<view class="time">
						早餐
					</view>
					<view class="good_title_select">
						<view class="" v-for="(item,index) in classifiList" :key="index">
							<text>{{item.menuName}}</text>
						</view>
						<!-- <view class="">
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
						</view> -->
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
		
		
		<view class="Merit">
			<view class="Specifications">
				<view class="Specifications_box">
					<view class="food_name">
						菜品名称
					</view>
					<view class="">
						<view class="">
							规格分类名称
						</view>
						<view class="">
							规格名称
						</view>
					</view>
					<view class="">
						<view class="">
							规格分类名称
						</view>
						<view class="">
							规格名称
						</view>
					</view>
					<view class="">
						<view class="">
							总价45
						</view>
						<view class="">
							加入
						</view>
					</view>
				</view>
				<view class="">
					x
				</view>
			</view>
		
			<view class="Aweek">
				<view class="" style="display: flex;justify-content: space-between;">
					<view class="">
						午餐
					</view>
					<view class="">
						一周
					</view>
					<view class="">
						关闭
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import Api from '@/common/http.js'
	export default {
		data() {
			return {
				navigation:'',
				storeId:'',
				store:'',
				classifiList:''
			}
		},
		components:{
			uniIcons
		},
		onLoad(op) {
			this.storeId = op.id
			this.getStroeData()
		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		methods: {
			getStroeData(){
				
				Api.getStoreList({id:this.storeId}).then(res => {
					// console.log('res',res);
					this.store = res.data[0]
					// this.storeList.map((item)=>{
						this.store.foodSortList = this.store.foodLabel.split(",")
						this.store.appraiseManagerList = this.store.appraiseManager.split(",")
						this.store.servuceConfigurationList = this.store.servuceConfiguration.split(",")
					// })
					// this.storeList.foodSortList = this.storeList
					// console.log('this.storeList.foodSortList',this.storeList)
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});	
				
				var data = {
					 storeId:this.storeId
				}
				Api.getMenuTypeList(data).then(res => {
					this.classifiList = res.data.data
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});	
			}
		}
	}
</script>

<style>
	.shop_information{
		position: relative;
		padding: 20rpx;
	}
	
	.shop_img{
		position: absolute;
		bottom: 20rpx;
		right: 20rpx;
		width: 130rpx;
		height: 130rpx;
		background: #007AFF;
	}
	
	.shop_name{
		font-size: 40rpx;
	}
	
	.evaluate{
		display: flex;
		padding: 0 20rpx;
	}
	
	.box{
		background: #fff;
		border-radius: 30rpx 30rpx 0 0;
	}
	
	.businessTime{
		padding: 0 20rpx;
	}
	
	.relation{
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
	}
	
	.optimization{
		padding: 0 20rpx;
	}
	
	.lableBox{
		display: flex;
		padding: 0 20rpx;
	}
	
	.option{
		display: flex;
		padding: 0 20rpx;
	}
	
	.time{
		display: flex;
		padding: 0 20rpx;
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
	
	.Merit{
		position: fixed;
		top: 0;
		z-index: 101;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		display: none;	
	}
	.Specifications{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.Specifications_box{
		width: 90%;
		background: #fff;
		border-radius: 20rpx;
		padding: 20rpx;
	}
	
	.food_name{
		font-size: 40rpx;
		color: #333;
	}
	
	
	.Aweek{
		position: absolute;
		bottom: 0;
		background: #fff;
		width: 90%;
		height: 70%;
		padding: 5%;
		border-radius: 30rpx 30rpx 0 0;
	}
	
	
	.business_box{
		padding: 20rpx;
	}
	
	.business_describe{
		font-size: 24rpx;
		color: #333;
		margin: 20rpx 0;
	}
	
	.describe_img_box{
		display: flex;
	}
	
	.describe_img{
		width: 220rpx;
		height: 220rpx;
		background: #007AFF;
		margin-right: 10rpx;
	}
	
	.about{
		padding: 30rpx 0;
		border-bottom: 1rpx solid #ccc;
		font-size: 36rpx;
	}
	
</style>
