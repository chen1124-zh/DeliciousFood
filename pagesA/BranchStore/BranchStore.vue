<template>
	<view style="margin: 30rpx;">
		<view class="single_branch" v-for="(item,index) in shopDataList" :key="index">
			<view class="">
				<view class="branch_name">
					{{item.storeName}}
				</view>
				<view class="branch_p">
					<u-rate :count="count" v-model="value" active-color='#F6B125' :disabled="true"></u-rate> 4.0
				</view>
				<view class="branch_l">
					{{item.area}}
				</view>
			</view>
			<view class="contact" @click.stop="gitPhone">
				<view class="">
					<uni-icons type="phone-filled" color="#289EFF" size="30"></uni-icons>
				</view>
				<view class="" style="color: #289EFF;font-size: 28rpx;">
					联系商家
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
				id:'',
				shopDataList:'',
				count: 5,
				value: 4
			}
		},
		onLoad(op) {
			this.id = op.id
			this.getshopList()
		},
		methods: {
			gitPhone() {
				uni.showActionSheet({
					itemList: ['1899999990'],
					itemColor: '#1890FF',
					success: function(res) {
			
			
						uni.makePhoneCall({
							phoneNumber: '1899999990' //仅为示例
						});
			
						console.log(res);
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			getshopList(){
				var than = this
				var data = {
					userId:this.id,
				} 
				Api.getStoreList(data).then(res => {
					console.log('shopList',res)
					than.shopDataList = res.data
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

<style>
	.single_branch{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1rpx solid #ccc;
		padding: 30rpx 0;
	}
	
	
	
	.branch_name{
		font-weight: bold;
		font-size: 35rpx;
	}
	
	.branch_p{
		color: #999;
		font-size: 30rpx;
	}
	
	.branch_l{
		color: #999;
		font-size: 30rpx;
	}
	
	.contact {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
