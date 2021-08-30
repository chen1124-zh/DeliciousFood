<template>
	<view class="t1">
		<view class="single_shop"  v-for="(item,idx) in cat" :key="idx">
			<image class="img1" src="../../static/2.png" mode="widthFix" @click="detelApi(item.storeId)"></image>
			<view class="title">
				{{item.storeName}}  <image src="../../static/1.png" mode="widthFix"></image>
			</view>
			<view class="shop_good">
				<view class="shop_item" v-for="(iteam,index) in item.shoppingCarts" :key="index">
					<view class="shop_item_introduce">
						<view class="shop_item_img">
							<image :src="iteam.urlImages" mode=""></image>
							
						</view>
						<view class="">
							<view class="" style="font-size: 30rpx;">
								{{iteam.productName}}
							</view>
							<view class="" style="font-size: 24rpx;color: #999;">
								<text v-for="(iteam2,idx2) in iteam.spec">{{iteam2.name}}、</text>
							</view>
							<view class="" style="font-size: 24rpx;">
								x{{iteam.num}}
							</view>
						</view>
					</view>
					<view class="set">
						<text>￥{{iteam.price}}</text>
					</view>
				</view>
				
				
			</view>
			
			<view class="t2" style="display: flex;justify-content: space-between;align-items: center;">
				<view class="t3">
					已优惠￥10
				</view>
				<view class="t4">
					合计<text>￥{{item.total}}</text>
					<view class="btn" @click="toUrl(item)">去结算</view>
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
				user:"",
				cat:[],
				
			}
		},
		onShow() {
			this.user = uni.getStorageSync('user')
			this.getShoppingCartList()
		},
		methods: {
			toUrl(item){
				uni.navigateTo({
					url:'../timely/timely?sid='+item.storeId
				})
			},
			detelApi(id){
				Api.deleteShoppingCar({id:id}).then(res => {
					this.getShoppingCartList()
					uni.showToast({
						title: res.data.data,
						icon: 'none'
					})
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			getShoppingCartList(){
				var data = {
					userId:this.user.id
				}
				Api.getShoppingCart(data).then(res => {
					res.data.data.forEach(function(e,idx){
						e.shoppingCarts.forEach(function(e1,idx1){
							e1['spec']=JSON.parse(e1.spec)
						})
					})
					
					this.cat = res.data.data
					
					
				}).catch(err => {
					uni.showToast({
						title: err.msg,
						icon: 'none'
					})
				});
			},
			
		}
	}
</script>

<style lang="scss">
	page{
		background: #f5f5f5;
	}
	.t2{
		border-top: 1px solid #F5F5F5;
		margin-top: 30rpx;
		padding-top: 30rpx;
	}
	.t3{
		font-size: 24rpx;
		color: #999;
	}
	.set{
		color: red;
	}
	.img1{
		width: 30rpx;
		height: 30rpx;
		right: 30rpx;
		position: absolute;
	}
	.title{
		
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;
		
		image{
			margin-left: 10rpx;
			width: 30rpx;
			height: 30rpx;
		}
		
	}
	.t4{
		display: flex;
		align-items: center;
		.btn{
			color: #fff;
			font-size: 26rpx;
			margin-left: 10rpx;
			padding: 6upx 20rpx ;
			border-radius: 30rpx;
			background: #0D92FF;
		}
		
		text{
			color: red;
		}
	}
	.single_shop{
		margin: 30rpx;
		position: relative;
		background: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	
	.shop_item{
		display: flex;
		justify-content: space-between;
		margin-bottom: 30rpx;
	}
	
	.shop_item_img{
		width: 100rpx;
		height: 100rpx;
		background: #eee;
		margin-right: 20rpx;
		image{
			width: 100rpx;
			height: 100rpx;
		}
	}
	
	.shop_item_introduce{
		display: flex;
	}
</style>
