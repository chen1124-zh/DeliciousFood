<template>
	<view class="content">
		<view :style="{'height':navigation.height+'px',
						'paddingTop': navigation.top + 'px',
						'paddingBottom':'10rpx',
						'backgroundColor':'#0D92FF',
						'color':'#fff'}" >
			<view :style="{'height':navigation.height+'px'}" class="topNavigation">
				我的订单
			</view>
		</view>
		
		<view class="screen_select">
			<view class="screen_select_name" @click="orderselect(-1)">
				<text :class="orderstatic == -1?'words':''">全部</text>
				<view class="line" v-if="orderstatic == -1">
					
				</view>
			</view>
			<view class="screen_select_name" @click="orderselect(0)">
				
				<text :class="orderstatic == 0?'words':''">团餐</text>
				<view class="line" v-if="orderstatic == 0">
					
				</view>
			</view>
			<view class="screen_select_name" @click="orderselect(1)">
				
				<text :class="orderstatic == 1?'words':''">拼餐</text>
				<view class="line" v-if="orderstatic == 1">
					
				</view>
			</view>
			<view class="screen_select_name" @click="orderselect(2)">
				
				<text :class="orderstatic == 2?'words':''">零餐</text>
				<view class="line" v-if="orderstatic == 2">
					
				</view>
			</view>
			<view class="screen_select_name" @click="orderselect(3)">
				
				<text :class="orderstatic == 3?'words':''">贵宾</text>
				<view class="line" v-if="orderstatic == 3">
					
				</view>
			</view>
		</view>
		
		<view class="good_order_box" @click="orderD()">
			<view class="good_item_order" v-for="(item,index) in orderDataList" :key='index' v-if="item.orderStatus == orderstatic || orderstatic == -1">
				<view class="good_item_top">
					<view class="item_order_box">
						<view class="good_logo">
							<!-- logo -->
						</view>
						<view class="good_name">
							店铺名称
						</view>
					</view>
					<view class="order_statce">
						待支付
					</view>
					
				</view>
				
				<view class="order_miao">
					<view class="order_img_name">
						<view class="order_img" v-for="(items,indexs) in item.orderItemList" :key='indexs'>
							<view class="order_item_img">
								<image :src="items.productImg" style="width: 100%;height: 100%;" mode=""></image>
							</view>
						</view>
						<view class="order_item_name"  v-for="(items,indexs) in item.orderItemList" :key='indexs'>
							{{item.productName}}、
						</view>
					</view>
					<view class="order_price_num">
						<view class="order_item_price">
							￥{{item.price}}
						</view>
						<view class="order_item_num">
							共{{item.num}}件
						</view>
					</view>
				</view>
				
				<view class="difference">
					共3人下单还差345可下单
				</view>
				
				<view class="button_group">
					<view class="button_q">
						取消付款
					</view>
					<view class="button_q">
						立即付款
					</view>
					<view class="button_q">
						提交订单
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Api from "@/common/http.js"
	export default {
		data() {
			return {
				navigation:'',
				orderstatic:-1,
				orderDataList:'',
				user:''
			}
		},
		onShow() {
			var user = uni.getStorageSync('user');
			this.user = user
			this.getOrderList()
		},
		created() {
			this.navigation = this.$store.getters.getNavigation
		},
		methods: {
			getOrderList(){
				var data = {
					userId:this.user.id,
					storeId:''
				}
				Api.getOrderList(data).then(res => {
					this.orderDataList = res.data.data
					
					this.orderDataList.map((item,index)=>{
						item.num = 0
						item.price = 0
						item.orderItemList.map((items,indexs)=>{
							item.num += items.num
							item.price = items.price
						})
					})
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
				
			},
			orderselect(index){
				this.orderstatic = index
			},
			orderD(){
				uni.navigateTo({
					url:'../../pagesA/orderDetails/orderDetails'
				})
			}
		}
	}
</script>

<style>
	.content{
		background: #F8F8F8;
	}
	
	.topNavigation{
		font-size: 40rpx;
		margin-left: 40rpx;
		font-weight: 800;
	}
	
	.screen_select{
		display: flex;
		background: #0D92FF;
	}
	
	.screen_select_name{
		font-size: 36rpx;
		margin:20rpx 30rpx;
		color: #fff;
		position: relative;
	}
	
	.good_item_order{
		margin: 20rpx;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	
	.good_item_top{
		display: flex;
		justify-content: space-between;
		margin-bottom: 10rpx;
	}
	
	.item_order_box{
		display: flex;
		align-items: center;
	}
	
	.good_logo{
		width: 40rpx;
		height: 40rpx;
		background: #000;
		border: 10rpx;
	}
	
	.good_name{
		font-size: 26rpx;
		font-weight: 800;
		margin-left: 10rpx;
	}
	
	.order_statce{
		font-size: 26rpx;
	}
	
	.order_miao{
		display: flex;
		justify-content: space-between;
	}
	
	.order_img_name{
		display: flex;
		align-items: center;
	}
	
	.order_img{
		display: flex;
	}
	
	.order_item_img{
		width: 112rpx;
		height: 112rpx;
		background: #000;
	}
	
	.order_item_name{
		color: #999;
		margin-left: 20rpx;
	}
	
	.order_item_price{
		text-align: center;
		color: #000;
		font-size: 50rpx;
	}
	
	.order_item_num{
		font-size: 26rpx;
		text-align: center;
		color: #B4BDB5;
	}
	
	.difference{
		margin: 10rpx 0 20rpx 0;
		font-size: 26rpx;
		color: #999;
	}
	
	.button_group{
		display: flex;
		justify-content: flex-end;
	}
	
	.button_q{
		padding: 14rpx 36rpx;
		border: 1rpx solid #ccc;
		border-radius: 10rpx;
		color: #333;
		font-size: 24rpx;
		margin-left: 10rpx;
	}
	
	.line{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 10rpx;
		border-radius: 5rpx;
		background: #FFA107;
		/* z-index: -1; */
	}
	
	.words{
		font-weight: bold;
		position: relative;
		z-index: 101;
	}
</style>
